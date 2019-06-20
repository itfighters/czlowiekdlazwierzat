import React from "react";
import { GetDetails } from "../../services/auctionService";
import Loader from "../../components/loader";
export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, loading: true, auction: {} };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    GetDetails(id)
      .then(details => {
        this.setState({ auction: details, loading: false });
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return (
        <div>
          Niestety nie udało się wyświetlić strony. Spróbuj ponownie później.
        </div>
      );
    }
    var auctionCategories = this.state.auction.categories.map(item => {
      return (
        <div key={"category-" + item} className="button-tile-item">
          <img src="/assets/leczenie.svg" alt="leczenie" />
          <span className="txt">
            <div>{item}</div>
          </span>
        </div>
      );
    });

    return (
      <article className="article-details">
        <section className="tile-details">
          <div className="wrap-tile">
            <div className="img">
              <img
                src="https://i.ytimg.com/vi/OdXSnjVCuzM/maxresdefault.jpg"
                alt="zdj pieska"
              />
              {/* {this.state.auction.image} */}
            </div>
            <div className="description">
              <h2>{this.state.auction.title}</h2>
              <span>{this.state.auction.description}</span>
            </div>
          </div>
          <div className="buttons-tile">{auctionCategories}</div>
        </section>
        <section>
          <div className="donate-title">
            <h1>POMÓŻ</h1>
          </div>
          <div className="donate">
            <div className="donate-buttons">
              {this.state.auction.siepomagaLink && (
                <a
                  href={this.state.auction.siepomagaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="btn btn-rounded siepomaga" />
                </a>
              )}
              {this.state.auction.dotpayLink && (
                <a
                  href={this.state.auction.dotpayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="btn btn-rounded dotpay" />
                </a>
              )}
              {this.state.auction.paypalLink && (
                <a
                  href={this.state.auction.paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="btn btn-rounded paypal" />
                </a>
              )}
            </div>
            <div className="donate-info">
              <span>
                Fundacja Człowiek dla Zwierząt Bank Spółdzielczy w Słomnikach{" "}
                <div>78 86140001 0010 0147 5971 0001</div>
              </span>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
