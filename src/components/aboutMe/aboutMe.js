import React from 'react'
import connect from "react-redux/es/connect/connect";
import * as classes from './aboutMe.module.scss'

class AboutMe extends React.Component {
    render () {
        return (
            <div className={classes.aboutMe}>
            </div>
        )
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);