import React from 'react'
import * as css from './aboutMe.module.scss'
import {Fade} from 'react-slideshow-image';
import gmach from '../../assets/images/gmach.jpg'
import eiti from '../../assets/images/elka.jpg'
import hol from '../../assets/images/hol.jpg'
import ja from '../../assets/images/ja.jpeg'
import gmach2 from '../../assets/images/gmach2.jpg'
import gmachFull from '../../assets/images/gmachFull.jpg'
import hobbies from '../../assets/images/hobbies.jpg'
import InfoCard from "./infoCard";
import Chip from "@material-ui/core/Chip/Chip";
import {Done} from "@material-ui/icons";
import { withStyles } from '@material-ui/core/styles';
import Skills from "./skills";
import SchoolItem from "./schoolItem";

const styles = {
    root: {
        color: '#4caf50',
        padding: 2
    }
};

class AboutMe extends React.Component {

    render() {
        const {classes} = this.props;

        const slideImages = [
            gmach,
            gmach2,
            hol,
            eiti,
            ja
        ];

        const schools = [
             {
                title: "B.Sc. in Automation and robotics",
                year: "2014 - 2018 y. — ",
                desc: "Faculty of Electronics and Information Technology"
            },
            {
                title: "M.Sc. Information Technology",
                year: "since 2019 y. — ",
                desc: "Faculty of Electronics and Information Technology"
            }
        ];

        const backend = ["Java 8", "Spring", "Hibernate", "Kotlin", "PostgresSQL"].map(item => {
            return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}} />}
                          label={item}
                          variant={"outlined"}
                          className={css.chip}/>)
        });
        const frontend = ["React.js", "Angular.js", "SCSS", "CSS", "HTML5"].map(item => {
            return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}} />}
                          label={item}
                          variant={"outlined"}
                          className={css.chip}/>)
        });
        const mobile = ["React-native", "Android SDK"].map(item => {
            return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}} />}
                          label={item}
                          variant={"outlined"}
                          className={css.chip}/>)
        });
        const other = ["Material-UI", "Bootstrap", "Firebase", "JIRA", "Slack", "Git"].map(item => {
            return (<Chip key={item.toString()} icon={<Done classes={{root: classes.root}} />}
                          label={item}
                          variant={"outlined"}
                          className={css.chip}/>)
        });

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            className: css.container
        };

        const body = slideImages.map(image => {
            return (
                <div key={image.toString()} className={css.image}>
                    <div style={{backgroundImage: `url(${image})`}}>
                    </div>
                </div>)
        });

        return (
            <div className={css.aboutMe}>
                <div className={css.aboutMeContainer}>
                    <InfoCard title={"Education"}
                              subtitle={"Warsaw University of Technology"}
                              description={
                                  <SchoolItem items={schools}/>
                              }
                    >
                        <img src={gmachFull} className={css.infoImage} alt={"img"}/>
                    </InfoCard>
                    <InfoCard
                        title={"Hobbies"}
                        description={"Since the little child I love physical activity. In the past I had could spent all days on playing football " +
                        "with friends. But I were gaining achievements in other disciplines like basketball, volleyball and athletics. " +
                        "From the secondary school I started to interest in arts. Sketching and video edition became my daily habits. " +
                        "This time were also my peak of sport skills. I became a captain of basketball team and main player in the rest of disciplines. " +
                        "Also I had successes in art field. I got first place in national competition of animation motion video (AMV) and year later I took place as jury. " +
                        "In the high school I focused on personal development to maturity exam. All passions bored as time to time hobbies. " +
                        "Nowadays I'm focused to develop my programming skills which I started learning since the university. " +
                        "I would like to connect my art skills with programming abilities."}
                    >
                        <img src={hobbies} className={css.infoImage} alt={"img"}/>
                    </InfoCard>
                </div>
                <div className={css.aboutMeContainer}>
                    <Skills backend={backend} frontend={frontend} mobile={mobile} other={other}/>
                    <Fade {...properties}>
                        {body}
                    </Fade>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);