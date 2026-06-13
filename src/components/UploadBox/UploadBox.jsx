import React, { useEffect, useRef, useState } from 'react'
import { FaCloudUploadAlt, FaImage, FaTimes } from 'react-icons/fa'
import './UploadBox.css'

function UploadBox({ onImageSelect }) {
  const [dragging, setDragging] = useState(false)
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    if (onImageSelect) onImageSelect(file, url)
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleChange = (e) => {
    handleFile(e.target.files[0])
  }

  const clearImage = () => {
    setPreview(null)
    if (inputRef.current) inputRef.current.value = ''
    if (onImageSelect) onImageSelect(null, null)
  }

  return (
    <div className="upload-box-wrapper">
      {!preview ? (
        <div
          className={`upload-box${dragging ? ' upload-box--drag' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="upload-box__input"
            onChange={handleChange}
          />
          <div className="upload-box__content">
            <div className="upload-box__icon"><FaCloudUploadAlt /></div>
            <p className="upload-box__title">Drop your leaf photo here</p>
            <p className="upload-box__subtitle">or click to browse from device</p>
            <span className="upload-box__formats">Supports JPG, PNG, WEBP — up to 10 MB</span>
          </div>
        </div>
      ) : (
        <div className="upload-box__preview">
          <img src={preview} alt="Uploaded leaf" />
          <button className="upload-box__clear" onClick={clearImage} aria-label="Remove image">
            <FaTimes />
          </button>
          <div className="upload-box__preview-label">
            <FaImage /> Image ready for analysis
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadBox
