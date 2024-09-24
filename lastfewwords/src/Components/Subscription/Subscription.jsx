import React from 'react'
import './subscription.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
    const navigate = useNavigate();

    const subscriptionList = [
        { storage: '100GB', price: '200$' },
        { storage: '150GB', price: '300$' },
        { storage: '200GB', price: '400$' },
        { storage: '500GB', price: '500$' },
        { storage: '1000GB', price: '800$' },
    ];
  return (
    <div className="family-legacy-container">
        <header className="family-header">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                onClick={() => { navigate('/lastfewwords/dashboard') }} />
            <h2>BUY A NEW PACKAGE</h2>
        </header>
        <div className="family-grid">
            {subscriptionList.map((member, index) => (
                <div key={index} style={{ cursor: 'pointer' }}
                    className={`family-member ${member.storage === '1000GB' ? 'wide' : ''}`}>
                    <p style={{ textTransform: 'uppercase' }}>{member.storage}</p>
                    <p className="storage">{member.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Subscription
