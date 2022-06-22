
import React, { createContext, useState } from "react";
import { useContext } from "react";
import Header from "./Header";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const {visible, cartItems, onAdd, onRemove,itemsPrice,taxPrice,shippingPrice,totalPrice}=useContext(CartContext);


  if(!visible) return null;

  
  return (
    <div>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>{" "}
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>

          <div>
            {item.qty} x Rs.{item.price}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div>Items Price</div>
            <div>Rs.{itemsPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>Tax Price</div>
            <div>Rs.{taxPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>Shipping Price</div>
            <div>${shippingPrice.toFixed(2)}</div>
          </div>

          <div>
            <div>
              <strong>Total Price</strong>
            </div>
            <div>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div>
            <button onClick={() => alert("Implement Checkout!")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
    )
  };

export default Cart;
