import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import Star from '@material-ui/icons/Star';
import Folder from '@material-ui/icons/Folder';
import classes from './navbar.module.scss'
import * as navbarActions from '../../redux/actions/navbar/navbarActions'
import connect from "react-redux/es/connect/connect";
import Contact from "../contact/contact";
import Portfolio from "../portfolio/portfolio";
import Experience from "../experience/experience";
import {withStyles} from "@material-ui/styles"

const style = {

};
class NavbarView extends React.Component {

    handleChangeView = (event, value) => {
        this.props.onViewChange(value);
    };

    render() {
        return (
            <div className={classes.root}>
                <AppBar position="sticky" color="default">
                    <Tabs
                        value={this.props.view}
                        onChange={this.handleChangeView}
                        indicatorColor="primary"
                        textColor="primary"
                        centered={true}
                        variant={"fullWidth"}
                    >
                        <Tab label="Experience" icon={<Star/>}/>
                        <Tab label="Portfolio" icon={<Folder/>}/>
                        <Tab label="Contact" icon={<PhoneIcon/>}/>
                    </Tabs>
                </AppBar>
                {this.props.view === 0 && <Experience/>}
                {this.props.view === 1 && <Portfolio/>}
                {this.props.view === 2 && <Contact/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    view: state.navbar.view
});

const mapDispatchToProps = dispatch => ({
    onViewChange: value => dispatch(navbarActions.setView(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(NavbarView));