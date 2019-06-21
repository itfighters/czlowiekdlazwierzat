import React, { Component } from "react";
import {
  sendEmailAdressToServer,
  sendPhoneNumberToServer
} from "../../services/substriction.services";

var categories = [
  { id: 2, value: "srodkiNaNaprawy", display: "ŚRODKI NA NAPRAWY" },
  { id: 3, value: "potrzebniLudzie", display: "POTRZEBNI LUDZIE" },
  { id: 4, value: "pomocRzeczowa", display: "POMOC RZECZOWA" },
  { id: 5, value: "srodkiNaLeczenie", display: "ŚRODKI NA LECZENIE" },
  { id: 6, value: "potrzebnyTransport", display: "POTRZEBNY TRANSPORT" },
  { id: 7, value: "potrzebnyLek", display: "POTRZEBNY LEK" },
  {
    id: 8,
    value: "zastepczyDom",
    display: "PILNIE POTRZEBNY DOM/ZASTĘPCZY DOM"
  }
];

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      acceptedMail: false,
      acceptedSms: false,
      email: "",
      tel: ""
    };
  }

  showInConsole = event => {
    console.log(this.state);
    event.preventDefault();
  };

  addMail = () => {
    sendEmailAdressToServer(this.state.email)
      .then(resp => {
        alert("zapisales sie");
      })
      .catch(err => {
        alert("cos sie wywalilo");
      });
  };

  addTel = () => {
    sendPhoneNumberToServer(this.state.tel)
      .then(resp => {
        alert("zapisales sie");
      })
      .catch(err => {
        alert("cos sie wywalilo");
      });
  };

  acceptedChangeMail = () => {
    this.setState({ acceptedMail: !this.state.acceptedMail });
  };

  acceptedChangeSms = () => {
    this.setState({ acceptedSms: !this.state.acceptedSms });
  };

  handleChange = event => {
    var categoryId = Number.parseInt(event.target.value);
    var checkedArray = this.state.checked;
    if (checkedArray.includes(categoryId)) {
      checkedArray = checkedArray.filter(id => id !== categoryId);
    } else {
      checkedArray.push(categoryId);
    }

    this.setState({ checked: checkedArray });
  };

  toggleAll = e => {
    if (e.target.checked) {
      var categoriesList = categories.map(item => {
        return item.id;
      });
      this.setState({ checked: categoriesList });
    } else {
      this.setState({ checked: [] });
    }
  };

  updateMail = e => {
    this.setState({ email: e.target.value });
  };
  updateTel = e => {
    this.setState({ tel: e.target.value });
  };

  render() {
    var categoriesList = categories.map(item => {
      return (
        <div key={"category-key-" + item.id}>
          <label>
            <input
              type="checkbox"
              value={item.id}
              onChange={this.handleChange}
              checked={this.state.checked.includes(item.id)}
            />
            {item.display}
          </label>
        </div>
      );
    });

    return (
      <article className="signup-page">
        <section className="sign-to">
          <h1>ZAPISZ SIĘ NA POWIADOMIENIA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="step-one">
          <section>
            <h1>KROK 1 </h1>
            <p>Wybierz kategorie powiadomień jakie chcesz otrzymywać</p>
          </section>
          <form>
            <label>
              <input type="checkbox" onChange={this.toggleAll} />
              ZAZNACZ WSZYSTKO
            </label>
            {categoriesList}
          </form>
        </section>
        <section className="step-two">
          <section>
            <h1>KROK 2</h1>
            <p>wybierz w jaki sposób chcesz odbierać powiadomienia</p>
          </section>
          <form onSubmit={this.showInConsole}>
            <h6>
              Podaj nam swój adres email, aby otrzymywać powiadomienia mailowe{" "}
            </h6>
            <input
              type="email"
              placeholder="mail"
              onChange={this.updateMail}
              value={this.state.email}
              required
            />
            <label>
              <input
                type="checkbox"
                defaultChecked={this.state.acceptedMail}
                onChange={this.acceptedChangeMail}
                required
              />
              Akceptuj regulamin
            </label>
            <br />
            <button type="submit">Wyślij</button>
          </form>
          <form onSubmit={this.showInConsole}>
            <h6>
              Podaj nam swój numer telefonu, aby otrzymywać powiadomienia sms{" "}
            </h6>
            <input
              type="tel"
              pattern="[0-9]{9}"
              placeholder="123456789"
              onChange={this.updateTel}
              value={this.state.tel}
              required
            />
            <label>
              <input
                type="checkbox"
                defaultChecked={this.state.acceptedSms}
                onChange={this.acceptedChangeSms}
                required
              />
              Akceptuj regulamin
            </label>
            <br />
            <button type="submit">Wyślij</button>
          </form>
          <section>
            <h6>Zapisz się na push notification</h6>
            <button>Zapisz się!</button>
          </section>
        </section>
        <section>
          <section>
            <h1>Rezygnacja z powiadomień</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <form onSubmit={this.showInConsole}>
            <input
              type="tel"
              pattern="[0-9]{9}"
              placeholder="123456789"
              required
            />
            <button type="submit">Wyślij</button>
          </form>
          <form onSubmit={this.showInConsole}>
            <input type="email" placeholder="mail" required />
            <button type="submit">Wyślij</button>
          </form>
        </section>
      </article>
    );
  }
}
