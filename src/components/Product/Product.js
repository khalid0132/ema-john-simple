import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props);
    const {name, img, price, seller, stock} = props.product;
    return (
        <div className="product-area">
            <div className="product-photo">
                <img src={img} alt="" />
            </div>
            <div className="product-history">
                <p className= "product-name">{name} </p>
                <p><small>by: {seller}</small></p>
                <p>$ <strong>{price}</strong></p>
                <p>Only {stock} left in stock .order soon</p>
                <button 
                    onClick={()=>props.handleAddProduct(props.product)} 
                    className="button-style"
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;