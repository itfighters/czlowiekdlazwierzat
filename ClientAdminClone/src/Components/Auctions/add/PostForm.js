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
import { toast } from "react-toastify";

class PostForm extends Component {
  constructor(props) {
    super(props);

    const { form, isUpdate } = this.props;
    if (isUpdate) this.state = { form: { ...form } };
    this.state = {
      categories: [],
      duringUpload: false,
      uploadStatus: false
    };
    if (this.props.auction) {
      this.state.form = { ...this.props.auction };
    } else {
      this.state.form = {
        title: "",
        image: null,
        description: "",
        multichoiceCategories: [],
        siepomagaLink: "",
        checkboxKonto: true,
        dateStart: this.getCurrentDate(),
        dateEnd: "",
        phone: "",
        files: null,
        featured: false,
        publish: false,
        dotpay: false,
        paypall: false
      };
    }
  }

  getCurrentDate() {
    var date = new Date();
    var currentDate = date.toISOString().slice(0, 10);
    return currentDate;
  }

  onChange = (e, { name, value }) => {
    this.setState(({ form }) => ({ form: { ...form, [name]: value } }));
  };

  toggleChackBox = (e, { name, checked }) => {
    this.setState(({ form }) => ({ form: { ...form, [name]: checked } }));
  };

  formSubmitted = e => {
    e.preventDefault();
    const { form } = this.state;
    this.props.onSubmit(form);
  };

  options = [{ key: "klucz", text: "nazwa", value: "wartosc" }];

  uploadImage = e => {
    var maxImageMB = 10;
    let maxImageSize = 1024 * 1024 * maxImageMB;
    var files = e.target.files;
    console.log(files[0]);
    if (files[0].size > maxImageSize) {
      toast.error(
        `Zdjęcie jest za duże, maksymalny rozmiar zdjęcia to ${maxImageMB} MB`
      );
      return;
    }
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
      featured,
      image,
      description,
      multichoiceCategories,
      siepomagaLink,
      checkboxKonto,
      dateStart,
      dateEnd,
      publish,
      dotpay,
      paypall
    } = this.state.form;

    const { duringUpload } = this.state;
    const { categories } = this.props;

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
          required
        />
        <Form.Field
          control={Input}
          label="Link do siepomaga"
          placeholder="Link do siepomaga"
          name="siepomagaLink"
          value={siepomagaLink}
          onChange={this.onChange}
        />
        <Form.Field
          toggle
          control={Checkbox}
          label="Dotpay"
          name="dotpay"
          checked={dotpay}
          onChange={this.toggleChackBox}
        />{" "}
        <Form.Field
          toggle
          control={Checkbox}
          label="Paypall"
          name="paypall"
          checked={paypall}
          onChange={this.toggleChackBox}
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Data początkowa"
            placeholder="Data początkowa"
            name="dateStart"
            value={dateStart}
            type="date"
            min={this.getCurrentDate()}
            onChange={this.onChange}
          />
          <Form.Field
            control={Input}
            label="Data końcowa"
            placeholder="Data końcowa"
            name="dateEnd"
            value={dateEnd}
            type="date"
            min={dateStart}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Field
          toggle
          control={Checkbox}
          label="Widoczne konto"
          name="checkboxKonto"
          checked={checkboxKonto}
          onChange={this.toggleChackBox}
        />
        <Form.Field
          toggle
          control={Checkbox}
          label="Widoczne publicznie"
          name="publish"
          checked={publish}
          onChange={this.toggleChackBox}
        />
        <Form.Field
          toggle
          control={Checkbox}
          name="featured"
          label="Wyróżniona zbiórka"
          checked={featured}
          onChange={this.toggleChackBox}
        />
        <Button type="submit" color="green" size="big" disabled={duringUpload}>
          Wyślij{" "}
        </Button>
      </Form>
    );
  }
}

export default PostForm;
