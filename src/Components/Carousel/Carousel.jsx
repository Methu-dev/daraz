import React, { useState, useEffect } from 'react';
import slider1 from '../../images/slider1.jpg'; 
import slider2 from '../../images/slider2.jpg'; 
import slider3 from '../../images/slider3.jpg'; 
import slider4 from '../../images/slider4.jpg'; 
import slider5 from '../../images/slider5.jpg'; 

function Carousel() {
    const images = [slider1, slider2, slider3, slider4, slider5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-56 md:h-96 flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} className="w-full flex-shrink-0" alt="Slide Image" />
                ))}
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 flex space-x-3 -translate-x-1/2">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} 
                    />
                ))}
            </div>
            
            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full">
                ◀
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full">
                ▶
            </button>
        </div>
    );
}

export default Carousel;
