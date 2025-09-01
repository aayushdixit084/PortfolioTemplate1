import React from 'react';

const Footer = () => (
    <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
        position: 'relative',
        width: '100%',
        bottom: 0
    }}>
        <div>
            &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <div>
            Contact: +91-8007557981
        </div>
    </footer>
);

export default Footer;