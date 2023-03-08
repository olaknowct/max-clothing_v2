import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category.component';
import { CategoriesProvider } from '../../contexts/categories.context';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
