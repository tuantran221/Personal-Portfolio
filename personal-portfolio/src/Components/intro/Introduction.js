import React from 'react';
import './Introduction.css';
import Github from '../../img/github.png';
import LinkedIN from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import crown from '../../img/crown.png';
const Introduction = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Tuan Tran</span>
                    <span>
                        Frontend Developer with high level of experence in web designing and of development, producting
                        the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icon">
                    <img src={Github} alt="" />
                    <img src={LinkedIN} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />

                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={crown} txt1="Web" txt2="developer" />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </div>
                {/* blur divs */}
                <div className="blur" style={{ background: 'rgb(238 210 255' }}></div>
                <div className='blur' style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}>

                </div>
            </div>
        </div>
    );
};

export default Introduction;
