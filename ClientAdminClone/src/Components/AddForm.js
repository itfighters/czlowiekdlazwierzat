import React, { Component } from 'react';
import PostForm from './PostForm';
import { Grid, Header } from 'semantic-ui-react';
import postService from '../service/postService';

class AddForm extends Component {
  onSumbit = form => {
    return postService.addForm(form);
  };

  render() {
    console.log(this);
    console.log(this.onSumbit);

    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
        marginTop="10px"
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
