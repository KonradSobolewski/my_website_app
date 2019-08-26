import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as css from './slider.module.scss'
import Info from '@material-ui/icons/InfoOutlined'
import * as expModalActions from "../../redux/actions/expModal/expModalActions";
import connect from "react-redux/es/connect/connect";

const SwipeToSlide = (props) => {

    const settings = {
        lazyLoad: true,
        dots: true,
        arrows: true,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: props.elements,
        swipeToSlide: true
    };
    return (
        <div className={css.slider}>
            <div className={css.header}>
                {!props.right ? <Info className={css.icon} fontSize={"large"} onClick={() => {
                    props.setItems(props.languages);
                    props.setModal(true)
                }}/> : ''}
                <div className={css.typo}>
                    <h2>
                        {props.title}
                    </h2>
                </div>
                {props.right ? <Info className={css.icon} fontSize={"large"} onClick={() =>  {
                    props.setItems(props.languages);
                    props.setModal(true)
                }}/> : ''}
            </div>
            <div className={css.container}>
                <Slider {...settings}>
                    {props.languages.map(item => {
                        return <img src={item.icon} className={css.logo} alt={"Icon of " + item.name.toString()} key={item.name.toString()}/>
                    })}
                </Slider>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    modal: state.modal.show,
    items: state.modal.items
});

const mapDispatchToProps = dispatch => ({
    setModal: value => dispatch(expModalActions.setShow(value)),
    setItems: value => dispatch(expModalActions.setItems(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipeToSlide);