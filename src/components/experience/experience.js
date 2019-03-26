import React from 'react'
import connect from "react-redux/es/connect/connect";
import * as classes from './experience.scss'
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
            <div style={{display:'flex', justifyContent: 'center', margin: 10}}>
                <div className={classes.companies}>
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
                    <div style={{display: 'flex'}}>
                        <ProjectCard title={"YouMeet Backend"}
                                     image={YM}
                                     description={"Junior Full Stack Developer"}
                                     technology={"Java 8 Spring Hibernate PostgreSQL"}
                                     website={"https://github.com/KonradSobolewski/YouMeet_backend"}
                                     learnMoreAction={this.openWebsite}
                        />
                        <ProjectCard title={"YouMeet Mobile"}
                                     image={YM}
                                     description={"Junior Full Stack Developer"}
                                     technology={"React-Native"}
                                     website={"https://github.com/KonradSobolewski/YouMeet_mobile"}
                                     learnMoreAction={this.openWebsite}
                        />
                    </div>
                    <div style={{display: 'flex'}}>
                        <ProjectCard title={"RocketFuel"}
                                     image={RF}
                                     description={"Junior Full Stack Developer"}
                                     technology={"Kotlin Android SDK"}
                                     website={"https://github.com/KonradSobolewski/RocketFuel-Training-Manager"}
                                     learnMoreAction={this.openWebsite}
                        />
                        <ProjectCard title={"My Website"}
                                     image={World}
                                     description={"Junior Full Stack Developer"}
                                     technology={"React.js"}
                                     website={"https://github.com/KonradSobolewski/my_website_app"}
                                     learnMoreAction={this.openWebsite}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);