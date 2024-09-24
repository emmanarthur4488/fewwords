import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './verify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import OtpInput from "otp-input-react"

const Verify = () => {
  const [otp, setOtp] = useState("")

  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="otp-header">
        <h2>Welcome to <br/> Last Few Words</h2>
        <div>
          <FontAwesomeIcon icon={faUserShield} className="user-shield"/>
        </div>
        <label htmlFor="ph"> Enter your OTP</label>
        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="otp-input"
        ></OtpInput>
        <button className="otp-btn">
          <FontAwesomeIcon icon={faSpinner} className="user-shield"/>
          <span>Verifty OTP</span>
        </button>
      </div>
    </div>
  )
}

export default Verify
