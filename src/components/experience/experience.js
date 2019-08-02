import React from 'react'
import * as css from './experience.module.scss'
import ExpCard from "./cards/expCard";
import SellionsLogo from '../../assets/images/sellions.png'
import AtineaLogo from '../../assets/images/atinea.png'
import YM from '../../assets/images/logo.gif'
import RF from '../../assets/images/splash_screen.jpg'
import JAVA from '../../assets/lang/java-4.svg'
import SPRING from '../../assets/lang/spring-3.svg'
import HIBERNATE from '../../assets/lang/hibernate.svg'
import KOTLIN from '../../assets/lang/kotlin-1.svg'
import PSQL from '../../assets/lang/postgresql.svg'
import MYSQL from '../../assets/lang/mysql.svg'
import PHP from '../../assets/lang/php-1.svg'
import REACT2 from '../../assets/lang/React-icon.svg'
import ANGULAR from '../../assets/lang/angular-icon-1.svg'
import JS from '../../assets/lang/javascript.svg'
import TS from '../../assets/lang/typescript.svg'
import CSS3 from '../../assets/lang/css3.svg'
import HTML from '../../assets/lang/html5.svg'
import ANDROID from '../../assets/lang/android.svg'
import BOOTSTRAP from '../../assets/lang/bootstrap-4.svg'
import GITHUB from '../../assets/lang/github-1.svg'
import GIT from '../../assets/lang/git-icon.svg'
import BITBUCKET from '../../assets/lang/bitbucket-icon.svg'
import INTEL from '../../assets/lang/intellij-idea-1.svg'
import FIREBASE from '../../assets/lang/firebase-1.svg'
import JIRA from '../../assets/lang/jira-1.svg'
import SASS from '../../assets/lang/sass.svg'
import LOGO from '../../assets/images/logoColor.png'
import ProjectCard from "./cards/projectCard";
import Chip from "@material-ui/core/Chip/Chip";
import {Done} from "@material-ui/icons";
import SwipeToSlide from "./slider";
import {withStyles} from "@material-ui/core";
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade'
import TextService from "../../config/text.service";
import Particles from "react-particles-js";
import backgroundConfig from "../../config/background-config";

const styles = {
    root: {
        color: '#4caf50',
        padding: 2
    }
};

const Experience = (props) => {
    const openWebsite = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    const {classes} = props;
    const backend = [
        {
            "icon": JAVA,
            "name": "Java",
            "level": 60
        },
        {
            "icon": SPRING,
            "name": "Spring",
            "level": 50
        },
        {
            "icon":  HIBERNATE,
            "name": "Hibernate",
            "level": 40
        },
        {
            "icon":  KOTLIN,
            "name": "Kotlin",
            "level": 30
        },
        {
            "icon":  PSQL,
            "name": "PostgreSql",
            "level": 50
        },
        {
            "icon":  MYSQL,
            "name": "MySql",
            "level": 30
        },
        {
            "icon":  PHP,
            "name": "PHP",
            "level": 20
        }];
    const frontend = [
        {
            "icon": REACT2,
            "name": "React",
            "level": 60
        },
        {
            "icon": ANGULAR,
            "name": "Angular.js",
            "level": 40
        },
        {
            "icon":  JS,
            "name": "JavaScript",
            "level": 60
        },
        {
            "icon":  TS,
            "name": "TypeScript",
            "level": 20
        },
        {
            "icon":  SASS,
            "name": "Sass",
            "level": 40
        },
        {
            "icon":  CSS3,
            "name": "Css3",
            "level": 60
        },
        {
            "icon":  HTML,
            "name": "HTML5",
            "level": 60
        }];
    const mobile = [
        {
            "icon":  REACT2,
            "name": "React Native",
            "level": 50
        },
        {
            "icon":  ANDROID,
            "name": "Android",
            "level": 30
        }];
    const other = [
        {
            "icon":  GIT,
            "name": "GIT",
            "level": 50
        },
        {
            "icon":  GITHUB,
            "name": "Github",
            "level": 50
        },
        {
            "icon":  BITBUCKET,
            "name": "Bitbucket",
            "level": 60
        },
        {
            "icon":  JIRA,
            "name": "Jira",
            "level": 60
        },
        {
            "icon":  FIREBASE,
            "name": "Firebase",
            "level": 30
        },
        {
            "icon":  INTEL,
            "name": "InteliiJ",
            "level": 50
        },
        {
            "icon":  BOOTSTRAP,
            "name": "Bootstrap",
            "level": 30
        }
    ];

    const youMeetBack = ["Java 8", "Spring Boot", "Spring Data", "Spring MVC", "Spring Security", "Hibernate", "PostgreSQL"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });
    const youMeetFront = ["React-Native"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });

    const sellionsTech = ["Java 8", "Spring Boot", "Angular.js", "PostgreSQL", "SASS", "JIRA", "BitBucket"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });
    const atineaTech = ["PHP", "JQuery", "MySQL"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });
    const rocketFuelTech = ["Kotlin", "Android SDK", "Firebase"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });
    const webSiteTech = ["React.js", "Redux", "SASS"].map(item => {
        return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}}/>}
                      label={item}
                      variant={"outlined"}
                      className={css.chip}/>)
    });
    return (
        <div>
            <Particles params={backgroundConfig} className={css.particles}/>
            <SwipeToSlide languages={backend} title={TextService.text.backend.toUpperCase()} elements={5} right={true}/>
            <SwipeToSlide languages={frontend} title={TextService.text.frontend.toUpperCase()} elements={5}
                          right={false}/>
            <SwipeToSlide languages={mobile} title={TextService.text.mobile.toUpperCase()} elements={2} right={true}/>
            <SwipeToSlide languages={other} title={TextService.text.other.toUpperCase()} elements={5} right={false}/>
            <div className={css.container}>
                <Fade bottom>
                    <h3>{TextService.text.commercialExp}</h3>
                    <div className={css.subContainer2}>
                        <ExpCard title={"Sellions"}
                                 image={SellionsLogo}
                                 description={"Junior Full Stack Developer"}
                                 stack={sellionsTech}
                                 date={TextService.text.sellionsDate}
                                 website={"https://www.sellions.com/"}
                                 learnMoreAction={openWebsite}
                        />
                        <ExpCard title={"Atinea"}
                                 image={AtineaLogo}
                                 description={"Junior Software Developer"}
                                 stack={atineaTech}
                                 date={TextService.text.atineaDate}
                                 website={"https://atinea.pl/"}
                                 learnMoreAction={openWebsite}
                                 imageStyle={true}
                        />
                    </div>
                </Fade>
                <Fade bottom>
                    <h3>{TextService.text.projects}</h3>
                    <div className={css.subContainer2}>
                        <ProjectCard title={"YouMeet Backend"}
                                     image={YM}
                                     description={TextService.text.youMeetBackendDesc}
                                     technology={youMeetBack}
                                     website={"https://github.com/KonradSobolewski/YouMeet_backend"}
                                     learnMoreAction={openWebsite}
                        />
                        <ProjectCard title={"YouMeet Mobile"}
                                     image={YM}
                                     description={TextService.text.youMeetMobileDesc}
                                     technology={youMeetFront}
                                     website={"https://github.com/KonradSobolewski/YouMeet_mobile"}
                                     learnMoreAction={openWebsite}
                        />
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={css.subContainer2}>
                        <ProjectCard title={"RocketFuel"}
                                     image={RF}
                                     description={TextService.text.rocketFuelDesc}
                                     technology={rocketFuelTech}
                                     website={"https://github.com/KonradSobolewski/RocketFuel-Training-Manager"}
                                     learnMoreAction={openWebsite}
                        />
                        <ProjectCard title={TextService.text.myWeb}
                                     image={LOGO}
                                     description={TextService.text.myWebDesc}
                                     technology={webSiteTech}
                                     website={"https://github.com/KonradSobolewski/my_website_app"}
                                     learnMoreAction={openWebsite}
                                     imageStyle={true}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default withStyles(styles)(Experience);