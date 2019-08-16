import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.Carousel = React.createRef();
  }

  render() {
    var partnersSource = {
      "it_fighters.png": "https://itfighters.pl",
      "avande.png": "https://www.avanade.com",
      "play_sms.png": "https://playsms.org",
      "pan_mi_kupi.png": "https://panmikupi.pl",
      "kancelaria.png": "https://itfighters.pl",
      "milomi.png": "https://www.facebook.com/milomi.magda/"
    };
    var partners = [];
    for (const key in partnersSource) {
      let url = partnersSource[key];
      partners.push(
        <a key={"partner-" + key} href={url}>
          <img alt="partner" src={"/assets/" + key} />
        </a>
      );
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      pauseOnHover: true,
      centerPadding: "200px",
      responsive: [
        {
          breakpoint: 925,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            pauseOnHover: true
          }
        }
      ]
    };

    return (
      <section className="top-footer">
        <h2>PARTNERZY</h2>
        <div className="partners">
          <Slider {...settings}>{partners}</Slider>
        </div>
      </section>
    );
  }
}
