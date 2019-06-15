import React, {Component} from 'react';
import tiles from '../../services/data';
import CollectionTile from '../collectionTile';

class TilesList extends Component {
  render() {
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
