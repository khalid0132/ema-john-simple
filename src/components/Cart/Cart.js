import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product)=> total+ product.price,0)
    let total = 0;
    for (let i=0; i<cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

   const tax = (total / 10).toFixed(2);

   const grandTotal = (total + shipping + Number(tax)).toFixed(2)

   const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
   }
    return (
        <div className="carts-container">
            <h3>Order Summery</h3>
            <h5>Items Ordered: {cart.length}</h5>
                <div className="border-bottom: 2px">
                    <h6>Product Price: {formatNumber(total)}<small></small></h6>
                    <h6><small>Shipping: {shipping}</small></h6>
                    <h6><small>Tax+ VAT: {tax}</small></h6>
                </div>
            <h6>Total Price: {grandTotal}</h6>
        </div>
    );
};

export default Cart;