import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import { AddCategory as ServiceAddCategory } from "../../service/categoryService";
import { Dimmer, Loader } from "semantic-ui-react";
import { toast } from "react-toastify";

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  onSubmit = async category => {
    try {
      this.setState({ loading: true });
      await ServiceAddCategory(category);
      this.setState({ loading: false });
      toast.success("Kategoria została dodana");
      this.props.history.push("/admin/categories");
    } catch (err) {
      this.setState({ loading: false });
      toast.error("Nie udało się dodać kategorii, spróbuj ponownie później");
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <CategoryForm onSubmit={this.onSubmit} category={this.state.category} />
    );
  }
}
