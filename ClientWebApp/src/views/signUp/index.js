import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import ReCAPTCHA from "react-google-recaptcha";

import
{
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
import AcceptComponent from "../../components/accept-component";
import { sitekey } from "../../config";
import HomeTilesList from "../../components/homeTilesList";

export default class SignUp extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      checked: [],
      acceptedMail: false,
      acceptedSms: false,
      acceptedPush: false,
      email: "",
      tel: "",
      unsubscribeTel: "",
      unsubscribeEmail: "",
      visiblePopup: false,
      categories: [],
      captchaMail: null,
      captchaSms: null
    };
  }

  componentDidMount()
  {
    GetAllCategories().then(allCategories =>
    {
      this.setState({ categories: allCategories });
    });
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount()
  {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e =>
  {
    if (e.keyCode === 27) {
      this.setState({
        visiblePopup: false
      });
    }
  };

  showInConsole = event =>
  {
    console.log(this.state);
    event.preventDefault();
  };

  acceptedChangeMail = () =>
  {
    this.setState({ acceptedMail: !this.state.acceptedMail });
  };

  acceptedChangeSms = () =>
  {
    this.setState({ acceptedSms: !this.state.acceptedSms });
  };

  acceptedChangePush = () =>
  {
    this.setState({ acceptedPush: !this.state.acceptedPush });
  };

  handleChange = event =>
  {
    var categoryId = Number.parseInt(event.target.value);
    var checkedArray = this.state.checked;
    if (checkedArray.includes(categoryId)) {
      checkedArray = checkedArray.filter(id => id !== categoryId);
    } else {
      checkedArray.push(categoryId);
    }

    this.setState({ checked: checkedArray });
  };

  toggleAll = e =>
  {
    if (e.target.checked) {
      var categoriesList = this.state.categories.map(item =>
      {
        return item.id;
      });
      this.setState({ checked: categoriesList });
    } else {
      this.setState({ checked: [] });
    }
  };

  updateMail = e =>
  {
    this.setState({ email: e.target.value });
  };
  updateTel = e =>
  {
    this.setState({ tel: e.target.value });
  };

  updateUnsubscribeTel = e =>
  {
    this.setState({ unsubscribeTel: e.target.value });
  };

  updateunsubscribeEmail = e =>
  {
    this.setState({ unsubscribeEmail: e.target.value });
  };

  showPopup = type =>
  {
    this.setState({
      visiblePopup: type
    });
  };

  closePopup = () =>
  {
    this.setState({
      visiblePopup: false
    });
  };

  showToast = (text, state) =>
  {
    toast(text, { type: state });
  };

  confirmNumber = number =>
  {
    var tel = this.state.tel;
    confirmPhoneNumber(number, tel)
      .then(resp =>
      {
        this.closePopup();
        this.showToast("Zapisałeś się!", "success");
      })
      .catch(this.handleError);
  };

  submitMail = e =>
  {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }

    if (!this.state.captchaMail) {
      this.showToast(
        "Proszę zaznacz nie jestem robotem w sekcji email",
        "warning"
      );
      return;
    }

    var mail = this.state.email;

    subscribe(mail, subscriptionType.Email, categories)
      .then(resp =>
      {
        this.showToast(
          "Na Twojego emaila został wysłany link do potwierdzenia adresu",
          "success"
        );
      })
      .catch(this.handleError);
  };

  submitTel = e =>
  {
    e.preventDefault();
    var categories = this.state.checked;
    if (categories.length === 0) {
      this.showToast(
        "Proszę wybierz z jakiej kategorii chcesz otrzymywać powiadomienia",
        "warning"
      );
      return;
    }

    if (!this.state.captchaSms) {
      this.showToast(
        "Proszę zaznacz nie jestem robotem w sekcji telefon",
        "warning"
      );
      return;
    }

    var tel = this.state.tel;

    subscribe(tel, subscriptionType.Sms, categories)
      .then(resp =>
      {
        this.setState({
          visiblePopup: ContentTypes.Confirm
        });
      })
      .catch(this.handleError);
  };

  handleError = err =>
  {
    if (err && Array.isArray(err.Value)) {
      err.Value.forEach(msg =>
      {
        this.showToast(`Wystąpił błąd: ${msg}`, "error");
      });
    } else {
      this.showToast(`Wystąpił błąd: ${err.Message || err}`, "error");
    }
    console.error(err);
  };

  unsubscribeTel = e =>
  {
    e.preventDefault();
    var tel = this.state.unsubscribeTel;
    unsubscribe(tel)
      .then(() =>
      {
        this.showToast("Zostałeś wypisany z powiadomień", "success");
      })
      .catch(this.handleError);
  };

  unsubscribeEmail = e =>
  {
    e.preventDefault();
    var mail = this.state.unsubscribeEmail;
    unsubscribe(mail)
      .then(() =>
      {
        this.showToast("Zostałeś wypisany z powiadomień", "success");
      })
      .catch(this.handleError);
  };

  unsubscribePush = e =>
  {
    e.preventDefault();
    const messaging = firebase.messaging();
    messaging
      .getToken()
      .then(token =>
      {
        if (token === null) {
          this.showToast("Nie jesteś zapisany na powiadomienia push", "info");
          return;
        }
        messaging.deleteToken(token).then(() =>
        {
          unsubscribe(token)
            .then(() =>
            {
              this.showToast("Zostałeś wypisany z powiadomień", "success");
            })
            .catch(this.handleError);
        });
      })
      .catch(err =>
      {
        console.error(err);
      });
  };

  pushNotification = async e =>
  {
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
    if (token !== undefined) {
      subscribe(token, subscriptionType.Push, categories)
        .then(() =>
        {
          this.showToast("Zostałeś zapisany na powiadomienia", "success");
        })
        .catch(this.handleError);
    }
  };

  askForPermissioToReceiveNotifications = async () =>
  {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      if (token === undefined) {
        return;
      }
      return token;
    } catch (error) {
      if (error.code === "messaging/unsupported-browser") {
        this.showToast(
          "Twoja przeglądarka nie wspier push powiadomień",
          "warning"
        );
      } else {
        this.showToast("Nie wyraziłeś zgodę na powiadomienia", "warning");
      }
    }
  };

  render()
  {
    if (this.state.categories.length === 0) {
      return <Loader />;
    }

    var categoriesList = this.state.categories.map(item =>
    {
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
      <>
        <article className="signup-page">
          <section className="sign-to">
            <h1>ZAPISZ SIĘ NA POWIADOMIENIA</h1>
            <div className="notofications-description">
              <div className="description-part">
                Pomagać można na wiele sposobów, a każde wsparcie przekazane
                zwierzakom przebywającym w naszym fundacyjnym przytulisku jest
                bezcenne i bardzo potrzebne. Żeby ułatwić wszystkim sympatykom
                łętkowickich bezdomniaków pomaganie i dostarczać aktaulne
                infrormacje o potrzebach zwierzaków przygotowaliśmy kilka opcji
                wygodnych powiadomień. W pierwszym kroku trzeba wybrać wszystkie
                te kategorie pomocy, które nas interesują.
              </div>
              <div className="description-part">
                {" "}
                Następnie wystarczy zdecydować czy chcemy dostawać maile, smsy
                czy powiadomienia typu push na smatfon z systemem Android.
                Wszystkie powiadomienia są oczywiście bezpłatne. Przy wybranej
                opcji należy podać odpowiednio adres e-mail lub numer telefonu,
                albo zainstalować aplikację do powiadomień (tylko dla systemu
                Android). Dzięki temu nie ominie nas już żadna prośba o wsparcie
                płynąca z Łętkowic. Z powiadomień można się też łatwo wypisać
                poprzez formularz na dole strony.
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

                  <ReCAPTCHA
                    sitekey={sitekey}
                    onChange={value => this.setState({ captchaMail: value })}
                    onExpired={value => this.setState({ captchaMail: null })}
                    theme="dark"
                  />
                  <div className="confirm-row">
                    <AcceptComponent
                      checked={this.state.acceptedMail}
                      onChange={this.acceptedChangeMail}
                      onClick={() => this.showPopup(ContentTypes.Terms)}
                    />

                    <button
                      className="btn btn-primary btn-center-aligned"
                      type="submit"
                    >
                      <span>Zapisz się</span>
                    </button>
                  </div>
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

                  <ReCAPTCHA
                    sitekey={sitekey}
                    theme="dark"
                    onChange={value => this.setState({ captchaSms: value })}
                    onExpired={value => this.setState({ captchaSms: null })}
                  />

                  <AcceptComponent
                    checked={this.state.acceptedSms}
                    onChange={this.acceptedChangeSms}
                    onClick={() => this.showPopup(ContentTypes.Terms)}
                  />

                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Zapisz się</span>
                  </button>
                </form>
              </div>


              <div className="contact-container">
                <form onSubmit={this.pushNotification}>
                  <p className="title">
                    Zapisz się na notyfikację mobilne{" "}
                  </p>
                  <p className="info">
                    Zapisz się, jeśli twoje urządzenie wspiera notyfikację
                    mobilne
                  </p>

                  <AcceptComponent
                    checked={this.state.acceptedPush}
                    onChange={this.acceptedChangePush}
                    onClick={() => this.showPopup(ContentTypes.Terms)}
                  />

                  <button
                    className="btn btn-primary btn-center-aligned"
                    type="submit"
                  >
                    <span>Zapisz się</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="notification-section">
            <h1>Rezygnacja z powiadomień</h1>
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
                      Podaj nam swój numer telefonu, aby zrezygnować z
                      powiadomień SMS{" "}
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
                  <form onSubmit={this.unsubscribePush}>
                    <p className="title">Wypisz się z notyfikacji mobilnych</p>
                    <p className="info">
                      Wypisz się, jeśli nie odpowiada Ci ta forma powiadomień
                    </p>
                    <button
                      className="btn btn-primary btn-center-aligned"
                      type="submit"
                    >
                      <span>Wypisz się</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </article>
        <Popup visible={this.state.visiblePopup} close={this.closePopup}>
          {this.state.visiblePopup === ContentTypes.Confirm && (
            <Confirm submit={this.confirmNumber} />
          )}
          {this.state.visiblePopup === ContentTypes.Terms && <Terms />}
        </Popup>
      </>
    );
  }
}
