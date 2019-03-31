import React from 'react'
import * as classes from './experience.module.scss'
import ExpCard from "./cards/expCard";
import SellionsLogo from '../../assets/images/sellions.png'
import AtineaLogo from '../../assets/images/atinea.png'
import YM from '../../assets/images/logo.gif'
import RF from '../../assets/images/splash_screen.jpg'
import World from '../../assets/images/world.png'
import ProjectCard from "./cards/projectCard";

class Experience extends React.Component {
    openWebsite = (url) => {
        let win = window.open(url, '_blank');
        win.focus();
    };

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <h3>Commercial Experience</h3>
                    <ExpCard title={"Sellions"}
                             image={SellionsLogo}
                             description={"Junior Full Stack Developer"}
                             stack={"Java 8 Spring Hibernate AngularJS PostgreSQL SCSS"}
                             date={"July 2018 - Currently"}
                             website={"https://www.sellions.com/"}
                             learnMoreAction={this.openWebsite}
                    />
                    <ExpCard title={"Atinea"}
                             image={AtineaLogo}
                             description={"Junior Software Developer"}
                             stack={"PHP JQuery MySQL"}
                             date={"July 2017 - November 2017"}
                             website={"https://atinea.pl/"}
                             learnMoreAction={this.openWebsite}
                    />
                </div>
                <div>
                    <h3>Important projects</h3>
                    <div className={classes.subContainer2}>
                        <ProjectCard title={"YouMeet Backend"}
                                     image={YM}
                                     description={"Backend for university project. The application allows to meet new people by setting a meeting. " +
                                     "From the technical side, backend is based on json binary object (jsonb) data format. It allows to store parameters as json objects in postgres database. " +
                                     "In conclusion it works as semi-NoSQL storage."}
                                     technology={"Java 8 Spring REST Hibernate PostgreSQL"}
                                     website={"https://github.com/KonradSobolewski/YouMeet_backend"}
                                     learnMoreAction={this.openWebsite}
                        />
                        <ProjectCard title={"YouMeet Mobile"}
                                     image={YM}
                                     description={"Frontend for university project. The application uses facebook api, google map api. It was first touch with react's syntax " +
                                     "and unfortunately redux implementation turn out as failure. But after all it was great possibility to gather experience."}
                                     technology={"React-Native"}
                                     website={"https://github.com/KonradSobolewski/YouMeet_mobile"}
                                     learnMoreAction={this.openWebsite}
                        />
                    </div>
                    <div className={classes.subContainer2}>
                        <ProjectCard title={"RocketFuel"}
                                     image={RF}
                                     description={"This project was created in co-operation with friend. Main aim was to get experience in mobile field. In brief, " +
                                     "the application was designed to serve as a gym manager for bodybuilders. We implemented connection with Firebase authorization, data storage, google login api, google calendar api. " +
                                     "To sum up in our humble opinion kotlin is beautiful language with bigger possibilities than Java."}
                                     technology={"Kotlin Android SDK Firebase"}
                                     website={"https://github.com/KonradSobolewski/RocketFuel-Training-Manager"}
                                     learnMoreAction={this.openWebsite}
                        />
                        <ProjectCard title={"My Website"}
                                     image={World}
                                     description={"A lot of love , effort and passion to design simple, responsive and to the point website. The website uses Material UI, Redux and SCSS."}
                                     technology={"React.js Redux SCSS"}
                                     website={"https://github.com/KonradSobolewski/my_website_app"}
                                     learnMoreAction={this.openWebsite}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;