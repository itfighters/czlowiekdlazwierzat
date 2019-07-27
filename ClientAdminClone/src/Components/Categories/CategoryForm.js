import React, { Component } from "react";
import { Button, Form, Input, Image } from "semantic-ui-react";
import { PlaceholderImg } from "../../service/categoryService";

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.category) {
      this.state = {
        name: this.props.category.name,
        image: this.props.category.image
      };
    } else {
      this.state = { name: "", image: "" };
    }
  }

  uploadImage = e => {
    var files = e.target.files;
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        image: reader.result
      });
    };
    reader.readAsDataURL(files[0]);
  };

  formSubmitted = e => {
    e.preventDefault();
    var category = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image
    };
    this.props.onSubmit(category);
  };

  onChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { image, name } = this.state;

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
              src={image || PlaceholderImg}
              size="medium"
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
