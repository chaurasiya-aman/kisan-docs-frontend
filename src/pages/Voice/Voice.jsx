import React, { useState, useEffect, useRef } from 'react'
import { FaMicrophone, FaMicrophoneSlash, FaVolumeUp, FaLeaf, FaCommentDots } from 'react-icons/fa'
import './Voice.css'

const languages = ['Hindi', 'English', 'Marathi', 'Telugu', 'Tamil', 'Punjabi', 'Bengali', 'Gujarati']

const suggestedCommands = [
  { icon: '🍅', text: 'Mere tamatar ke patte par daag hain' },
  { icon: '🌾', text: 'Gehu mein kya bimari ho sakti hai?' },
  { icon: '🌧️', text: 'Aaj mausam kaisa rahega?' },
  { icon: '💊', text: 'Kaunsa keetnashak use karna chahiye?' },
  { icon: '🌱', text: 'Dhaan ki bimari ka upay batao' },
  { icon: '📍', text: 'Mere gaon mein kya bimari chal rahi hai?' },
]

const mockConversation = [
  { role: 'user', text: 'i want to ask Question', time: '10:32 AM' },
  { role: 'bot', text: 'Yes, Go ahead', time: '10:32 AM' },
]

function Voice() {
  const [listening, setListening] = useState(false)
  const [selectedLang, setSelectedLang] = useState('Hindi')
  const [conversation, setConversation] = useState(mockConversation)

  const recognitionRef = useRef(null)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("voice_chat")
    if (saved) {
      setConversation(JSON.parse(saved))
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("voice_chat", JSON.stringify(conversation))
  }, [conversation])

  // Speech setup
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript

      const userMsg = {
        role: 'user',
        text,
        time: new Date().toLocaleTimeString()
      }

      setConversation(prev => [...prev, userMsg])

      setTimeout(() => {
        const botMsg = {
          role: 'bot',
          text: `Analyzing: "${text}"`,
          time: new Date().toLocaleTimeString()
        }

        setConversation(prev => [...prev, botMsg])
      }, 700)
    }

    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)

    recognitionRef.current = recognition
  }, [])

  const getLangCode = (lang) => {
    switch (lang) {
      case 'Hindi': return 'hi-IN'
      case 'English': return 'en-US'
      case 'Marathi': return 'mr-IN'
      case 'Telugu': return 'te-IN'
      case 'Tamil': return 'ta-IN'
      case 'Punjabi': return 'pa-IN'
      case 'Bengali': return 'bn-IN'
      case 'Gujarati': return 'gu-IN'
      default: return 'en-US'
    }
  }

  const toggleListen = () => {
    const recognition = recognitionRef.current
    if (!recognition) return

    if (!listening) {
      recognition.lang = getLangCode(selectedLang)
      recognition.start()
      setListening(true)
    } else {
      recognition.stop()
      setListening(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="voice__hero">
        <div className="container">
          <h1 className="voice__hero-title">Voice Assistant</h1>
          <p className="voice__hero-sub">Ask about crop diseases, treatments, or weather — in your own language</p>
        </div>
      </div>

      <div className="section">
        <div className="container voice__layout">

          <div className="voice__left">
            <div className="voice__mic-panel">

              <div className="voice__lang-row">
                <span className="voice__lang-label">Language:</span>

                <div className="voice__lang-tabs">
                  {languages.map(l => (
                    <button
                      key={l}
                      className={`voice__lang-tab${selectedLang === l ? ' voice__lang-tab--active' : ''}`}
                      onClick={() => setSelectedLang(l)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="voice__mic-area">
                <div className={`voice__mic-ring${listening ? ' voice__mic-ring--active' : ''}`}>
                  <button
                    className={`voice__mic-btn${listening ? ' voice__mic-btn--listening' : ''}`}
                    onClick={toggleListen}
                  >
                    {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                  </button>
                </div>

                <p className="voice__mic-status">
                  {listening ? `Listening in ${selectedLang}...` : `Tap to speak`}
                </p>

                {listening && (
                  <div className="voice__wave">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="voice__wave-bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                )}
              </div>

              <div className="voice__output">
                <div className="voice__output-label">
                  <FaVolumeUp /> Audio response will play here
                </div>
              </div>

            </div>
          </div>

          <div className="voice__right">

            <div className="voice__conversation-header">
              <FaLeaf />
              <span>Conversation</span>
              <button className="voice__clear-btn" onClick={() => setConversation([])}>
                Clear
              </button>
            </div>

            <div className="voice__conversation">
              {conversation.length === 0 ? (
                <div className="voice__empty">
                  <FaMicrophone />
                  <p>No conversation yet. Start speaking!</p>
                </div>
              ) : (
                conversation.map((msg, i) => (
                  <div key={i} className={`voice__msg voice__msg--${msg.role}`}>
                    <div className="voice__msg-bubble">{msg.text}</div>
                    <div className="voice__msg-time">{msg.time}</div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Voice