import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesisLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import './category.styles.tsx';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesisLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </>
  );
};

export default Category;
