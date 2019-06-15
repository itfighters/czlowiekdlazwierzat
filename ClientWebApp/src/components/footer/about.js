import React, { Component } from 'react';
export default class About extends Component {

    render() {
        return (

                <section className="bottom-footer">
                    <div className="contact-container">
                        <div>
                            <p className="contact-name">Fundacja</p>
                            <p className="contact-name">Człowiek Dla Zawierząt</p>
                            <p>Łętkowice Kolonia 59</p>
                            <p>32-107 Radziemice</p>
                        </div>
                        <div>
                            <p>12378164811</p>
                            <p>12378164811</p>
                        </div>
                        <div>
                            <p>adres mailowy</p>
                        </div>
                        <div>
                            <p>NIP</p>
                        </div>
                        <div className="facebook-icon">
                            <a href="https://www.facebook.com/fundacjaczlowiekdlazwierzat" target="_blank">
                            <img src="./assets/facebook-box.svg" alt="Logo-facebook" />
                            </a>
                        </div>
                    </div>
                </section>
        )
    }
}