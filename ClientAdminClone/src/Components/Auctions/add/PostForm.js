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
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { IMAGES_URL } from "../../../config";

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
        shortDescription: "",
        image: null,
        description: "",
        multichoiceCategories: [],
        siepomagaLink: "",
        checkboxKonto: true,
        dateStart: this.getCurrentDate(),
        dateEnd: this.getDefaultEndDate(),
        phone: "",
        files: null,
        featured: false,
        publish: true,
        dotpay: false,
        paypall: false,
        currentImage: null
      };
    }
  }

  getCurrentDate() {
    return new Date();
  }

  getDefaultEndDate() {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    return date;
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
        form: { ...form, image: reader.result, cover: files[0] }
      }));
    };
    reader.readAsDataURL(files[0]);
  };

  render() {
    const {
      title,
      shortDescription,
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
      paypall,
      currentImage
    } = this.state.form;

    const { duringUpload } = this.state;
    const { categories } = this.props;

    const imageSource = () => {
      if (currentImage && !image) {
        return `${IMAGES_URL}/` + currentImage;
      }
      else {
        return image;
      }
    }

    return (
      <Form onSubmit={this.formSubmitted} style={{ marginBottom: "50px" }}>
        <Form.Field
          control={Input}
          name="title"
          label="Tytuł"
          placeholder="Tytuł"
          maxLength="300"
          value={title ? title : ''}
          onChange={this.onChange}
          required
        />
        <Form.Field
          control={Input}
          name="shortDescription"
          label="Krótki opis"
          placeholder="Krótki opis"
          maxLength="300"
          value={shortDescription}
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
        {(image || currentImage) && (
          <Form.Field>
            <Image
              src={imageSource()}
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
          maxLength={1500}
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
          value={siepomagaLink ? siepomagaLink : ''}
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
          <SemanticDatepicker
            label="Data początkowa"
            placeholder="Data początkowa"
            name="dateStart"
            selected={dateStart}
            onDateChange={value => {
              this.onChange(undefined, {
                name: "dateStart",
                value: value
              });
            }}
            required
          />
          <SemanticDatepicker
            label="Data końcowa"
            placeholder="Data końcowa"
            name="dateEnd"
            selected={dateEnd}
            minDate={dateStart}
            onDateChange={value => {
              this.onChange(undefined, {
                name: "dateEnd",
                value
              });
            }}
            required
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
