import React, { Component } from 'react';
import TileCategory from '../tile_category';

export default class TilesCategories extends Component{
  render(){
    let categoryData = [
      {
        name: 'Środki na leczenie',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },
      {
        name: 'Środki na naprawy',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },
      {
        name: 'Potrzebny transport',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },
      {
        name: 'Potrzebni ludzie',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },
      {
        name: 'Potrzebny lek',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },
      {
        name: 'Pomoc rzeczowa',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      },  
      {
        name: 'Pilnie potrzebny dom/dom tymczasowy',
        img: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"
      }
    ];

    let categories = categoryData.map(category => {
      return <TileCategory category={category} />;
    })
    
    return(
      <section>
        sortuj wg kategorii
        <br/>
        {categories}
      </section>
    );
  }
}