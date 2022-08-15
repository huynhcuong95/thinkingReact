import React from 'react';
import PropTypes from 'prop-types';
import ProductTable from '../ProductTable';
import { useState } from "react";
const ProductContainer = ({productData,check}) => {
    console.log(!check);
    return (
        <div>
            <ProductTable check={!check} productData={productData}/>
        </div>
    );
};

ProductContainer.propTypes = {
    
};

export default ProductContainer;