import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TilesListDetails extends Component {
  render() {
    let tile = this.props.tile;
    let link = "/details/" + tile.id;
    let imageSrc = tile.image
      ? tile.image
      : "https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534";

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
