import React from 'react'
import './loader.css'
import {useNavigate} from "react-router-dom"

const Loader = () => {
    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/dashboard')
    }, 4000);
  return (
    <div>
      <div class="loader"></div>
      <p className="loading">Loading....</p>
    </div>
  )
}

export default Loader
