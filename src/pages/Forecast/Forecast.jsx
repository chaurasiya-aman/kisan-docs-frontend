import React, { useState, useEffect } from "react";
import {
  FaCloudSun,
  FaTint,
  FaWind,
  FaExclamationTriangle,
  FaShieldAlt,
  FaLeaf,
  FaSpinner,
} from "react-icons/fa";
import WeatherCard from "../../components/WeatherCard/WeatherCard.jsx";
import SeverityBadge from "../../components/SeverityBadge/SeverityBadge.jsx";
import "./Forecast.css";

const riskColors = {
  low: "#2E7D32",
  medium: "#F57F17",
  high: "#E65100",
  critical: "#C62828",
};

function getDiseaseRisks(weather) {
  if (!weather) return [];
  const { temperature=0, humidity=0, rainfall=0 } = weather;

  return [
    {
      name: "Early Blight",
      crop: "Tomato",
      risk:
        humidity > 70 && temperature > 25
          ? "high"
          : humidity > 60
            ? "medium"
            : "low",
      reason:
        humidity > 70
          ? "High humidity + warm temperature ideal for fungal growth."
          : "Moderate conditions — monitor closely.",
    },
    {
      name: "Downy Mildew",
      crop: "Grapes",
      risk: rainfall > 5 ? "high" : humidity > 65 ? "medium" : "low",
      reason:
        rainfall > 5
          ? "Recent rainfall triggers disease spread."
          : "Humidity within manageable range.",
    },
    {
      name: "Leaf Rust",
      crop: "Wheat",
      risk:
        temperature >= 15 && temperature <= 25 && humidity > 60
          ? "medium"
          : "low",
      reason:
        "Temperature and humidity conditions evaluated for rust development.",
    },
    {
      name: "Powdery Mildew",
      crop: "Cucumbers",
      risk: humidity > 80 ? "medium" : "low",
      reason: "High humidity favors mildew formation.",
    },
  ];
}

function getPreventiveActions(weather) {
  if (!weather) return [];

  const actions = [];

  if (weather.humidity > 70)
    actions.push({
      icon: <FaShieldAlt />,
      action: "Apply preventive fungicide spray before humid period",
    });

  if (weather.rainfall > 0)
    actions.push({
      icon: <FaTint />,
      action: "Avoid overhead irrigation during wet conditions",
    });

  actions.push({
    icon: <FaLeaf />,
    action: "Remove infected or lower leaves regularly",
  });
  actions.push({
    icon: <FaWind />,
    action: "Maintain proper airflow between crops",
  });

  return actions;
}

function Forecast() {
  const [forecast, setForecast] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationName, setLocationName] = useState("Detecting location...");

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,relative_humidity_2m_max&timezone=auto`;

      const res = await fetch(url);
      const data = await res.json();

      const daily = data.daily;

      const formatted = daily.time.map((t, i) => ({
        date: t,
        maxTemp: daily.temperature_2m_max[i],
        minTemp: daily.temperature_2m_min[i],
        rainfall: daily.precipitation_sum[i],
        humidity: daily.relative_humidity_2m_max[i],
      }));

      setForecast(formatted);

      const today = formatted[0];

      const liveWeather = {
        temperature: today.maxTemp,
        humidity: today.humidity,
        rainfall: today.rainfall,
        diseaseRisk:
          today.humidity > 80 || today.rainfall > 5
            ? "high"
            : today.humidity > 60
              ? "medium"
              : "low",
      };

      setWeather(liveWeather);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationName("Lucknow, UP (default)");
      fetchWeather(26.8467, 80.9462);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocationName(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        fetchWeather(latitude, longitude);
      },
      () => {
        setLocationName("Lucknow, UP (default)");
        fetchWeather(26.8467, 80.9462);
      },
    );
  }, []);

  const weatherCards = weather
    ? [
        {
          icon: "🌡️",
          label: "Temperature",
          value: weather.temperature.toFixed(1),
          unit: "°C",
        },
        {
          icon: "💧",
          label: "Humidity",
          value: weather.humidity.toFixed(0),
          unit: "%",
        },
        {
          icon: "🌧️",
          label: "Rainfall",
          value: weather.rainfall.toFixed(1),
          unit: "mm",
        },
        {
          icon: "🌿",
          label: "Disease Risk",
          value: weather.diseaseRisk.toUpperCase(),
          unit: "",
        },
      ]
    : [];

  const diseases = getDiseaseRisks(weather);
  const preventive = getPreventiveActions(weather);
  const highRiskCount = diseases.filter((d) => d.risk === "high").length;

  return (
    <div className="page-wrapper">
      <div className="forecast__hero">
        <div className="container forecast__hero-inner">
          <div>
            <h1 className="forecast__hero-title">
              7-Day Disease Risk Forecast
            </h1>
            <p className="forecast__hero-sub">
              AI-powered agricultural weather insights
            </p>
          </div>

          <div className="forecast__location">
            <FaCloudSun />
            <span>{locationName}</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          {loading && (
            <div style={{ textAlign: "center", padding: 40 }}>
              <FaSpinner
                style={{ fontSize: 32, animation: "spin 1s linear infinite" }}
              />
              <p>Fetching weather data...</p>
            </div>
          )}

          {error && (
            <div className="forecast__alert">
              <FaExclamationTriangle />
              <div>{error}</div>
            </div>
          )}

          {weather && (
            <>
              {highRiskCount > 0 && (
                <div className="forecast__alert">
                  <FaExclamationTriangle />
                  <div>
                    High disease risk detected based on current humidity and
                    rainfall conditions.
                  </div>
                </div>
              )}

              <div className="forecast__section-title">Current Weather</div>

              <div className="forecast__weather-grid">
                {weatherCards.map((c) => (
                  <WeatherCard key={c.label} {...c} />
                ))}
              </div>

              <div className="forecast__bottom-grid">
                <div>
                  <div className="forecast__section-title">Disease Risk</div>

                  <div className="forecast__disease-list">
                    {diseases.map((d) => (
                      <div key={d.name} className="forecast__disease-item">
                        <div className="forecast__disease-header">
                          <div>
                            <div>{d.name}</div>
                            <div>{d.crop}</div>
                          </div>
                          <SeverityBadge level={d.risk} />
                        </div>
                        <p>{d.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="forecast__section-title">
                    Preventive Actions
                  </div>

                  <div className="forecast__preventive">
                    {preventive.map((p, i) => (
                      <div key={i}>
                        {p.icon} {p.action}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <div className="forecast__section-title">Best Crops</div>

                    {(weather.humidity > 70
                      ? ["Okra", "Bitter Gourd", "Spinach", "Pumpkin"]
                      : ["Tomato", "Chilli", "Brinjal", "Capsicum"]
                    ).map((c) => (
                      <div key={c}>
                        <FaLeaf /> {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {forecast.length > 0 && (
        <div style={{ marginTop: 40 }} className="weather-container">
          <div className="forecast__section-title">7-Day Weather Forecast</div>

          <div className="forecast__weekly-grid">
            {forecast.map((day, i) => (
              <div key={i} className="forecast__day-card">
                <div className="forecast__day-title">
                  {new Date(day.date).toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </div>

                <div className="forecast__metrics">
                  <div className="forecast__metric">
                    🌡️
                    <span>
                      {day.maxTemp}° / {day.minTemp}°
                    </span>
                    <small>Temp</small>
                  </div>

                  <div className="forecast__metric">
                    💧
                    <span>{day.humidity}%</span>
                    <small>Humidity</small>
                  </div>

                  <div className="forecast__metric">
                    🌧️
                    <span>{day.rainfall} mm</span>
                    <small>Rain</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;
