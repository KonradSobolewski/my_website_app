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
import ProjectCard from "./cards/projectCard";
import Chip from "@material-ui/core/Chip/Chip";
import {Done} from "@material-ui/icons";
import Slider from "./slider";
import {withStyles} from "@material-ui/core";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade'

const styles = {
    root: {
        color: '#4caf50',
        padding: 2
    }
};

class Experience extends React.Component {
    openWebsite = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    render() {
        const {classes} = this.props;
        const backend = [JAVA, SPRING, HIBERNATE, KOTLIN, PSQL, MYSQL, PHP];
        const frontend = [REACT2, ANGULAR, JS, TS, CSS3, HTML];
        const mobile = [REACT2, ANDROID];
        const other = [GIT, GITHUB, BITBUCKET, JIRA, FIREBASE, INTEL, BOOTSTRAP];

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
                <Slider languages={backend} title={"BACKEND"} leftSide={true} elements={5} color={'#90caf9'}/>
                <Slider languages={frontend} title={"FRONTEND"} leftSide={false} elements={5} color={'#ef5350'}/>
                <Slider languages={mobile} title={"MOBILE"} leftSide={true} elements={2} color={'#ebe2b0'}/>
                <Slider languages={other} title={"OTHER"} leftSide={false} elements={5} color={'#8FFFBF'}/>
                <div className={css.container}>
                    <Fade bottom>
                        <h3>Commercial Experience</h3>
                        <div className={css.subContainer2}>
                            <ExpCard title={"Sellions"}
                                     image={SellionsLogo}
                                     description={"Junior Full Stack Developer"}
                                     stack={sellionsTech}
                                     date={"July 2018 - Currently"}
                                     website={"https://www.sellions.com/"}
                                     learnMoreAction={this.openWebsite}
                            />
                            <ExpCard title={"Atinea"}
                                     image={AtineaLogo}
                                     description={"Junior Software Developer"}
                                     stack={atineaTech}
                                     date={"July 2017 - November 2017"}
                                     website={"https://atinea.pl/"}
                                     learnMoreAction={this.openWebsite}
                            />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <h3>Important projects</h3>
                        <div className={css.subContainer2}>
                            <ProjectCard title={"YouMeet Backend"}
                                         image={YM}
                                         description={"Backend for university project. The application allows to meet new people by setting a meeting. " +
                                         "From the technical side, backend is based on json binary object (jsonb) data format. It allows to store parameters as json objects in postgres database. " +
                                         "In conclusion it works as semi-NoSQL storage."}
                                         technology={youMeetBack}
                                         website={"https://github.com/KonradSobolewski/YouMeet_backend"}
                                         learnMoreAction={this.openWebsite}
                            />
                            <ProjectCard title={"YouMeet Mobile"}
                                         image={YM}
                                         description={"Frontend for university project. The application uses facebook api, google map api. It was first touch with react's syntax " +
                                         "and unfortunately redux implementation turn out as failure. But after all it was great possibility to gather experience."}
                                         technology={youMeetFront}
                                         website={"https://github.com/KonradSobolewski/YouMeet_mobile"}
                                         learnMoreAction={this.openWebsite}
                            />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={css.subContainer2}>
                            <ProjectCard title={"RocketFuel"}
                                         image={RF}
                                         description={"This project was created in co-operation with friend. Main aim was to get experience in mobile field. In brief, " +
                                         "the application was designed to serve as a gym manager for bodybuilders. We implemented connection with Firebase authorization, data storage, google login api, google calendar api. " +
                                         "To sum up in our humble opinion kotlin is beautiful language with bigger possibilities than Java."}
                                         technology={rocketFuelTech}
                                         website={"https://github.com/KonradSobolewski/RocketFuel-Training-Manager"}
                                         learnMoreAction={this.openWebsite}
                            />
                            <ProjectCard title={"My Website"}
                                         image={REACT2}
                                         description={"A lot of love , effort and passion to design simple, responsive and to the point website. The website uses Material UI, Redux and SCSS."}
                                         technology={webSiteTech}
                                         website={"https://github.com/KonradSobolewski/my_website_app"}
                                         learnMoreAction={this.openWebsite}
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Experience);