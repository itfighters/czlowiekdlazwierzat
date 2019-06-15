import React, { Component } from 'react';

var categories = [
    { id: 2, value: "srodkiNaNaprawy", display: 'ŚRODKI NA NAPRAWY' },
    { id: 3, value: "potrzebniLudzie", display: 'POTRZEBNI LUDZIE' },
    { id: 4, value: "pomocRzeczowa", display: 'POMOC RZECZOWA' },
    { id: 5, value: "srodkiNaLeczenie", display: 'ŚRODKI NA LECZENIE' },
    { id: 6, value: "potrzebnyTransport", display: 'POTRZEBNY TRANSPORT' },
    { id: 7, value: "potrzebnyLek", display: 'POTRZEBNY LEK' },
    { id: 8, value: "zastepczyDom", display: 'PILNIE POTRZEBNY DOM/ZASTĘPCZY DOM' }
]

export default class SingUp extends Component {
    constructor(props) {
        super(props)
        this.state = { checked: [], acceptedMail: false, acceptedSms: false };
    }

    showInConsole = () => {
        console.log(this.state);
    }

    acceptedChangeMail = () => {
        this.setState({ acceptedMail: !this.state.acceptedMail })
    }

    acceptedChangeSms = () => {
        this.setState({ acceptedSms: !this.state.acceptedSms })
    }

    handleChange = (event) => {
        var categoryId = event.target.value;
        var checkedArray = this.state.checked;
        if (checkedArray.includes(categoryId)) {
            checkedArray = checkedArray.filter(id => id != categoryId);
        } else {
            checkedArray.push(categoryId);
        }

        this.setState({ checked: checkedArray })
    }

    render() {
        var categoriesList = categories.map(item => {
            return <div>
                <label><input type="checkbox" value={item.id} onChange={this.handleChange} />{item.display}</label>
            </div>
        });

        return (
            <article>
                <section>
                    <h1>ZAPISZ SIĘ NA POWIADOMIENIA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section>
                    <section>
                        <h1>KROK 1 </h1>
                        <p>Wybierz kategorie powiadomień jakie chcesz otrzymywać</p>
                    </section>
                    <form>
                        <label><input type="checkbox" />ZAZNACZ WSZYSTKO</label>
                        {categoriesList}
                    </form>
                </section>
                <section>
                    <section>
                        <h1>KROK 2</h1>
                        <p>wybierz w jaki sposób chcesz odbierać powiadomienia</p>
                    </section>
                    <form>
                        <h6>Podaj nam swój adres email, aby otrzymywać powiadomienia mailowe </h6>
                        <input type="email" placeholder="mail" required />
                        <label>
                            <input type="checkbox" defaultChecked={this.state.acceptedMail} onChange={this.acceptedChangeMail} required />Akceptuj regulamin</label><br />
                        <button onClick={this.showInConsole}>Wyślij</button>
                    </form>
                    <form>
                        <h6>Podaj nam swój numer telefonu, aby otrzymywać powiadomienia sms </h6>
                        <input type="number" placeholder="telefon" required />
                        <label><input type="checkbox" defaultChecked={this.state.acceptedSms} onChange={this.acceptedChangeSms} required />Akceptuj regulamin</label><br />
                        <button onClick={this.showInConsole}>Wyślij</button>
                    </form>
                    <section>
                        <h6>Zapisz się na push notification</h6>
                        <button>Zapisz się!</button>
                    </section>
                </section>
                <section>
                    <section>
                        <h1>Rezygnacja z powiadomień</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </section>
                    <form>
                        <input type="number" placeholder="telefon" required />
                        <button>Wyślij</button>
                    </form>
                    <form>
                        <input type="email" placeholder="mail" required />
                        <button>Wyślij</button>
                    </form>
                </section>
            </article>
        )
    }
}
