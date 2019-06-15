import React from 'react';
import * as css from './header.module.scss'
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
            </div>
        )
    }
}

export default Header;