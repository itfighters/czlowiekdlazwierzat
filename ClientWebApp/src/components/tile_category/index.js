import React, { Component } from "react";
import { PlaceholderImg, IMAGES_URL } from "../../config";

const CATEGORY_IMG_PLACEHOLDER = `/assets/all-categories.png`;

export default class TileCategory extends Component {
  onCategoryClick = category => {
    const { setCategory } = this.props;
    setCategory(category);
  };

  render() {
    const { category, isSelected } = this.props;
    let imageSrc = category.image ? `${IMAGES_URL}/`+category.image : CATEGORY_IMG_PLACEHOLDER;
    return (
      <div
        className="tile-category"
        onClick={() => this.onCategoryClick(category)}
      >
        <div className="img-row">
          <img src={imageSrc} alt="potrzeba-img"  />
        </div>

        <p className={isSelected ? "category-selected" : ""}>{category.name}</p>
        <hr></hr>
      </div>
    );
  }
}
