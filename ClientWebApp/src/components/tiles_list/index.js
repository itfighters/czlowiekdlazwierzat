import React, {Component} from 'react';
import CollectionTile from '../collectionTile';
import { fetchHomeTiles } from '../../services/tilesService';
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
    fetchHomeTiles().then(response => {
      this.setState({
        tiles: response,
        error: true,
      });
    }).catch(err => {
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
      return <div/>;
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
