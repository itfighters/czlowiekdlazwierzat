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
    // form: {
    //   title: "",
    //   image: null,
    //   description: "",
    //   multichoiceCategories: [],
    //   dotpayLink: "",
    //   paypalLink: "",
    //   siepomagaLink: "",
    //   checkboxKonto: false,
    //   dateStart: "",
    //   dateEnd: "",
    //   adressStart: "",
    //   adressEnd: "",
    //   phone: ""
    // },
    form: {
      title: "Moja zbiurka",
      image: null,
      description: "Test desc",
      multichoiceCategories: [1,3],
      dotpayLink: "https://itfighters.pl",
      paypalLink: "https://itfighters.pl",
      siepomagaLink: "https://itfighters.pl",
      checkboxKonto: true,
      dateStart: "",
      dateEnd: "",
      adressStart: "",
      adressEnd: "",
      phone: "111111111"
    },
    loaded: false,
    categories: [],
    duringUpload: false,
    uploaded: false,
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

  onChange = (e, { name, value }) => {
    this.setState(({ form }) => ({ form: { ...form, [name]: value } }));
  };
  formSubmitted = e => {
    e.preventDefault();

    this.setState({ duringUpload: true, uploaded: true });
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

    const {
      loaded,
      categories,
      duringUpload,
      uploaded,
      uploadStatus
    } = this.state;

    return (
      <Form onSubmit={this.formSubmitted} style={{ marginBottom: "50px" }}>
        <Form.Field
          control={Input}
          name="title"
          label="Tytuł"
          placeholder="Tytuł"
          value={title}
          onChange={this.onChange}
        />
        <Form.Field>
          <Image
            src="/images/wireframe/image.png"
            size="small"
            alt="Wrong img :("
            wrapped
            name="image"
            value={image}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field
          control={TextArea}
          label="Opis"
          placeholder="Opis"
          name="description"
          value={description}
          onChange={this.onChange}
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
          name="chceckboxKonto"
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
          {uploaded && !duringUpload
            ? uploadStatus
              ? "Uploaded!"
              : "Cannot upload :("
            : ""}
        </Button>
      </Form>
    );
  }
}

export default PostForm;
