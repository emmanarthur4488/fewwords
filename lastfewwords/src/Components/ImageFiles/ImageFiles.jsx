import React from 'react'
import './imagefiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faPlus, faImage } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const ImageFiles = () => {
    const imageFiles = ['IMG 1', 'IMG 2', 'IMG 3', 'IMG 4', 'IMG 5', 'IMG 6', 'IMG 7', 'IMG 8'];
    const navigate = useNavigate();
  return (
    <div className="audio-files-container">
        <header className="audio-header">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                onClick={() => { navigate('/lastfewwords/dashboard') }} />
            <h2>Image Files</h2>
        </header>
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="audio-list">
            {imageFiles.map((file, index) => (
                <div key={index} className="audio-item">
                    <FontAwesomeIcon icon={faImage} className="audio-icon" />
                    <p className='file-text'>{file}</p>
                </div>
            ))}
        </div>
        <button className="add-button">
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}

export default ImageFiles
