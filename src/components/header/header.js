import React from 'react';
import * as css from './header.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import TextService from '../../config/text.service'
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particlesjs-config'

const Header = () => {
    return (
        <div className={css.header} id={'bg'}>
            <Particles params={particlesConfig} className={css.particles}/>
            <div className={css.avatar}/>
            <div className={css.title}>
                <div className={css.name}>{TextService.text.me}</div>
                <div className={css.underName}>{TextService.text.speciality}</div>
                <div className={css.underName}>{TextService.text.university}</div>
                <div className={css.underName}>{TextService.text.faculty}</div>
            </div>
        </div>
    )
};

export default Header;