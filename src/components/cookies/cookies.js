import React from 'react'
import * as css from './cookies.module.scss'
import Fab from '@material-ui/core/Fab';
import Cancel from '@material-ui/icons/Cancel';
import {useCookies} from "react-cookie";

const Cookies = props => {
    const [cookies, setCookie] = useCookies(['cookie-name']);
    if (cookies.eng) {
        props.closeCookies();
    }
    return (
        <div className={props.show ? css.container : css.hide  }>
            <div className={css.content}>
                <Cancel className={css.cancel} onClick={() => {
                    props.closeCookies()
                }}/>
                <div className={css.title}>
                    Cookies Policy
                </div>
                <div className={css.body}>
                    This website or its third-party tools use cookies, which are necessary to its functioning and
                    required to achieve the purposes illustrated in the
                    <a href="https://www.cookiepolicygenerator.com/live.php?token=9XxYDPkHFC4uH6Xu85e4AKhX8MPoZt42}"
                       target="_blank" rel="noopener noreferrer" className={css.href}> cookie policy</a>.
                    If you want to know more or withdraw your consent to all or some of the cookies, please refer to the
                    cookie policy.
                </div>
                <div className={css.buttonContainer}>
                    <Fab variant="extended" color="primary" className={css.button}
                         onClick={() => {
                             setCookie('eng', true, {path: '/'} );
                             props.closeCookies();
                         }}>
                        ACCEPT
                    </Fab>
                    <Fab variant="extended" color="primary" className={css.button}
                         onClick={() => props.closeCookies()}>
                        CANCEL
                    </Fab>
                </div>
            </div>
        </div>
    )
};

export default Cookies;