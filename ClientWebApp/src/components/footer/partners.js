import React, { Component } from "react";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.Carousel = React.createRef();
  }

  render() {
    // var settings = {
    //     mouseDragEnabled: true,
    //     buttonsDisabled: true,
    //     dotsDisabled: true,
    //     autoPlayInterval: 3000,
    //     autoPlay: true,
    //     infinite: true,
    //     responsive: {
    //         0: { items: 2 },
    //         1024: { items: 6 },
    //     }
    // }

    return (
      <section className="top-footer">
        <h2>PARTNERZY</h2>

        <div className="partners">
          {/* <AliceCarousel {...settings} ref={(el) => (this.Carousel = el)}> */}
          <a href="/">
            <img alt="partner" src="/assets/it_fighters.png"></img>
          </a>
          <a href="/">
            <img alt="partner" src="/assets/avande.png"></img>
          </a>
          <a href="/">
            <img alt="partner" src="/assets/play_sms.png"></img>
          </a>
          <a href="/">
            <img alt="partner" src="/assets/pan_mi_kupi.png"></img>
          </a>
          <a href="/">
            <img alt="partner" src="/assets/kancelaria.png"></img>
          </a>
          <a href="/">
            <img alt="partner" src="/assets/milomi.png"></img>
          </a>
          {/* </AliceCarousel> */}
          {/* <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
                    <button onClick={() => this.Carousel._slideNext()}>Next button</button> */}
        </div>
      </section>
    );
  }
}
