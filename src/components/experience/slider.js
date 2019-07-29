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
        let color = css.slider1;
        if(this.props.color === 2)
            color = css.slider2;
        else if (this.props.color === 3)
            color = css.slider3;
        else if (this.props.color === 4)
            color = css.slider4;

        return (
            <div className={[(this.props.leftSide ? css.slider : css.sliderRight) , color].join(' ')}>
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