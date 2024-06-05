import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return ( 
    <>
    <h1>Products</h1>
    <Link to='/' className='underline'>Go to Dashboard</Link> 
    </>);
}
 
export default Products;