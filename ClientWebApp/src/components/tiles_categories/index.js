import React, { Component } from "react";
import TileCategory from "../tile_category";
import { GetAllCategories } from "../../services/categoryService";
import FetchCategoriesError from "../fetch_categories_error";
import Loader from "../loader";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        let categories = [
          {
            name: "WSZYSTKIE KATEGORIE"
          },
          ...response
        ];
        this.setState({
          categoryData: categories,
          error: false,
          isLoading: false
        });
        this.props.setCategory(categories[0]);
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

    let categoriesToShow = categoryData.length > 10 ? 10 : categoryData.length;

    var settings = {
      dots: categoryData.length > categoriesToShow ? true : false,
      infinite: true,
      speed: 500,
      slidesToShow: categoriesToShow,
      pauseOnHover: true,
      centerPadding: "200px",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 3000,
            pauseOnHover: true
          }
        }
      ]
    };

    let categories = categoryData.map(category => {
      return (
        <TileCategory
          category={category}
          key={"cat-" + category.id}
          setCategory={setCategory}
          isSelected={category.id === selectedCategoryId}
        />
      );
    });

    return (
      <section className="title-category-list">
        <Slider {...settings}>{categories}</Slider>
      </section>
    );
  }
}

export default TilesCategories;
