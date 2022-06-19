import React from 'react';
import Card from '../Card/Card';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import CV from '../../Tran-Trieu-Tuan.pdf';

import { themeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 1, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
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
                <motion.div
                    initial={{ left: '25%' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}
                >
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, xd'} />
                </motion.div>
                {/* second card */}

                <motion.div
                    initial={{ left: '-25%' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}
                >
                    <Card emoji={Glasses} heading={'Developer'} detail={'Html, css, Javascript, React, Python, Java, Redux-Saga'} />
                </motion.div>

                {/* third card */}

                <motion.div
                     initial={{ top: "19rem", left: "25rem" }}
                     whileInView={{ left: "12rem" }}
                     transition={transition}

                    style={{ top: '19rem', left: '12rem' }}
                >
                    <Card emoji={Humble} heading={'UI/UX'} detail={'Figma, Sketch, Photoshop, Adobe, xd'} />
                </motion.div>
            </div>
            <div className="blur s-blur2" style={{ background: 'var(--purple' }}></div>
        </div>
    );
};

export default Services;
