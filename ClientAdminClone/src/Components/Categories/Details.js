import React, { Component } from "react";
import { GetCategory } from "../../service/categoryService";
import { toast } from "react-toastify";
import { Button, Form, Input, Image, Dimmer, Loader } from "semantic-ui-react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { category: {}, loading: true };
  }

  async componentDidMount() {
    try {
      var categoryId = this.props.match.params.id;
      var categoryDetails = await GetCategory(categoryId);
      this.setState({ category: categoryDetails, loading: false });
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
      toast.error(
        "Nie udało się pobrać listy kategoii, spróbuj ponownie później"
      );
    }
  }

  onChange = (e, { name, value }) => {};

  formSubmitted = e => {
    e.preventDefault();
  };

  render() {
    const { image, name } = this.state.category;

    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Form onSubmit={this.formSubmitted}>
        <Form.Field
          label="Nazwa kategorii:"
          value={name}
          control={Input}
          placeholder="Nazwa..."
          name="name"
          type="text"
          onChange={this.onChange}
        />
        <Form.Field
          label="Wybierz zdjęcie"
          control={Input}
          placeholder="Zdjęcie..."
          name="pic"
          type="File"
          accept="image/*"
          onChange={this.uploadImage}
        />
        {image && (
          <Form.Field>
            <Image
              src={image}
              size="small"
              alt="wybrane zdjecie"
              wrapped
              name="image"
              value={image}
              onChange={this.onChange}
            />
          </Form.Field>
        )}

        <Button type="submit" color="green" size="big">
          Wyślij{" "}
        </Button>
      </Form>
    );
  }
}
