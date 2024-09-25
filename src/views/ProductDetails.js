// src/views/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Crea este archivo CSS más adelante

const ProductDetails = () => {
    const { id } = useParams();
    // Aquí podrías cargar los detalles del producto usando el id

    return (
        <div className="product-details">
            <h2>Detalles del Producto {id}</h2>
            {/* Aquí va el contenido del detalle del producto */}
        </div>
    );
};

export default ProductDetails;
