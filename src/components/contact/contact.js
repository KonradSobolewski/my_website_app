import React from 'react'
import * as classes from './contact.module.scss'
import gmail from "../../assets/images/gmail-logo.png";
import fbLogo from "../../assets/images/fb-logo.png";
import gitLogo from "../../assets/images/github-logo.png";
import linkLogo from "../../assets/images/linkedin-logo.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import GoogleMapsContainer from "./map";
import TextService from '../../config/text.service'
import {Helmet} from "react-helmet";

export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact to Konrad Sobolewski, Junior Full Stack Developer</title>
                    <meta name="description" content="Contains contact to Konrad Sobolewski. You're allowed to contact him by Facebook, Github, Gmail or LinkedIn"/>
                </Helmet>
                <h3>{TextService.text.interested}<br/>{TextService.text.contactMe}</h3>
                <div className={classes.contact}>
                    <div className={classes.iconArea}>
                        <a href={"mailto:konradsob12@gmail.com"} className={classes.href} aria-label={"Gmail of Konrad: konradsob12@gmail.com"}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.gmail}>
                                        <img className={classes.image} src={gmail} alt={"Gmail image to contact Konrad"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                        <a href={"https://www.facebook.com/konrad.sobolewski.1"} target={"_blank"} aria-label={"Facebook of Konrad"}
                           className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.facebook}>
                                        <img className={classes.image} src={fbLogo} alt={"Facebook image to contact Konrad"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                    </div>
                    <div className={classes.iconArea}>
                        <a href={"https://github.com/KonradSobolewski"} target={"_blank"} className={classes.href} aria-label={"Github of Konrad"}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.github}>
                                        <img className={classes.image} src={gitLogo} alt={"Github image to contact Konrad"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                        <a href={"https://www.linkedin.com/in/konrad-sobolewski-ba380a160/"} target={"_blank"} aria-label={"LinkedIn of Konrad"}
                           className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.linkedin}>
                                        <img className={classes.image} src={linkLogo} alt={"LinkedIn image to contact Konrad"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                    </div>
                </div>
                <GoogleMapsContainer {...this.props}/>
            </>
        )
    }
}