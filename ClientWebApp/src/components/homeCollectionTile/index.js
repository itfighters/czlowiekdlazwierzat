import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PlaceholderImg, IMAGES_URL } from "../../config";

export default class CollectionTile extends Component {
  render() {
    let tile = this.props.tile;
    let link = "/potrzeba/" + tile.id;
    let imageSrc = tile.currentImage ? `${IMAGES_URL}/`+tile.currentImage : PlaceholderImg;

    return (
      <div className="collect-tile">
        <Link to={link}>
          <div>
            <img src={imageSrc} alt="obrazek zbiórki" />
            <h2 className="title">{tile.title}</h2>
            <p className="description">{tile.shortDescription || tile.description.substring(0,300)+'...'}</p>
          </div>
        </Link>
      </div>
    );
  }
}
