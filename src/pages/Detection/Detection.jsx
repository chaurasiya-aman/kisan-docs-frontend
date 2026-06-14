import React, { useState, useRef } from "react";
import { FaFlask, FaLeaf, FaImage } from "react-icons/fa";
import axios from "axios";
import UploadBox from "../../components/UploadBox/UploadBox.jsx";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Detection.css";

const sampleImages = [
  { id: 1, label: "Tomato — Early Blight", emoji: "🍅" },
  { id: 2, label: "Wheat — Leaf Rust", emoji: "🌾" },
  { id: 3, label: "Rice — Brown Spot", emoji: "🍚" },
];

function Detection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSample, setSelectedSample] = useState(null);

  const handleImageSelect = (file) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
    setSelectedSample(null);
  };

  const handleAnalyse = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/predict`,
        formData
      );

      setResult(res.data);
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.message ||
        "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSample = (sample) => {
    setSelectedSample(sample);
    setResult(null);
    setError(null);
  };

  return (
    <div className="page-wrapper">
      <div className="detection__hero">
        <div className="container">
          <h1 className="detection__hero-title">Plant Disease Detection</h1>
          <p className="detection__hero-subtitle">
            Upload a clear photo of the affected leaf. Avoid shadows — good
            daylight gives the best results.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container detection__layout">
          <div className="detection__left">
            <div className="detection__panel">
              <h2 className="detection__panel-title">
                <FaImage /> Upload Leaf Photo
              </h2>
              <UploadBox onImageSelect={handleImageSelect} />

              <div className="detection__sample-section">
                <p className="detection__sample-label">
                  No photo? Try a sample:
                </p>
                <div className="detection__samples">
                  {sampleImages.map((s) => (
                    <button
                      key={s.id}
                      className={`detection__sample-btn${selectedSample?.id === s.id ? " detection__sample-btn--active" : ""}`}
                      onClick={() => handleSample(s)}
                      type="button"
                    >
                      <span>{s.emoji}</span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>
                {selectedSample && (
                  <p className="detection__sample-selected">
                    Sample selected: {selectedSample.label}
                  </p>
                )}
              </div>

              <Button
                variant="primary"
                size="lg"
                icon={<FaFlask />}
                onClick={handleAnalyse}
                disabled={!selectedFile || loading}
              >
                {loading ? "Analysing..." : "Analyse Leaf"}
              </Button>
            </div>

            <div className="detection__tips-panel">
              <h3 className="detection__tips-title">Tips for better results</h3>
              <ul className="detection__tips-list">
                <li>Photograph a single leaf, filling the frame</li>
                <li>Use natural daylight — avoid flash</li>
                <li>Capture the underside if spots appear there</li>
                <li>Keep the image in focus and steady</li>
              </ul>
            </div>
          </div>

          <div className="detection__right">
            {!loading && !result && !error && (
              <div className="detection__placeholder">
                <div className="detection__placeholder-icon">
                  <FaLeaf />
                </div>
                <h3>No analysis yet</h3>
                <p>
                  Upload a leaf photo and tap "Analyse Leaf" to get the disease
                  report.
                </p>
              </div>
            )}

            {loading && <Loader text="Scanning for disease patterns..." />}

            {error && !loading && (
              <div className="detection__placeholder">
                <div
                  className="detection__placeholder-icon"
                  style={{ color: "#e53e3e" }}
                >
                  ⚠️
                </div>
                <h3>Analysis failed</h3>
                <p style={{ color: "#e53e3e" }}>{error}</p>
              </div>
            )}

            {result && !loading && (
              <div className="detection__result">
                <div className="detection__result-header">
                  <span className="detection__result-badge">
                    Analysis Complete
                  </span>
                </div>
                <DiseaseCard disease={result} />
                <div className="detection__actions">
                  <Button variant="outline">Download Report</Button>
                  <Button variant="ghost">Share with Agronomist</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detection;
