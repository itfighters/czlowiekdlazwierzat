import React, {Component} from 'react';
import CollectionTile from '../homeCollectionTile';
import { fetchTiles } from '../../services/tilesService';
import TilesListFetchError from '../tiles_list_error';
import Loader from '../loader';

class TilesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: [],
      error: false,
      isLoading: true,
    };
  }
  componentDidMount(){
    fetchTiles().then(response => {
      let tiles = response.values;
      this.setState({
        tiles: tiles,
        error: false,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({
        tiles: [],
        error: true,
        isLoading: false,
      });
    })
  }

  render() {
    const { tiles, error, isLoading } = this.state;
    if(isLoading){
      return <Loader />
    };

    if(error){
      return <TilesListFetchError />;
    }
    if(!tiles || tiles.length === 0){
      return <div>Brak zbiórek</div>;
    }

    let tilesList = tiles.map(tile => {
      return <CollectionTile tile={tile} key={tile.id} />
    });

    return (
      <div className="collections-list">
        {tilesList}
      </div>
    );
  }
}

export default TilesList;
