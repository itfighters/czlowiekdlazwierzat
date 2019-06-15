import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default function Partners() {
    var Testresponsive = {
        0: { items: 2 },
        1024: { items: 6 },
    }


    return (
        <section>
        <h1>
            PARTNERZY
        </h1>
        <AliceCarousel mouseDragEnabled buttonsDisabled={true} dotsDisabled={true} autoPlayInterval={5000} infinite responsive={Testresponsive}  >
            <a href="/" ><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
            <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
            <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
            <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
            <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
            <a href="/"><img alt="partner" src="https://itfighters.pl/wp-content/uploads/2018/08/home6-logo.png"></img></a>
        </AliceCarousel>
        </section>
    )
}