import React from 'react';

const SupportUs = () => {
    const handleSupportClick = () => {
        window.open('https://www.buymeacoffee.com/aayushdixi6', '_blank');
    };

    return (
        <div style={{
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: '24px 16px',
            borderRadius: '8px 0 0 8px',
            zIndex: 1000,
            minWidth: '220px'
        }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Support Us</h3>
            <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                If you enjoy my work, consider supporting me!
            </p>
            <button
                onClick={handleSupportClick}
                style={{
                    background: '#FFDD00',
                    color: '#333',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Buy me a coffee
            </button>
        </div>
    );
};

export default SupportUs;