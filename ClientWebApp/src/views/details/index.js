import React from "react";
import { GetDetails } from "../../services/auctionService";
import { GetAllCategories } from "../../services/categoryService";
import Loader from "../../components/loader";
import { PlaceholderImg, IMAGES_URL } from "../../config";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, loading: true, auction: {} };
  }

  componentDidMount() {
    var id = this.props.match.params.id;

    var getDetails = GetDetails(id);
    var getCategories = GetAllCategories();
    Promise.all([getDetails, getCategories])
      .then(response => {
        let details = response[0];
        let categories = response[1];
        details.categories = details.categories.map(category => {
          return categories.find(x => x.id === category);
        });

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
      if (!item || !item.id) {
        return null;
      }
      const image = item.image ? `${IMAGES_URL}/`+item.image : null;
    
      return (
        <div key={"category-" + item.id} className="button-tile-item">
          <img src={image || PlaceholderImg} alt="leczenie" />
          <span className="txt">
            <div>{item.name}</div>
          </span>
        </div>
      );
    });

    return (
      <article className="article-details">
        <section className="tile-details">
          <div className="wrap-tile">
            <div className="img">
              <img src={`${IMAGES_URL}/`+this.state.auction.currentImage} alt="zdj zbiórki" />
            </div>
            <div className="description">
              <h3>{this.state.auction.title}</h3>
              <p>{this.state.auction.description}</p>
            </div>
          </div>
          <div className="buttons-tile">{auctionCategories}</div>
        </section>
        {(this.state.auction.siepomagaLink ||
          this.state.auction.paypalLink ||
          this.state.auction.account ||
          this.state.auction.dotpayLink) && (
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
              {this.state.auction.account && (
                <div className="donate-info">
                  <span>
                    Fundacja Człowiek dla Zwierząt Bank Spółdzielczy w
                    Słomnikach <div>78 86140001 0010 0147 5971 0001</div>
                  </span>
                </div>
              )}
            </div>
          </section>
        )}
      </article>
    );
  }
}
