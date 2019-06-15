import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <section>
                <div>
                    <h1>PARTNERZY</h1>
                </div>
                <Slider {...settings}>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                    <div>
                        <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
                    </div>
                </Slider>
            </section>
        )
    }
}