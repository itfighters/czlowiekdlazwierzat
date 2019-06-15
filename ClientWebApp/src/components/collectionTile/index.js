import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CollectionTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to="/test">
        <div>
          <img 
            width="200" height="200"
            src="https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534"/>
          <h3>Tytuł</h3>
          <p>Szczegóły</p>
        </div>
      </Link>

    );
  }
}