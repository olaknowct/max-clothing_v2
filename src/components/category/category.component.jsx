import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className='category-title'>{category.toUpperCase()}</h2>
          <div className='category-container'>
            {products &&
              products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Category;
