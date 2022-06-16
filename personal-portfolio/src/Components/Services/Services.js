import React from 'react';
import Card from '../Card/Card';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import CV from "../../Tran-Trieu-Tuan.pdf"
const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of pringting Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href={CV} download>
                    <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}

            {/* first card */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, xd'} />
                </div>
                {/* second card */}

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses} heading={'Developer'} detail={'Html, css, Javascript, React'} />
                </div>

                {/* third card */}

                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={Humble} heading={'UI/UX'} detail={'Figma, Sketch, Photoshop, Adobe, xd'} />
                </div>
            </div>
            <div className='blur s-blur2' style={{background: "var(--purple"}}>

            </div>
        </div>
    );
};

export default Services;
