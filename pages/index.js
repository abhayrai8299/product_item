
import React, { useEffect,useContext } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { CartContext,CartProvider } from "../context/CartContext";


const BASE_URL = "https://fakestoreapi.com";


const Products = (props) => {
  const router = useRouter();
  const { onAdd,onRemove,cartItems,cartlength,RemoveToCart} = useContext(CartContext);
  console.log(onAdd,onRemove);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


 
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: `${BASE_URL}/products`,
        });
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function showDetailsHandler(productId) {
    router.push(`/product/${productId}`);
  }

  return (
    <div>
        <div>
        <Header countCartItems={cartlength} />
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
      </div>
    
      <div className="products-container">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}
        {data.map((products) => (
          <div key={products.id} className="card">
            <div>
              <img className="image" src={products.image} alt="#" />
            </div>
            <div className="card-description">
              <div>
                <h6>{products.title}</h6>
                <h6>{`Price: ${products.price}`}</h6>
                <h6>{`Category: ${products.category}`}</h6>
                <Button
                  variant="contained"
                  onClick={() => showDetailsHandler(products.id)}
                >
                  Details
                </Button>
                 {cartItems.some((p)=>p.id===products.id)?(
                  <Button variant="contained" color="warning" onClick={() => RemoveToCart(products)}>
                  Remove To Cart
                </Button>
                 ):(<Button variant="contained" onClick={() => onAdd(products)}>
                 Add To Cart
               </Button>)}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Products;
