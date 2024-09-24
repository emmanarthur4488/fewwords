import React from 'react'
import './videofiles.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoFiles = () => {
    const videoFiles = ['VIDEO 1', 'VIDEO 2', 'VIDEO 3', 'VIDEO 4', 'VIDEO 5', 'VIDEO 6', 'VIDEO 7', 'VIDEO 8'];
    const navigate = useNavigate();
  return (
    <div className="audio-files-container">
        <header className="audio-header">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                onClick={() => { navigate('/lastfewwords/dashboard') }} />
            <h2>Video Files</h2>
        </header>
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="audio-list">
            {videoFiles.map((file, index) => (
                <div key={index} className="audio-item">
                    <FontAwesomeIcon icon={faPlay} className="audio-icon" />
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

export default VideoFiles
