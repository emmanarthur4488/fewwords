import React from 'react'
import './documentfiles.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const DocumentFiles = () => {
    const documentFiles = ['DOC 1', 'DOC 2', 'DOC 3', 'DOC 4', 'DOC 5', 'DOC 6', 'DOC 7', 'DOC 8'];
    const navigate = useNavigate();

  return (
    <div className="audio-files-container">
        <header className="audio-header">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                onClick={() => { navigate('/lastfewwords/dashboard') }} />
            <h2>Document Files</h2>
        </header>
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="audio-list">
            {documentFiles.map((file, index) => (
                <div key={index} className="audio-item">
                    <FontAwesomeIcon icon={faFileAlt} className="audio-icon" />
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

export default DocumentFiles
