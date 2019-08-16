import React, { Component } from "react";
import CollectionTile from "../homeCollectionTile";
import { fetchFeaturedTiles } from "../../services/auctionService";
import TilesListFetchError from "../tiles_list_error";
import Loader from "../loader";

class HomeTilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    
    let featuredCount = this.props.featuredCount || 6;

    fetchFeaturedTiles()
      .then(response => {
        let tiles = response
          .sort(function(a, b) {
            return new Date(a.dateTo) - new Date(b.dateTo);
          })
          .slice(0, featuredCount);
        this.setState({
          tiles: tiles,
          error: false,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          tiles: [],
          error: true,
          isLoading: false
        });
      });
  }

  render() {
    const { tiles, error, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <TilesListFetchError />;
    }
    if (!tiles || tiles.length === 0) {
      return <div>Brak zbiórek</div>;
    }

    let tilesList = tiles.map(tile => {
      return <CollectionTile tile={tile} key={tile.id} />;
    });

    return <div className="collections-list">{tilesList}</div>;
  }
}

export default HomeTilesList;
