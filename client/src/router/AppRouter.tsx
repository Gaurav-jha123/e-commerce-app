import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BookList from '../pages/BookList';
import BookDetails from '../pages/BookDetails';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import MyordersPage from '../pages/MyordersPage';


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header/>
            <Routes>
            <Route path="/" element={<BookList/>} />
            <Route path='/book/:id' element= {<BookDetails/>}/>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/my-orders" element={<MyordersPage />} />


            </Routes>
        </Router>
    )
}

export default AppRouter;