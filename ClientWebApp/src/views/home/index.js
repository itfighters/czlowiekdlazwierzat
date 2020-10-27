import React from "react";
import HomeTilesList from "../../components/homeTilesList";
import About from "../about";
import { toast } from "react-toastify";
import queryString from "query-string";
import { confirmPhoneNumber } from "../../services/substriction.services";

export default class Home extends React.Component {
  state = { token: null };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);

    if (values && values.token && values.mail) {
      confirmPhoneNumber(values.token, values.mail)
        .then(resp => {
          toast("Potwierdziłes adres email", { type: "success" });
          this.props.history.replace("/");
        })
        .catch(err => {
          toast(`Wystąpił błąd podczas potwierdzenia e-maila`, {
            type: "error"
          });
        });
    }
  }

  render() {
    return (
      <div className="home-page">
        <h1>Potrzeby</h1>
        <HomeTilesList />
        <About />
      </div>
    );
  }
}
