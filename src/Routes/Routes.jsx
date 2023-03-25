import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart';
import SingleCategory from '../components/Categories/SingleCategory';
import Home from '../components/Home/Home'
import SingleProduct from '../components/Products/SingleProduct';
import { ROUTES } from '../utils/routes';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>

    </Routes>
  );


export default AppRoutes