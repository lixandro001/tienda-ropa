// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    {/* Agrega más rutas según tus vistas */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
