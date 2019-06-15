import React, { Component } from 'react';
import TilesCategories from '../../components/tiles_categories';
import TilesList from '../../components/tilesList';

export default class Tiles extends Component {
  render(){
    return(
      <div>
        Zbiórki
        <TilesCategories/>
        <TilesList />
      </div>
    );
  }
}