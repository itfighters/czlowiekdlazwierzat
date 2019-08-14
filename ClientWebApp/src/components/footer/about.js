import React, { Component } from "react";
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
            <p>
              <a href="tel:+48783553197">+48783553197</a>
            </p>
            <p>
              <a href="tel:+48534884174">+48534884174</a>
            </p>
          </div>
          <div>
            <p>
              <a href="mailto:adres e-mail">czlowiekdlazwierzat@gmail.com</a>
            </p>
          </div>
          <div>
            <p>NIP 6821770446 </p>
          </div>
          <div className="facebook-icon">
            <a
              href="https://www.facebook.com/fundacjaczlowiekdlazwierzat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/facebook-box.svg" alt="Logo-facebook" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
