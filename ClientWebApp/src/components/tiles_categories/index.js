import React, { Component } from 'react';
import TileCategory from '../tile_category';
import { fetchCategories } from '../../services/categoryService';
import FetchCategoriesError from '../fetch_categories_error';
import Loader from '../loader';

class TilesCategories extends Component{
  constructor(props){
    super(props);
    this.state = {
      categoryData: undefined,
      error: false,
      isLoading: true
    };
  }

  componentDidMount(){
    fetchCategories().then(response => {
      let categories = response.values;
      this.setState({
        categoryData: categories,
        error: false,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({
        categoryData: [],
        error: true,
        isLoading: false,
      });
    })
  }

  render(){
    const { categoryData, error, isLoading } = this.state;
    const { setCategory } = this.props;

    if(isLoading){
      return <Loader />
    };

    if(error){
      return <FetchCategoriesError />;
    }

    if(!categoryData || categoryData.length === 0){
      return <div>Brak kategorii</div>;
    }
    
    let categories = categoryData.map(category => {
      return <TileCategory category={category} key={category.id} setCategory={setCategory} />;
    });
    
    return(
      <section>
        sortuj wg kategorii
        <br/>
        {categories}
      </section>
    );
  }
}

export default TilesCategories;