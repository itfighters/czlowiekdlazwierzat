import React, {Component} from 'react';
import CollectionTile from '../collectionTile';
import { fetchTiles } from '../../services/tilesService';
import TilesListFetchError from '../tiles_list_error';

class TilesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: [],
      error: false,
    };
  }
  componentDidMount(){
    fetchTiles().then(response => {
      let tiles = response.values;
      this.setState({
        tiles: tiles,
        error: false,
      });
    }).catch(() => {
      this.setState({
        tiles: [],
        error: true
      });
    })
  }

  render() {
    const { tiles, error } = this.state;
    if(error){
      return <TilesListFetchError />;
    }
    if(!tiles || tiles.length === 0){
      return <div>Brak zbiórek</div>;
    }

    let tilesList = tiles.map(tile => {
      return <CollectionTile tile={tile} />
    });

    return (
      <div className="collections-list">
        {tilesList}
      </div>
    );
  }
}

export default TilesList;
