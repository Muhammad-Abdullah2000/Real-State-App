import React from 'react'
import "./Hero.css";
import image from "./hero-image.png";

export const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerwidth flexcenter hero-container">
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                    <h1>Discover <br /> Most Suitable <br /> Property</h1>
                    </div>
                    
                </div>

                <div className=" flexColStart hero-des">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="search-bar">
                    search Bar
                </div>

                <div className=" flexcenter hero-right">
                    <div className="image-container">
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>


        </section>
    )
}
