import React, { Component } from 'react';
import NavbarView from "./components/navbar/navbar";
import Header from "./components/header/header";
import TextService from "./config/text.service";
import * as textConfig from "./config/text";
import * as css from "./components/header/header.module.scss";
import POLAND from "./assets/images/poland.svg";
import Switch from "react-switch";
import ENG from "./assets/images/eng.svg";
import * as headerActions from "./redux/actions/language/languageActions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    handleChange = (checked) => {
        if(checked) {
            TextService.text = textConfig.eng;
            this.props.setLang(true);
        } else {
            TextService.text = textConfig.pl;
            this.props.setLang(false);
        }
    };
  render() {
    return (
      <div className={css.app}>
          <Header {...this.props}/>
          <div className={css.switchContainer}>
              <img src={POLAND} alt={"pl"} className={css.lang}/>
              <Switch onChange={this.handleChange} checked={this.props.switch} className={css.switch} uncheckedIcon={false} checkedIcon={false} offColor={'#CC0000'}/>
              <img src={ENG} alt={"eng"} className={css.lang}/>
          </div>
          <NavbarView {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    switch: state.header.switch
});

const mapDispatchToProps = dispatch => ({
    setLang: value => dispatch(headerActions.setLang(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
