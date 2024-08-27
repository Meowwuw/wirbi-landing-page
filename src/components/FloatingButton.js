import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
    return (
        <div className="floating-button">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Whatsapp.png" alt="WhatsApp" />
            </a>
        </div>
    );
};

export default FloatingButton;
