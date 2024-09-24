import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faUserCircle,
    faVolumeUp,
    faVideo,
    faFileAlt,
    faImage,
    faUsers,
    faShoppingCart,
    faLock,
    faCloudArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './dashboard.css'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleFiles = (file) => {
        navigate(file)
    }

    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div>
      <div className="dashboard-container">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <header className="dashboard-header" style={{ cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleSidebar} />
                <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            </header>
            <div className="welcome-text">
                <h1>Welcome {userDetails.name},</h1>
            </div>
            <div className="storage-space">
                <h2>Storage Space</h2>
                <div className="storage-bar">
                    <div className="storage-used" style={{ width: '77.8%' }}></div>
                </div>
                <p>155.6 of 200 GB Used</p>
            </div>
            <div className="features-grid">
                <div className="feature-item" style={{ cursor: 'pointer' }}
                    onClick={() => { handleFiles('/audio-files') }}>
                    <FontAwesomeIcon icon={faVolumeUp} className="feature-icon" />
                    <p>Audio</p>
                </div>
                <div className="feature-item" style={{ cursor: 'pointer' }}
                    onClick={() => { handleFiles('/video-files') }}>
                    <FontAwesomeIcon icon={faVideo} className="feature-icon" />
                    <p>Video</p>
                </div>
                <div className="feature-item" style={{ cursor: 'pointer' }}
                    onClick={() => { handleFiles('/document-files') }}>
                    <FontAwesomeIcon icon={faFileAlt} className="feature-icon" />
                    <p>Document</p>
                </div>
                <div className="feature-item" style={{ cursor: 'pointer' }}
                    onClick={() => { handleFiles('/image-files') }}>
                    <FontAwesomeIcon icon={faImage} className="feature-icon" />
                    <p>Images</p>
                </div>
                <div className="feature-item" style={{ cursor: 'pointer' }}
                    onClick={() => { handleFiles('/family-legacy') }}>
                    <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                    <p>Family Legacy</p>
                </div>
            </div>
            <footer className="dashboard-footer">
                <FontAwesomeIcon icon={faCloudArrowUp} className="footer-icon"
                    style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faShoppingCart} className="footer-icon"
                    style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faLock} className="footer-icon"
                    style={{ cursor: 'pointer' }} />
            </footer>
        </div>
    </div>
  )
}

export default Dashboard
