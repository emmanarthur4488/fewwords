import React from 'react'
import './familyaccess.css'
import { Link, useParams } from 'react-router-dom';

const FamilyAccess = () => {
    const { title } = useParams();
  return (
    <div>
        <div className="otp-container">
            <div className="otp-box">
                <div className="lock-icon">
                    {/* <img src={Icon} alt="Lock Icon" /> */}
                </div>

                <h2>CONFIRM YOUR IDENTITY</h2>
                <p style={{ textTransform: 'uppercase' }}>TOO ACCES {title} ENTER PASSWORD</p>
                <div className="otp-inputs">
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" />
                </div>
                <p className="resend-link">HAE YOU FORGOTEN YOUR PASWORD?
                    <Link to='/lastfewwords/family-legacy' style={{ marginLeft: '5px' }}>Resend</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FamilyAccess
