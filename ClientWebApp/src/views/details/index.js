import React from 'react';
import { GetDetails } from "../../services/auctionService";
export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: false, loading: true, auction: {} }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        GetDetails(id).then(details => {
            this.setState({ auction: details, loading: false })
            console.log(details);
        }).catch(err => {
            this.setState({
                error: true,
                loading: false
            });
        })
    }

    render() {

        if (this.state.loading) { return '...'; }
        if (this.state.error) {
            return <div>Niestety nie udało się wyświetlić strony. Spróbuj ponownie później.</div>
        }
        var auctionCategories = this.state.auction.categories.map(item => {
            return (
                <div className="button-tile-item">
                    <img src="/assets/leczenie.svg" alt="leczenie" />
                    <p className="txt"><div>{item}</div></p>
                </div>
            )
        });


        return (
            <article className="article-details">
                <section className="tile-details">
                    <div className="wrap-tile">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/OdXSnjVCuzM/maxresdefault.jpg" alt="zdj pieska" />
                            {/* {this.state.auction.image} */}
                        </div>
                        <div className="description">
                            <h2>{this.state.auction.title}</h2>
                            <p>{this.state.auction.description}</p>
                        </div>
                    </div>
                    <div className="buttons-tile">
                       {auctionCategories}
                    </div>
                </section>
                <section>
                    <div className="donate-title">
                        <h1>POMÓŻ</h1>
                    </div>
                    <div className="donate">
                        <div className="donate-buttons">
                            {this.state.auction.siepomagaLink && <a href={this.state.auction.siepomagaLink} className="btn btn-rounded siepomaga" target="_blank"></a>}
                            {this.state.auction.dotpayLink && <a href={this.state.auction.dotpayLink} className="btn btn-rounded dotpay" target="_blank"></a>}
                            {this.state.auction.paypalLink && <a href={this.state.auction.paypalLink} className="btn btn-rounded paypal" target="_blank"></a>}
                        </div>
                        <div className="donate-info">
                            <p>
                                Fundacja Człowiek dla Zwierząt Bank Spółdzielczy w Słomnikach <div>78 86140001 0010 0147 5971 0001</div>
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}