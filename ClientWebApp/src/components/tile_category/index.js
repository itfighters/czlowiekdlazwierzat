import React, { Component } from 'react';

export default class TileCategory extends Component {
  onCategoryClick = () => {
    console.log('Category clicked');
  } 

  render(){
    const { category } = this.props;

    return (
      <div onClick={this.onCategoryClick}>
        <img src={category.img} height="50" width="50" />
        <p>{category.name}</p>
      </div>
    )
  }
}