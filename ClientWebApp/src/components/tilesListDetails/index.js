import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PlaceholderImg, IMAGES_URL } from "../../config";

export default class TilesListDetails extends Component {
  render() {
    let tile = this.props.tile;
    let link = "/details/" + tile.id;
    let imageSrc = tile.currentImage ? `${IMAGES_URL}/`+tile.currentImage : PlaceholderImg;
    return (
      <Link to={link} className="collect-tile">
        <div>
          <img src={imageSrc} alt="zdjecie-potrzeby" />
          <h2 className="title">{tile.title}</h2>
          <h4 className="description">{tile.description}</h4>
        </div>
      </Link>
    );
  }
}
