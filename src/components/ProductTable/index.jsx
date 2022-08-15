import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
const ProductTable = ({productData,check}) => {
    console.log(check);
    // console.log(productData);
    return (
        <div>
           <ul>
             {
                productData.map((e,i)=> (check && e.Price<20)?false:<li key={i}>{e.Name}{"  "}{e.Price}</li>
                )
             }
           </ul>
     </div>
    );
};

ProductTable.propTypes = {
    
};

export default ProductTable;