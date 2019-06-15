import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CollectionTile extends Component {
  render() {
    let tile = this.props.tile;
    return (
      <Link to="/test">
        <div>
          <img 
            width="200" height="200"
            src={tile.img}/>
          <h3>{tile.title}</h3>
          <br/>
          <p>{tile.description}</p>
          <br/>
        </div>
      </Link>

    );
  }
}