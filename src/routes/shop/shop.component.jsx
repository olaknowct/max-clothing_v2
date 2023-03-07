import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category.component';
import { CategoriesProvider } from '../../contexts/categories.context';
import { setCategoriesMap } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
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
