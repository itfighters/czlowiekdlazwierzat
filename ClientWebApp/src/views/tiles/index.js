import React, { Component } from 'react';
import TilesCategories from '../../components/tiles_categories';
import TilesList from '../../components/tilesList';

export default class Tiles extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: undefined
    };
  }
  setCategory = (category) =>{
    this.setState({
      selectedCategory: category
    });
  }

  render(){
    const {selectedCategory} = this.state;
    return(
      <div>
        Zbiórki
        <TilesCategories setCategory={this.setCategory}/>
        <TilesList selectedCategory={selectedCategory}/>
      </div>
    );
  }
}