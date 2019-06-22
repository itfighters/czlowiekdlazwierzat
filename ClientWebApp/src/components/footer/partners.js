import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.Carousel = React.createRef();
  }

  render() {
    var settings = {
      mouseDragEnabled: true,
      buttonsDisabled: true,
      dotsDisabled: true,
      autoPlayInterval: 3000,
      autoPlay: true,
      infinite: true,
      responsive: {
        0: { items: 2 }
      }
    };

    var partners = [
      "it_fighters.png",
      "avande.png",
      "play_sms.png",
      "pan_mi_kupi.png",
      "kancelaria.png",
      "milomi.png"
    ].map(partner => {
      return (
        <a href="/">
          <img alt="partner" src={"/assets/" + partner} />
        </a>
      );
    });

    return (
      <section className="top-footer">
        <h2>PARTNERZY</h2>

        <div className="partners">
          <AliceCarousel
            {...settings}
            ref={el => (this.Carousel = el)}
            items={partners}
          />
          <button onClick={() => this.Carousel._slidePrev()}>
            Prev button
          </button>
          <button onClick={() => this.Carousel._slideNext()}>
            Next button
          </button>
        </div>
      </section>
    );
  }
}
