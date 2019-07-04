import React, { Component } from "react";
import PostForm from "./PostForm";
import { Grid, Header } from "semantic-ui-react";
import { creatAuction } from "../../../service/auctionsService";

class AddForm extends Component {
  onSumbit = form => {
    console.log(form);
    return creatAuction(form);
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
