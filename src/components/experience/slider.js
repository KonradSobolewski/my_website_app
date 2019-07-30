import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as css from './slider.module.scss'

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
            swipeToSlide: true
        };

        return (
            <div className={css.slider}>
                <div className={css.typo} >
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