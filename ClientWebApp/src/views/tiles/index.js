import React, { Component } from "react";
import TilesCategories from "../../components/tiles_categories";
import TilesList from "../../components/tilesList";

export default class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryId: undefined
    };
  }
  setCategory = category => {
    this.setState({
      selectedCategoryId: category.id
    });
  };

  render() {
    const { selectedCategoryId } = this.state;
    return (
      <div>
        <TilesCategories
          setCategory={this.setCategory}
          selectedCategoryId={selectedCategoryId}
        />
        <TilesList selectedCategoryId={selectedCategoryId} />
      </div>
    );
  }
}
