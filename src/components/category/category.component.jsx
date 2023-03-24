import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import './category.styles.scss';

const GET_CATEGORY = gql`
  query ($title: string!) {
    getCollectionByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();

  const { loading, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category,
    },
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;

      setProducts(items);
    }
  }, [category, data]);

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
