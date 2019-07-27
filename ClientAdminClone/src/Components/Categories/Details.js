import React, { Component } from "react";
import {
  GetCategory,
  EditCategory,
  PlaceholderImg
} from "../../service/categoryService";
import { toast } from "react-toastify";
import { Button, Form, Input, Image, Dimmer, Loader } from "semantic-ui-react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", image: "", loading: true };
  }

  async componentDidMount() {
    try {
      var categoryId = this.props.match.params.id;
      var categoryDetails = await GetCategory(categoryId);
      this.setState({
        ...this.state,
        ...categoryDetails,
        loading: false
      });
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
      toast.error(
        "Nie udało się pobrać listy kategoii, spróbuj ponownie później"
      );
    }
  }

  onChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  formSubmitted = async e => {
    e.preventDefault();
    try {
      this.setState({ loading: true });
      var category = {
        id: this.state.id,
        name: this.state.name,
        image: this.state.image
      };
      await EditCategory(category);
      this.setState({ loading: false });
      toast.success("Aktualizacja zakończona pomyślnie");
    } catch (err) {
      this.setState({ loading: false });
      toast.error(
        "Nie udało się zaktualizować kategorii, spróbuj ponownie później"
      );
    }
  };

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

  render() {
    const { image, name } = this.state;

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
