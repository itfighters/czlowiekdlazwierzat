import React from 'react';
import { getAuctions } from '../service/auctionsService';


export class List extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            auctions: []
        };
    }

    componentDidMount()
    {
        getAuctions()
            .then(response => response.json())
            .then(response => { this.setState({ auctions: response }) })
    }

    render()
    {
        debugger;
        return (
            <table class="ui celled padded table">
                <thead>
                    <tr>
                        <th>Tytuł</th>
                        <th>Opis</th>
                        <th>Od</th>
                        <th>Do</th>
                        <th>Stworzona</th>
                        <th>Ostatnia aktualizacja</th>
                    </tr></thead>
                <tbody>

                    {this.state.auctions.map(a =>
                    {
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
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}