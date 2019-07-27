import React, { Component } from "react";
import { GetCategory, EditCategory } from "../../service/categoryService";
import { toast } from "react-toastify";
import { Dimmer, Loader } from "semantic-ui-react";
import CategoryForm from "./CategoryForm";

export default class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { category: null, loading: true };
  }

  async componentDidMount() {
    try {
      var categoryId = this.props.match.params.id;
      var categoryDetails = await GetCategory(categoryId);
      this.setState({
        category: categoryDetails,
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

  onSubmit = async category => {
    try {
      this.setState({ loading: true });
      category.id = this.state.category.id;
      await EditCategory(category);
      this.setState({ loading: false });
      toast.success("Aktualizacja zakończona pomyślnie");
      this.props.history.push("/admin/categories");
    } catch (err) {
      this.setState({ loading: false });
      toast.error(
        "Nie udało się zaktualizować kategorii, spróbuj ponownie później"
      );
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
