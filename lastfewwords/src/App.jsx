import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Authentication/Login'
import Verify from './Components/Verify/Verify'
import Signup from './Components/Authentication/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
import AudioFile from './Components/AudioFile/AudioFile'
import VideoFiles from './Components/VideoFile/VideoFiles'
import DocumentFiles from './Components/DocumentFiles/DocumentFiles'
import ImageFiles from './Components/ImageFiles/ImageFiles'
import FamilyLegacy from './Components/FamilyLegacy/FamilyLegacy'
import FamilyAcces from './Components/FamilyAccess/FamilyAccess'
import Subscription from './Components/Subscription/Subscription'
import ImageUpload from './Components/ImageUpload/ImageUpload'
import AudioUpload from './Components/AudioUpload/AudioUpload'
import DocumentUpload from './Components/DocumentUpload/DocumentUplaod'
import VideoUpload from './Components/VideoUpload/VideoUpload'
import Loader from './Components/Loader/Loader'
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/lastfewwords/" element={<Navigate to="/lastfewwords/login" />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/audio-files" element={<AudioFile />} />
          <Route path="/video-files" element={<VideoFiles />} />
          <Route path="/document-files" element={<DocumentFiles />} />
          <Route path="/image-files" element={<ImageFiles />} />
          <Route path="/family-legacy" element={<FamilyLegacy />} />
          <Route path="/family-acces/:title" element={<FamilyAcces />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/imageupload" element={<ImageUpload />} />
          <Route path="/audioupload" element={<AudioUpload />} />
          <Route path="/documentupload" element={<DocumentUpload />} />
          <Route path="/videoupload" element={<VideoUpload />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
