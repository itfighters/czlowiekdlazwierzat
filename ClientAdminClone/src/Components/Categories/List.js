import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  GetCategories,
  RemoveCategory,
  PlaceholderImg
} from "../../service/categoryService";
import { toast } from "react-toastify";
import { Table, Icon, Image, Dimmer, Loader, Confirm } from "semantic-ui-react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
      toBeDeleted: null,
      deleteConfirmOpen: false
    };
  }

  async componentDidMount() {
    try {
      this.getCategories();
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
      toast.error(
        "Nie udało się pobrać listy kategoii, spróbuj ponownie później"
      );
    }
  }

  async getCategories() {
    this.setState({ loading: true });
    var allCategories = await GetCategories();
    this.setState({ categories: allCategories, loading: false });
  }

  confirmRemove = id => {
    this.setState({ toBeDeleted: id, deleteConfirmOpen: true });
  };

  removeCategory = async () => {
    try {
      this.setState({ loading: true, deleteConfirmOpen: false });
      await RemoveCategory(this.state.toBeDeleted);
      this.setState({ toBeDeleted: null });
      this.getCategories();
    } catch (err) {
      this.setState({
        loading: false,
        toBeDeleted: null,
        deleteConfirmOpen: false
      });
      console.log(err);
      toast.error(
        "Nie udało się pobrać listy kategoii, spróbuj ponownie później"
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

    var rows = this.state.categories.map(category => (
      <Table.Row key={`category-${category.id}`}>
        <Table.Cell>{category.name}</Table.Cell>
        <Table.Cell>
          <Image src={category.image || PlaceholderImg} size="small" />
        </Table.Cell>
        <Table.Cell>
          <Link to={`category/${category.id}`}>
            <button className="ui gray button">
              <Icon name="edit" />
              Edytuj
            </button>
          </Link>
          <button
            className="ui red button"
            onClick={() => this.confirmRemove(category.id)}
          >
            <Icon name="trash" />
            Usuń
          </button>
        </Table.Cell>
      </Table.Row>
    ));
    return (
      <>
        <Link to="categories/add">
          <button className="ui blue button">
            <Icon name="add" />
            dodaj
          </button>
        </Link>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nazwa</Table.HeaderCell>
              <Table.HeaderCell>Zdjęcie</Table.HeaderCell>
              <Table.HeaderCell>Akcje</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
        <Confirm
          open={this.state.deleteConfirmOpen}
          header="Potwierdzenie"
          cancelButton="Anuluj"
          confirmButton="Potwierdź"
          content="Czy potwierdzasz usunięcie kategorii?"
          onCancel={() => {
            this.setState({ toBeDeleted: null, deleteConfirmOpen: false });
          }}
          onConfirm={async () => await this.removeCategory()}
        />
      </>
    );
  }
}
