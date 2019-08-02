import React from "react";
import * as classes from './expModal.module.scss'
import { Line } from 'rc-progress';
import * as expModalActions from "../../redux/actions/expModal/expModalActions";
import connect from "react-redux/es/connect/connect";
import TextService from "../../config/text.service";

const ExpModal = (props) => {
  return (
      <div className={props.modal ? classes.container : classes.hide}>
          <div className={classes.modal}>
              {props.items.map(item => {
                  return <div key={item.name.toString() } className={classes.row}>
                      <img src={item.icon} className={classes.logo} alt={"Ups"} />
                      <div className={classes.level}>
                          <div>
                              {item.name}
                          </div>
                          <Line percent={item.level} strokeWidth={2}/>
                      </div>
                  </div>
              })}
              <button onClick={() => props.setModal(false)} className={classes.button}>
                  {TextService.text.close}
              </button>
          </div>
      </div>
  )
};

const mapStateToProps = (state) => ({
    modal: state.modal.show,
    items: state.modal.items
});

const mapDispatchToProps = dispatch => ({
    setModal: value => dispatch(expModalActions.setShow(value)),
    setItems: value => dispatch(expModalActions.setItems(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpModal);