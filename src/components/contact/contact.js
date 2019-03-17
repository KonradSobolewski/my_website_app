import React from 'react'
import connect from "react-redux/es/connect/connect";
import * as classes from './contact.module.scss'
import gmail from "../../assets/images/gmail-logo.png";
import fbLogo from "../../assets/images/fb-logo.png";
import gitLogo from "../../assets/images/github-logo.png";
import linkLogo from "../../assets/images/linkedin-logo.png";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import GoogleMapsContainer from "./map";

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className={classes.contact}>
                    <div className={classes.iconArea}>
                        <a href={"mailto:konradsob12@gmail.com"} className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.gmail}>
                                        <img className={classes.image} src={gmail} alt={"LOL"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                        <a href={"https://www.facebook.com/konrad.sobolewski.1"} target={"_blank"}
                           className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.facebook}>
                                        <img className={classes.image} src={fbLogo} alt={"LOL"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                    </div>
                    <div className={classes.iconArea}>
                        <a href={"https://github.com/KonradSobolewski"} target={"_blank"} className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.github}>
                                        <img className={classes.image} src={gitLogo} alt={"LOL"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                        <a href={"https://www.linkedin.com/in/konrad-sobolewski-ba380a160/"} target={"_blank"}
                           className={classes.href}>
                            <CardActionArea>
                                <Card>
                                    <CardContent className={classes.linkedin}>
                                        <img className={classes.image} src={linkLogo} alt={"LOL"}/>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </a>
                    </div>
                </div>
                <GoogleMapsContainer/>
            </div>
        )
    }
}