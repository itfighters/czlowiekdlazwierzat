import React from "react";
import { getAuctions, deleteAuction } from "../../service/auctionsService";
import { Confirm } from "semantic-ui-react";
import { toast } from "react-toastify";

export class List extends React.Component {
  constructor() {
    super();
    this.state = {
      values: [],
      totalCount: 0,
      page: 1,
      pageSize: 5,
      isLoading: false,
      deleteConfirmOpen: false,
      toBeDeleted: null
    };
  }

  render() {
    return (
      <React.Fragment>
        <table className="ui celled padded table">
          <thead>
            <tr>
              <th className="three wide">Tytuł</th>
              <th className="six wide">Opis</th>
              <th className="two wide">Ważna od</th>
              <th className="two wide">Ważna do</th>
              <th className="two wide">Widoczne</th>
              <th className="three wide"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.values.map(a => {
              return (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td>{a.description}</td>
                  <td>{new Date(a.dateFrom).toLocaleDateString()}</td>
                  <td>{new Date(a.dateTo).toLocaleDateString()}</td>
                  <td>{a.publish ? "Tak" : "Nie"}</td>
                  <td>
                    <button
                      className="ui gray button"
                      onClick={() => {
                        this.props.history.push(`/admin/edit/${a.id}`);
                      }}
                    >
                      Edytuj
                    </button>
                    <button
                      className="ui red button"
                      onClick={this.deleteClicked.bind(this, a.id)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="5">
                <button
                  className="ui blue button"
                  onClick={() => {
                    this.props.history.push(`/admin/add`);
                  }}
                >
                  Dodaj
                </button>
                <div className="ui right floated pagination menu">
                  <a className="icon item" onClick={this.previousPage}>
                    <i className="left chevron icon"></i>
                  </a>
                  {this.pages()}
                  <a className="icon item" onClick={this.nextPage}>
                    <i className="right chevron icon"></i>
                  </a>
                </div>
                <div className="ui label total">
                  Całkowita ilość: {this.state.totalCount}
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
        <Confirm
          open={this.state.deleteConfirmOpen}
          header="Potwierdzenie"
          cancelButton="Anuluj"
          confirmButton="Potwierdź"
          content="Czy potwierdzasz usunięcie aukcji?"
          onCancel={() => {
            this.setState({ toBeDeleted: null, deleteConfirmOpen: false });
          }}
          onConfirm={this.deleteConfirm.bind(this)}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.loadAuctions();
  }

  loadAuctions() {
    this.setState({ isLoading: true });
    getAuctions(this.state.page, this.state.pageSize)
      .then(response => response.json())
      .then(response => {
        this.setState({ isLoading: false, ...response });
      });
  }

  pages() {
    var pages = [];
    var pagesCount = this.state.totalCount / this.state.pageSize + 1;
    for (var i = 1; i < pagesCount; i++) {
      pages.push(
        <a
          key={i}
          onClick={this.showPage.bind(this, i)}
          className={this.state.page == i ? "active item" : "item"}
        >
          {i}
        </a>
      );
    }
    return pages;
  }

  showPage = page => {
    if (page > 0 && page <= this.pages().length)
      this.setState({ page: page }, this.loadAuctions);
  };

  nextPage = () => this.showPage(this.state.page + 1);
  previousPage = () => this.showPage(this.state.page - 1);

  deleteClicked = id =>
    this.setState({
      toBeDeleted: id,
      deleteConfirmOpen: true
    });

  deleteConfirm() {
    this.setState({ toBeDeleted: null, deleteConfirmOpen: false });
    deleteAuction(this.state.toBeDeleted).then(response => {
      if (response.ok) toast.success("Usunięcie powiodło się");
      else toast.error("Usunięcie nie powiodło się");

      this.loadAuctions();
    });
  }
}
