import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import {
  subscribe,
  confirmPhoneNumber,
  subscriptionType,
  unsubscribe
} from "../../services/substriction.services";
import { GetAllCategories } from "../../services/categoryService";

import Loader from "../../components/loader";
import Popup from "../../components/popup";
import { ContentTypes, Terms, Confirm } from "../../components/popup/content";
import Checkbox from "../../components/checkbox/checkbox";
import { toast } from "react-toastify";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      acceptedMail: false,
      acceptedSms: false,
      email: "",
      tel: "",
      unsubscribeTel: "",
      unsubscribeEmail: "",
      visiblePopup: false,
      categories: []
    };
  }

  componentDidMount() {
    GetAllCategories().then(allCategories => {
      this.setState({ categories: allCategories });
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

  updateUnsubscribeTel = e => {
    this.setState({ unsubscribeTel: e.target.value });
  };

  updateunsubscribeEmail = e => {
    this.setState({ unsubscribeEmail: e.target.value });
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

  showToast = (text, state) => {
    toast(text, { type: state });
  };

  confirmNumber = number => {
    var tel = this.state.tel;
    confirmPhoneNumber(number, tel)
      .then(resp => {
        this.closePopup();
        this.showToast("Zapisałeś się!", "success");
      })
      .catch(this.handleError);
  };

  submitMail = e => {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }
    var mail = this.state.email;

    subscribe(mail, subscriptionType.Email, categories)
      .then(resp => {
        this.showToast(
          "Na Twojego emaila został wysłany link do potwierdzenia adresu",
          "success"
        );
      })
      .catch(this.handleError);
  };

  submitTel = e => {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }
    var tel = this.state.tel;

    subscribe(tel, subscriptionType.Sms, categories)
      .then(resp => {
        this.setState({
          visiblePopup: ContentTypes.Confirm
        });
      })
      .catch(this.handleError);
  };

  handleError = err => {
    console.error(err);
    this.showToast(`Wystąpił błąd: ${err.Message || err}`, "error");
  };

  unsubscribeTel = e => {
    e.preventDefault();
    var tel = this.state.unsubscribeTel;
    unsubscribe(tel)
      .then(() => {
        this.showToast("Zostałeś wypisany z powiadomień", "success");
      })
      .catch(this.handleError);
  };

  unsubscribeEmail = e => {
    e.preventDefault();
    var mail = this.state.unsubscribeEmail;
    unsubscribe(mail)
      .then(() => {
        this.showToast("Zostałeś wypisany z powiadomień", "success");
      })
      .catch(this.handleError);
  };

  pushNotification = async e => {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }
    var token = await this.askForPermissioToReceiveNotifications();
    if (token == undefined) {
      this.showToast("Nie wyraziłeś zgodę na powiadomienia", "warning");
      return;
    }
    subscribe(token, subscriptionType.Push, categories)
      .then(() => {
        this.showToast("Zostałeś zapisany na powiadomienia", "success");
      })
      .catch(this.handleError);
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
        <Checkbox
          key={"category-key-" + item.id}
          id={item.id}
          text={item.name}
          checked={this.state.checked.includes(item.id)}
          onChange={this.handleChange}
        ></Checkbox>
      );
    });

    return (
      <article className="signup-page">
        <section className="sign-to">
          <h1>ZAPISZ SIĘ NA POWIADOMIENIA</h1>
          <div className="notofications-description">
            <div className="description-part">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="description-part">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </section>
        <section className="notification-section">
          <div className="header">
            <div className="align-left">
              <h1>KROK 1 </h1>
              <p>Wybierz kategorie powiadomień jakie chcesz otrzymywać</p>
            </div>
          </div>
          <div className="content">
            <form className="category-checkboxes">
              <Checkbox
                text={"ZAZNACZ WSZYSTKO"}
                onChange={this.toggleAll}
              ></Checkbox>
              {categoriesList}
            </form>
          </div>
        </section>
        <section className="notification-section">
          <div className="header">
            <div className="align-left">
              <h1>KROK 2 </h1>
              <p>Wybierz w jaki sposób chcesz odbierać powiadomienia</p>
            </div>
          </div>
          <div className="content content-notifications">
            <div className="contact-container">
              <form onSubmit={this.submitMail}>
                <p className="title">
                  Podaj nam swój adres email, aby otrzymywać powiadomienia
                  mailowe{" "}
                </p>
                <input
                  type="email"
                  placeholder="mail"
                  onChange={this.updateMail}
                  value={this.state.email}
                  required
                />
                <div className="accept-line">
                  <Checkbox
                    text={"Akceptuj "}
                    checked={this.state.acceptedMail}
                    onChange={this.acceptedChangeMail}
                    required
                  />
                  <span
                    className="terms"
                    onClick={() => this.showPopup(ContentTypes.Terms)}
                  >
                    regulamin
                  </span>
                </div>
                <button
                  className="btn btn-primary btn-center-aligned"
                  type="submit"
                >
                  <span>Zapisz się</span>
                </button>
              </form>
            </div>
            <div className="contact-container">
              <form onSubmit={this.submitTel}>
                <p className="title">
                  Podaj nam swój numer telefonu, aby otrzymywać powiadomienia
                  sms{" "}
                </p>
                <input
                  type="tel"
                  placeholder="telefon"
                  title="format: 123456789"
                  pattern="[0-9]{9}"
                  onChange={this.updateTel}
                  value={this.state.tel}
                  required
                />
                <div className="accept-line">
                  <Checkbox
                    text={"Akceptuj "}
                    checked={this.state.acceptedSms}
                    onChange={this.acceptedChangeSms}
                    required
                  />
                  <span
                    className="terms"
                    onClick={() => this.showPopup(ContentTypes.Terms)}
                  >
                    regulamin
                  </span>
                </div>
                <button
                  className="btn btn-primary btn-center-aligned"
                  type="submit"
                >
                  <span>Zapisz się</span>
                </button>
              </form>
            </div>
            <div className="contact-container">
              <section>
                <form onSubmit={this.pushNotification}>
                  <p className="title">Zapisz się na push notification</p>
                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Zapisz się</span>
                  </button>
                </form>
              </section>
            </div>
          </div>
        </section>
        <section className="notification-section">
          <div className="header">
            <div className="align-left">
              <h1>Rezygnacja </h1>
              <p>
                Aby zrezygnować z powiadomień e-mail lub SMS podaj swój adres
                e-mail lub numer telefonu
              </p>
            </div>
          </div>
          <div className="content">
            <div className="content content-notifications resignations">
              <div className="contact-container">
                <form onSubmit={this.unsubscribeEmail}>
                  <p className="title">
                    Podaj nam swój adres email, aby zrezygnować z powiadomień
                    email{" "}
                  </p>
                  <input
                    type="email"
                    placeholder="mail"
                    onChange={this.updateunsubscribeEmail}
                    value={this.state.unsubscribeEmail}
                    required
                  />
                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Wypisz się</span>
                  </button>
                </form>
              </div>
              <div className="contact-container">
                <form onSubmit={this.unsubscribeTel}>
                  <p className="title">
                    Podaj nam swój numer telefonu, aby otrzymywać powiadomienia
                    sms{" "}
                  </p>
                  <input
                    type="tel"
                    placeholder="telefon"
                    title="format: 123456789"
                    pattern="[0-9]{9}"
                    onChange={this.updateUnsubscribeTel}
                    value={this.state.unsubscribeTel}
                    required
                  />
                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Wypisz się</span>
                  </button>
                </form>
              </div>
              <div className="contact-container">
                <section>
                  <p className="title">Wypisz się z notyfikacji 'push'</p>
                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Wypisz się</span>
                  </button>
                </section>
              </div>
            </div>
          </div>
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
