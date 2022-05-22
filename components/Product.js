import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

const BASE_URL = "https://fakestoreapi.com";

const Products = () => {
  const router = useRouter();

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
            <img
              className="image"
              src={products.image}
              alt="#"
            />
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
