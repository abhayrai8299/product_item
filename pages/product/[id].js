import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BASE_URL = "https://fakestoreapi.com";

const Demo = (props) => {
  console.log(props.response.description);

  return (
    <div className="card-container">
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 5,
          marginLeft: 60,
          backgroundColor: "#646FD4",
        }}
      >
        <Typography sx={{ flexGrow: 1, textAlign: "center" }} variant="h4">
          {props.response.category}
        </Typography>
        <CardMedia
          style={{
            height: "250px",
            marginLeft: "75px",
            paddingLeft: "56.25%",
            paddingTop: "25%", // 16:9,
            marginTop: "10px",
            width: "50px",
          }}
          image={props.response.image}
          alt="Product Item"
        />

        <CardContent>
          <Typography variant="h7" color="text.secondary">
            <b>Description:</b>
            <br></br>
            {props.response.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="h7">
            <b>Category:</b>
            <br></br>
            {props.response.category}
          </Typography>
        </CardActions>
        <CardActions>
          <Typography variant="h7">
            <b>Rating:</b>
            <br></br>
            {props.response.rating.rate}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};
export async function getServerSideProps(req, res) {
  console.log(req.query);
  let error;
  let response;
  try {
    response = await axios({
      method: "GET",
      url: `${BASE_URL}/products/${req.query.id}`,
    });
  } catch (e) {
    error = e;
  }

  return {
    props: {
      response: response?.data,
      error: error?.response ?? null,
    },
  };
}

export default Demo;
