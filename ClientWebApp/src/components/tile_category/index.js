import React, { Component } from "react";
import { PlaceholderImg, IMAGES_URL } from "../../config";

export default class TileCategory extends Component {
  onCategoryClick = category => {
    const { setCategory } = this.props;
    setCategory(category);
  };

  render() {
    const { category, isSelected } = this.props;
    let imageSrc = category.image ? `${IMAGES_URL}/`+category.image : PlaceholderImg;

    return (
      <div
        className="tile-category"
        onClick={() => this.onCategoryClick(category)}
      >
        <div className="img-row">
          <img src={imageSrc} alt="potrzeba-img" height="50" width="50" />
        </div>

        <p className={isSelected ? "category-selected" : ""}>{category.name}</p>
        <hr></hr>
      </div>
    );
  }
}
