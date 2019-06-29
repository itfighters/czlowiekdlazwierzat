import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import {
  sendEmailAdressToServer,
  sendPhoneNumberToServer,
  confirmPhoneNumber,
  sendTokenToServer
} from "../../services/substriction.services";
import { GetAllCategories } from "../../services/categoryService";

import Loader from "../../components/loader";
import Popup from "../../components/popup";
import { ContentTypes, Terms, Confirm } from "../../components/popup/content";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      acceptedMail: false,
      acceptedSms: false,
      email: "",
      tel: "",
      visiblePopup: false,
      categories: []
    };
  }

  componentDidMount() {
    GetAllCategories().then(allCategories => {
      this.setState({ categories: allCategories.values });
    });
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        visiblePopup: false
      });
    }
  };

  showInConsole = event => {
    console.log(this.state);
    event.preventDefault();
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
      var categoriesList = this.state.categories.map(item => {
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

  showPopup = type => {
    this.setState({
      visiblePopup: type
    });
  };

  closePopup = () => {
    this.setState({
      visiblePopup: false
    });
  };

  confirmNumber = number => {
    console.log("confirm", number);
    confirmPhoneNumber(number)
      .then(resp => {
        alert("Zapisałeś się");
      })
      .catch(err => {
        alert("cos sie wywalilo");
      });
  };

  submitMail = e => {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      alert(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia"
      );
      return;
    }
    var mail = this.state.email;

    sendEmailAdressToServer(mail, categories)
      .then(resp => {
        alert("zapisales sie");
      })
      .catch(err => {
        alert("cos sie wywalilo");
      });
  };

  submitTel = e => {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      alert(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia"
      );
      return;
    }
    var tel = this.state.tel;

    sendPhoneNumberToServer(tel, categories)
      .then(resp => {
        this.setState({
          visiblePopup: ContentTypes.Confirm
        });
      })
      .catch(err => {
        alert("cos sie wywalilo");
      });
  };

  pushNotification = async e => {
    var categories = this.state.checked;
    if (categories.length === 0) {
      alert(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia"
      );
      return;
    }
    var token = await this.askForPermissioToReceiveNotifications();
    sendTokenToServer(token, categories).catch(err => {
      alert("cos sie wywalilo");
    });
  };

  askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log("token:", token);

      return token;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    if (this.state.categories.length === 0) {
      return <Loader />;
    }

    var categoriesList = this.state.categories.map(item => {
      return (
        <div key={"category-key-" + item.id}>
          <label>
            <input
              type="checkbox"
              value={item.id}
              onChange={this.handleChange}
              checked={this.state.checked.includes(item.id)}
            />
            {item.name}
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
          <form onSubmit={this.submitMail}>
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
              Akceptuj
            </label>
            <span
              className="terms"
              onClick={() => this.showPopup(ContentTypes.Terms)}
            >
              {" "}
              regulamin
            </span>
            <br />
            <button type="submit">Wyślij</button>
          </form>
          <form onSubmit={this.submitTel}>
            <h6>
              Podaj nam swój numer telefonu, aby otrzymywać powiadomienia sms{" "}
            </h6>
            <input
              type="tel"
              placeholder="telefon"
              title="format: 123456789"
              pattern="[0-9]{9}"
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
              Akceptuj
            </label>
            <span
              className="terms"
              onClick={() => this.showPopup(ContentTypes.Terms)}
            >
              {" "}
              regulamin
            </span>
            <br />
            <button type="submit">Wyślij</button>
          </form>
          <section>
            <h6>Zapisz się na push notification</h6>
            <button onClick={this.pushNotification}>Zapisz się!</button>
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
              placeholder="telefon"
              title="format: 123456789"
              required
            />
            <button type="submit">Wyślij</button>
          </form>
          <form onSubmit={this.showInConsole}>
            <input type="email" placeholder="mail" required />
            <button type="submit">Wyślij</button>
          </form>
        </section>
        <Popup visible={this.state.visiblePopup} close={this.closePopup}>
          {this.state.visiblePopup === ContentTypes.Confirm && (
            <Confirm submit={this.confirmNumber} />
          )}
          {this.state.visiblePopup === ContentTypes.Terms && <Terms />}
        </Popup>
      </article>
    );
  }
}
