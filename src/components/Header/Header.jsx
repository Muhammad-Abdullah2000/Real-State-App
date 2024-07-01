import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <section className='h-wrapper'>

        <div className=" flexcenter paddings innerwidth h-container">
            <h1>Homyz</h1>

            <div className=" flexcenter h-menu">
                <a href="/">Residences</a>
                <a href="/">Our Values</a>
                <a href="/">Contact Us</a>
                <a href="/">Get Started</a>
                <button className='button'>
                <a href="/">Contact</a>
                </button>
               
            </div>
        </div>


    </section>
  )
}
