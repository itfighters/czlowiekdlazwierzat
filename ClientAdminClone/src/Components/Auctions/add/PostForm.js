import React, { Component } from "react";
import {
  TextArea,
  Input,
  Checkbox,
  Button,
  Image,
  Form,
  Dropdown
} from "semantic-ui-react";
import { GetCategories } from "../../../service/categoryService";

class PostForm extends Component {
  constructor(props) {
    super(props);

    const { form, isUpdate } = this.props;
    if (isUpdate) this.state = { form: { ...form } };

    this.state.loaded = false;
  }
  state = {
    form: {
      title: "",
      image: null,
      description: "",
      multichoiceCategories: [],
      dotpayLink: "",
      paypalLink: "",
      siepomagaLink: "",
      checkboxKonto: true,
      dateStart: this.getCurrentDate(),
      dateEnd: "",
      adressStart: "",
      adressEnd: "",
      phone: "",
      files: null
    },
    loaded: false,
    categories: [],
    duringUpload: false,
    uploadStatus: false
  };
  componentDidMount() {
    GetCategories().then(categories =>
      this.setState({
        loaded: true,
        categories: categories.map(category => ({
          key: category.id,
          text: category.name,
          value: category.id
        }))
      })
    );
  }

  getCurrentDate() {
    var date = new Date();
    var currentDate = date.toISOString().slice(0, 10);
    return currentDate;
  }

  onChange = (e, { name, value }) => {
    this.setState(({ form }) => ({ form: { ...form, [name]: value } }));
  };
  formSubmitted = e => {
    e.preventDefault();

    const { loaded, form } = this.state;

    if (loaded)
      this.props
        .onSubmit(form)
        .then(() => this.setState({ duringUpload: false, uploadStatus: true }))
        .catch(() =>
          this.setState({ duringUpload: false, uploadStatus: false })
        );
  };
  options = [{ key: "klucz", text: "nazwa", value: "wartosc" }];

  uploadImage = e => {
    var files = e.target.files;
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState(({ form }) => ({
        form: { ...form, image: reader.result }
      }));
    };
    reader.readAsDataURL(files[0]);
  };

  render() {
    const {
      title,
      image,
      description,
      multichoiceCategories,
      dotpayLink,
      paypalLink,
      siepomagaLink,
      checkboxKonto,
      dateStart,
      dateEnd,
      adressStart,
      adressEnd,
      phone
    } = this.state.form;

    console.log(image);
    const { loaded, categories, duringUpload } = this.state;

    return (
      <Form onSubmit={this.formSubmitted} style={{ marginBottom: "50px" }}>
        <Form.Field
          control={Input}
          name="title"
          label="Tytuł"
          placeholder="Tytuł"
          value={title}
          onChange={this.onChange}
          required
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
        <Form.Field
          control={TextArea}
          label="Opis"
          placeholder="Opis"
          name="description"
          value={description}
          onChange={this.onChange}
          required
        />
        <Form.Field
          label="Wybierz kategorię"
          control={Dropdown}
          placeholder="Kategorie"
          fluid
          multiple
          selection
          options={categories}
          name="multichoiceCategories"
          value={multichoiceCategories}
          onChange={this.onChange}
          loading={!loaded}
          required
        />
        <Form.Field
          control={Input}
          label="Dotpay"
          placeholder="Link do dotpay"
          name="dotpayLink"
          value={dotpayLink}
          onChange={this.onChange}
        />
        <Form.Field
          control={Input}
          label="Paypal"
          placeholder="Link do paypal"
          name="paypalLink"
          value={paypalLink}
          onChange={this.onChange}
        />
        <Form.Field
          control={Input}
          label="siepomaga"
          placeholder="Link do siepomaga"
          name="siepomagaLink"
          value={siepomagaLink}
          onChange={this.onChange}
        />
        <Form.Field
          control={Checkbox}
          label="Konto"
          name="checkboxKonto"
          checked={checkboxKonto}
          onChange={this.onChange}
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Data początkowa"
            placeholder="Data początkowa"
            name="dateStart"
            value={dateStart}
            type="date"
            onChange={this.onChange}
          />
          <Form.Field
            control={Input}
            label="Data końcowa"
            placeholder="Data końcowa"
            name="dateEnd"
            value={dateEnd}
            type="date"
            onChange={this.onChange}
          />
        </Form.Group>
        {/* <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Adres początkowy"
            placeholder="Adres początkowy"
            name="adressStart"
            value={adressStart}
            onChange={this.onChange}
          />
          <Form.Field
            control={Input}
            label="Adres końcowy"
            placeholder="Adres końcowy"
            name="adressEnd"
            value={adressEnd}
            onChange={this.onChange}
          />
        </Form.Group> */}
        <Form.Field
          control={Input}
          label="Telefon"
          placeholder="Wprowadź numer telefonu"
          name="phone"
          value={phone}
          onChange={this.onChange}
        />
        <Button type="submit" color="green" size="big" disabled={duringUpload}>
          Wyślij{" "}
        </Button>
      </Form>
    );
  }
}

export default PostForm;
