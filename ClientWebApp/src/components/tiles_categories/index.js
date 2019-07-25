import React, { Component } from "react";
import TileCategory from "../tile_category";
import { GetAllCategories } from "../../services/categoryService";
import FetchCategoriesError from "../fetch_categories_error";
import Loader from "../loader";

class TilesCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: undefined,
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    GetAllCategories()
      .then(response => {
        let categories = response;
        this.setState({
          categoryData: categories,
          error: false,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          categoryData: [],
          error: true,
          isLoading: false
        });
      });
  }

  render() {
    const { categoryData, error, isLoading } = this.state;
    const { setCategory, selectedCategoryId } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <FetchCategoriesError />;
    }

    if (!categoryData || categoryData.length === 0) {
      return <div>Brak kategorii</div>;
    }

    let categories = categoryData.map(category => {
      return (
        <TileCategory
          category={category}
          key={category.id}
          setCategory={setCategory}
          isSelected={category.id === selectedCategoryId}
        />
      );
    });

    return (
      <section>
        <p className="categories-header">Wybierz kategorie</p>
        <div className='inline-collection'>
          {categories}
        </div>
      </section>
    );
  }
}

export default TilesCategories;
