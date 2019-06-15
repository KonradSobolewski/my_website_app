import React from 'react';
import * as css from './header.module.scss'
import fb from '../../assets/images/fb.png'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
    render () {
        return(
            <div className={css.header}>
                <div className={css.avatar}/>
                <div className={css.title}>
                    <div className={css.name}>B.Sc. Konrad Sobolewski</div>
                    <div className={css.underName}>Junior Full Stack Developer</div>
                    <div className={css.underName}>Warsaw University Of Technology</div>
                    <div className={css.underName}>Faculty of Electronics and Information Technology</div>
                </div>
                <div className={css.iconArea}>
                    <a href={"https://www.linkedin.com/in/konrad-sobolewski-ba380a160/"} target={"_blank"}><img className={css.icon} src={linkedin} alt={"LOL"}/></a>
                    <a href={"https://github.com/KonradSobolewski"} target={"_blank"}> <img className={css.icon} src={github} alt={"LOL"}/></a>
                    <a href={"https://www.facebook.com/konrad.sobolewski.1"} target={"_blank"}> <img className={css.icon} src={fb} alt={"LOL"}/></a>
                </div>
            </div>
        )
    }
}

export default Header;