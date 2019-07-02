import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as css from './slider.module.scss'
import {NavigateBefore, NavigateNext} from '@material-ui/icons'

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div className={className} style={{...style}} onClick={onClick}>
            <NavigateNext color={"primary"} className={css.arrow}/>
        </div>
    );
}

function SampleBeforeArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div className={className} style={{...style, display: "block"}} onClick={onClick}>
            <NavigateBefore color={"primary"} className={css.arrow}/>
        </div>
    );
}

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            lazyLoad: true,
            dots: true,
            arrows: true,
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: this.props.elements,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SampleBeforeArrow/>,
        };
        return (
            <div className={this.props.leftSide ? css.slider : css.sliderRight} style={{background: this.props.color}}>
                <div className={this.props.leftSide ? css.typoLeft: css.typoRight} >
                    <h2>
                        {this.props.title}
                    </h2>
                </div>
                <div className={css.container}>
                    <Slider {...settings}>
                        {this.props.languages.map(item => {
                            return <img src={item} className={css.logo} alt={"Ups"} key={item.toString()}/>
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}