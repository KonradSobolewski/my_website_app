import React from 'react'
import * as css from './cookies.module.scss'
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
                    I use Cookies
                </div>
                <div>
                    This site use cookies and other tracking technologies to improve your browsing experience on our website and
                    to show you personalized content. By browsing my website, you consent to my use of cookies.
                </div>
                <div className={css.buttonContainer}>
                    <button className={css.button}
                         onClick={() => {
                             setCookie('eng', true, {path: '/'} );
                             props.closeCookies();
                         }}>
                        ACCEPT
                    </button>
                    <button className={css.buttonCancel}
                         onClick={() => props.closeCookies()}>
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Cookies;