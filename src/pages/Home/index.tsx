import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { products } from '../../services/products/productsSlice';
import { fetchByProducts } from '../../services/products/productsSlice';

import type { RootState } from '../../store';
import { Wrapper } from './styles';

const Home = () => {
  const {
    products: { value },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByProducts());
  }, []);

  return <Wrapper>Home</Wrapper>;
};

export default Home;
