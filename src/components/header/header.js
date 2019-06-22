import React from 'react';
import * as css from './header.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import TextService from '../../config/text.service'

class Header extends React.Component {
    render () {
        return(
            <div className={css.header}>
                <div className={css.avatar}/>
                <div className={css.title}>
                    <div className={css.name}>{TextService.text.me}</div>
                    <div className={css.underName}>{TextService.text.speciality}</div>
                    <div className={css.underName}>{TextService.text.university}</div>
                    <div className={css.underName}>{TextService.text.faculty}</div>
                </div>
            </div>
        )
    }
}

export default Header;