import React from "react";
import filming from '../assets/filming.mp4'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'

export default function MediaHeader() {
    // todo не работает затенение
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white">
            <div className='top-main'>
                <video src={filming} autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto"/>
                <div className='top-content'>
                    <h2>Capture Stunning Aerial Footage</h2>
                </div>
            </div>
            <div className="image-container">
                <div className="bottom-images">
                    <img src={photo1} alt="Image 1"/>
                    <img src={photo2} alt="Image 2"/>
                </div>
            </div>
        </section>
    );
};
