import React, { Component } from 'react';

export default class TileCategory extends Component {
  onCategoryClick = () => {
    console.log('Category clicked');
  } 

  render(){
    const { category } = this.props;
    let imageSrc = category.img ? category.img : 'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534';

    return (
      <div onClick={this.onCategoryClick}>
        <img src={imageSrc} height="50" width="50" />
        <p>{category.name}</p>
      </div>
    )
  }
}