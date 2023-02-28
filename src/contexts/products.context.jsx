import { useState, createContext, useEffect } from 'react';

import { addCollectionAndDocument } from '../utils/firebase.utils.js';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA);
  // }, []);

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
