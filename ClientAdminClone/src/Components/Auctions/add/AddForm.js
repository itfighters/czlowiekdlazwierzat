import React, { Component } from "react";
import PostForm from "./PostForm";
import { Grid, Header } from "semantic-ui-react";
import {
  creatAuction,
  getDetails,
  editAuction
} from "../../../service/auctionsService";
import { toast } from "react-toastify";
import { GetCategories } from "../../../service/categoryService";
import { mapInputsFromPost } from "../../../Utils/helpers";
class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = { auction: null, categories: [] };
  }

  onSumbit = form => {
    if (!form.id) {
      return creatAuction(form)
        .then(response => {
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          toast.success("Zbiórka została dodana");
        })
        .catch(err => {
          toast.error("Dodawanie nie powiodło się, spróbuj ponownie później");
        });
    } else {
      return editAuction(form)
        .then(response => {
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          toast.success("Zbiórka została zaktualizowana");
        })
        .catch(err => {
          toast.error(
            "Aktualizacja nie powiodła się, spróbuj ponownie później"
          );
        });
    }
  };

  async componentDidMount() {
    let { auctionId } = this.props;
    if (auctionId) {
      var details = await getDetails(auctionId);
      this.setState({ auction: mapInputsFromPost(details) });
    }

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

  render() {
    if (
      (this.props.auctionId && !this.state.auction) ||
      this.state.categories.length === 0
    ) {
      return "loading...";
    }

    return (
      <Grid textAlign="center" verticalAlign="middle" margintop="10px">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            {this.props.header}
          </Header>
          <PostForm
            onSubmit={this.onSumbit}
            auction={this.state.auction}
            categories={this.state.categories}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
export default AddForm;
