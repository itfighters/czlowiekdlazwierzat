import React from 'react';
import { getAuctions } from '../../service/auctionsService';


export class List extends React.Component {
    constructor() {
        super();
        this.state = {
            values: [],
            totalCount: 0,
            page: 1,
            pageSize: 5,
            isLoading: false
        };
    }

    componentDidMount() {
        this.loadAuctions();
    }

    loadAuctions() {
        this.setState({ isLoading: true });
        getAuctions(this.state.page, this.state.pageSize)
            .then(response => response.json())
            .then(response => { this.setState({ isLoading: false, ...response }) });
    }

    pages() {
        var pages = [];
        var pagesCount = this.state.totalCount / this.state.pageSize + 1;
        for (var i = 1; i < pagesCount; i++) {
            pages.push
                (
                    <a
                        key={i}
                        onClick={this.showPage.bind(this, i)}
                        className={this.state.page == i ? 'active item' : 'item'}>
                        {i}
                    </a>
                );
        }
        return pages;
    }

    showPage = (page) => {
        if (page > 0 && page <= this.pages().length)
            this.setState({ page: page }, this.loadAuctions);
    }

    nextPage = () => this.showPage(this.state.page + 1);
    previousPage = () => this.showPage(this.state.page - 1);

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
                            <th className="three wide"></th>
                        </tr></thead>
                    <tbody>

                        {this.state.values.map(a => {
                            return <tr key={a.id}>
                                <td>
                                    {a.title}
                                </td>
                                <td>
                                    {a.description}
                                </td>
                                <td>
                                    {a.dateFrom}
                                </td>
                                <td>
                                    {a.dateTo}
                                </td>
                                <td>
                                    <button class="ui gray button"
                                        onClick={() => { this.props.history.push(`/admin/edit/${a.id}`) }}>
                                        Edytuj
                                    </button>
                                    <button class="ui red button">
                                        Usuń
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5">
                            <button class="ui blue button"
                                        onClick={() => { this.props.history.push(`/admin/add`) }}>
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
                        </tr></tfoot>
                </table>
            </React.Fragment>
        )
    }
}