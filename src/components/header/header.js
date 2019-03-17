import React from 'react';
import connect from "react-redux/es/connect/connect";
import Avatar from '@material-ui/core/Avatar';
import * as classes from './header.module.scss'
import zdj from '../../assets/images/zdj.png'
import fb from '../../assets/images/fb.png'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
    render () {
        return(
            <div className={classes.header}>
                <Avatar className={classes.avatar} alt="Konrad Sobolewski" src={zdj}  style={{ width: 230, height: 230 }}/>
                <div className={classes.title}>
                    <div className={classes.name}>Konrad Sobolewski</div>
                    <div className={classes.underName}>Junior Full Stack Developer</div>
                </div>
                <div className={classes.iconArea}>
                    <a href={"https://www.linkedin.com/in/konrad-sobolewski-ba380a160/"} target={"_blank"}><img className={classes.icon} src={linkedin} alt={"LOL"}/></a>
                    <a href={"https://github.com/KonradSobolewski"} target={"_blank"}> <img className={classes.icon} src={github} alt={"LOL"}/></a>
                    <a href={"https://www.facebook.com/konrad.sobolewski.1"} target={"_blank"}> <img className={classes.icon} src={fb} alt={"LOL"}/></a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);