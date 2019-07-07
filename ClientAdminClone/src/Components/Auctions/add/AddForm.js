import React, { Component } from "react";
import PostForm from "./PostForm";
import { Grid, Header } from "semantic-ui-react";
import { creatAuction } from "../../../service/auctionsService";
import { toast } from "react-toastify";

class AddForm extends Component {
  onSumbit = form => {
    console.log(form);
    return creatAuction(form)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        toast.success("Zbiórka została dodana");
      })
      .catch(err => {
        toast.error("Dodawanie nie powiodło się, spróbuj ponownie później");
      });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        margintop="10px"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Dodaj formularz
          </Header>
          <PostForm onSubmit={this.onSumbit} />
        </Grid.Column>
      </Grid>
    );
  }
}
export default AddForm;
