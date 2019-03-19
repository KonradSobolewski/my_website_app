import React from 'react'
import connect from "react-redux/es/connect/connect";
import * as classes from './experience.css'
import ExpCard from "./cards/expCard";
import SellionsLogo from '../../assets/images/sellions.png'
import AtineaLogo from '../../assets/images/atinea.png'

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
                <div className={classes.projects}>
                    <ExpCard title={"Sellions"}
                             image={SellionsLogo}
                             description={"Junior Full Stack Developer"}
                             stack={"Java 8 Spring Hibernate AngularJS PostgreSQL SCSS"}
                             date={"July 2018 - Currently"}
                             website={"https://www.sellions.com/"}
                             learnMoreAction={this.openWebsite}
                    />
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