import React, { Component } from "react";
import TilesListDetails from "../tilesListDetails";
import { fetchTiles } from "../../services/auctionService";
import TilesListFetchError from "../tiles_list_error";
import Loader from "../loader";

class TilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    fetchTiles()
      .then(response => {
        let tiles = response.values;
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
    const { selectedCategoryId } = this.props;
    const { tiles, error, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <TilesListFetchError />;
    }

    let tilesList;

    if (selectedCategoryId) {
      tilesList = tiles
        .filter(x => {
          return x.categories.indexOf(selectedCategoryId) !== -1;
        })
        .map(tile => {
          return <TilesListDetails tile={tile} key={tile.id} />;
        });
    } else {
      tilesList = tiles.map(tile => {
        return <TilesListDetails tile={tile} key={tile.id} />;
      });
    }

    if (!tilesList || tilesList.length === 0) {
      return <div className="empty-content">Brak zbiórek danego typu</div>;
    }

    return <div className="collections-list">{tilesList}</div>;
  }
}

export default TilesList;
