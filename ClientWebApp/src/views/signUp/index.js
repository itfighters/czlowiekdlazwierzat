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
import Toast from "../../components/toast";

import Loader from "../../components/loader";
import Popup from "../../components/popup";
import { ContentTypes, Terms, Confirm } from "../../components/popup/content";
import Checkbox from "../../components/checkbox/checkbox";

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
      categories: [],
      visibleToast: false,
      toastText: "",
      toastClass: ""
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
    this.setState({
      visibleToast: true,
      toastText: text,
      toastClass: state
    });
  };

  onCloseToast = () => {
    this.setState({
      visibleToast: false,
      toastText: "",
      toastClass: ""
    });
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
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }
    var token = await this.askForPermissioToReceiveNotifications();
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
            <div className="description-part"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="description-part"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </section>
        <section className="notification-section">
          <div className="header">
            <h1>KROK 1 </h1>
            <p>Wybierz kategorie powiadomień jakie chcesz otrzymywać</p>
          </div>
          <div className="content">
            <form className="category-checkboxes">
              <Checkbox
                text={'ZAZNACZ WSZYSTKO'}
                onChange={this.toggleAll}></Checkbox>
              {categoriesList}
            </form>
          </div>
        </section>
        <section className="notification-section">
          <div className="header">
            <h1>KROK 2 </h1>
            <p>Wybierz w jaki sposób chcesz odbierać powiadomienia</p>
          </div>
          <div className="content content-notifications">
            <div className="contact-container">
              <form onSubmit={this.submitMail}>
                <p className="title">
                  Podaj nam swój adres email, aby otrzymywać powiadomienia mailowe{" "}
                </p>
                <input
                  type="email"
                  placeholder="mail"
                  onChange={this.updateMail}
                  value={this.state.email}
                  required
                />
                <label>
                  <Checkbox
                    text={"Akceptuj regulamin"}
                    checked={this.state.acceptedMail}
                    onChange={this.acceptedChangeMail} />

                </label>
                <p
                  onClick={() => this.showPopup(ContentTypes.Terms)}
                >
                  {" "}
                  regulamin
            </p>
                <br />
                <button type="submit">Wyślij</button>
              </form>
            </div>
            <div className="contact-container">
              <form onSubmit={this.submitTel}>
                <p className="title">
                  Podaj nam swój numer telefonu, aby otrzymywać powiadomienia sms{" "}
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
                <label>
                  <Checkbox
                    text={"Akceptuj regulamin"}
                    checked={this.state.acceptedSms}
                    onChange={this.acceptedChangeSms} />
                </label>
                <p
                  onClick={() => this.showPopup(ContentTypes.Terms)}
                >
                  {" "}
                  regulamin
            </p>
                <br />
                <button type="submit">Wyślij</button>
              </form>
            </div>
            <div className="contact-container">
              <section>
                <p className="title">Zapisz się na push notification</p>
                <button onClick={this.pushNotification}>Zapisz się!</button>
              </section>
            </div>
          </div>
        </section>
        <section className="resignation">
          <div className="resignation-description">
            <section>
              <h1>Rezygnacja</h1>
              <p>Aby zrezygnowa z powiadomień e-mail lub SMS podaj swój adres e-mail lub numer telefonu.</p>
            </section>
          </div>
          <div className="resignation-email">
            <form onSubmit={this.unsubscribeEmail}>
              <input
                type="email"
                placeholder="mail"
                onChange={this.updateunsubscribeEmail}
                value={this.state.unsubscribeEmail}
                required
              />
              <div>CAPTCHA</div>
              <button type="submit">Wyślij</button>
            </form>
          </div>
          <div className="resignation-phone">
            <form onSubmit={this.unsubscribeTel}>
              <input
                type="tel"
                pattern="[0-9]{9}"
                placeholder="telefon"
                title="format: 123456789"
                onChange={this.updateUnsubscribeTel}
                value={this.state.unsubscribeTel}
                required
              />
              < div > CAPTCHA </div>
              <button type="submit">Wyślij</button>
            </form>
          </div>
        </section>
        <Popup visible={this.state.visiblePopup} close={this.closePopup}>
          {this.state.visiblePopup === ContentTypes.Confirm && (
            <Confirm submit={this.confirmNumber} />
          )}
          {this.state.visiblePopup === ContentTypes.Terms && <Terms />}
        </Popup>
        <Toast
          visible={this.state.visibleToast}
          state={this.state.toastClass}
          text={this.state.toastText}
          onClose={this.onCloseToast}
        />
      </article>
    );
  }
}
