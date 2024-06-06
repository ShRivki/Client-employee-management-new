import React, { useState, useEffect } from 'react';

const HomePage = () => {

    const images = [
        require('./Image/אאוטסורסינג-2-1021x580.jpg'), 
        require('./Image/migrated-b7b11bd6bb14a402bdf3be32a648e4f1-31.jpg'),
        require('./Image/EmployeeImage.jpg')
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(changeImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '4em', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255,255,255,0.5)', 
                padding: '10px', 
                color: 'rgb(12, 20, 117)'
            }}>Employee management system</h1>
        </div>
    );
};

export default HomePage;
