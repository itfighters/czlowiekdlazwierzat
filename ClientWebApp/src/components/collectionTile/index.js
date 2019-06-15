import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CollectionTile extends Component {
  render() {
    let tile = this.props.tile;
    return (
      <div className="collect-tile">
        <Link to="/test">
          <div>
            <img
              src={tile.img}/>
            <h2 className="title">{tile.title}</h2>
            <h4 className="description">{tile.description}</h4>
          </div>
        </Link>
      </div>
    );
  }
}