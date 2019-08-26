import React, {Component} from 'react';
import NavbarView from "./components/navbar/navbar";
import Header from "./components/header/header";
import TextService from "./config/text.service";
import * as textConfig from "./config/text";
import * as css from "./components/header/header.module.scss";
import POLAND from "./assets/images/poland.svg";
import Switch from "react-switch";
import ENG from "./assets/images/eng.svg";
import * as headerActions from "./redux/actions/language/languageActions";
import * as cookiesActions from "./redux/actions/cookies/cookiesActions";
import * as expModalActions from "./redux/actions/expModal/expModalActions";
import connect from "react-redux/es/connect/connect";
import Footer from './components/footer/footer'
import Cookies from './components/cookies/cookies'
import {withCookies} from 'react-cookie';
import ExpModal from "./components/experience/expModal";

class App extends Component {

    componentWillUpdate(nextProps, nextState) {
        return nextProps.switch !== this.props.switch
    }

    componentWillMount() {
        const {cookies} = this.props;
        if (cookies.get('eng') === "true") {
            this.closeCookies();
            this.handleChange(true, cookies)
        } else if (cookies.get('eng') === "false") {
            this.closeCookies();
            this.handleChange(false, cookies)
        }
    }

    handleChange = (checked, cookies) => {
        TextService.text = checked ? textConfig.eng : textConfig.pl;
        this.props.setLang(checked);
        cookies.set('eng', checked, {path: '/'});
    };

    closeCookies = () => {
        this.props.showCookies(false)
    };

    render() {
        const {cookies} = this.props;
        return (
            <div className={css.app}>
                <Cookies {...this.props} closeCookies={() => this.closeCookies()}/>
                <ExpModal/>
                <div className={[css.container, this.props.show && css.blur].join(' ')}>
                    <Header {...this.props}/>
                    <div className={css.switchContainer}>
                        <Switch onChange={(value) => this.handleChange(value, cookies)} checked={this.props.switch}
                                className={css.switch}
                                width={100}
                                onColor={'#888'}
                                checkedIcon={<img src={ENG} alt={"Polish Language"} className={css.checkedSwitch}/>}
                                uncheckedIcon={<img src={POLAND} alt={"English Language"} className={css.uncheckedSwitch}/>}/>
                    </div>
                    <NavbarView {...this.props}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    switch: state.header.switch,
    show: state.cookies.show,
    modal: state.modal.show,
    items: state.modal.items
});

const mapDispatchToProps = dispatch => ({
    setLang: value => dispatch(headerActions.setLang(value)),
    showCookies: value => dispatch(cookiesActions.showCookies(value)),
    setModal: value => dispatch(expModalActions.setShow(value)),
    setItems: value => dispatch(expModalActions.setItems(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
