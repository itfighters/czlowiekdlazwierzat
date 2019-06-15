import React, { Component } from 'react';
import TilesCategories from '../../components/tiles_categories';

export default class Tiles extends Component {
  render(){
    return(
      <div>
        Zbiórki
        <TilesCategories/>
      </div>
    );
  }
}