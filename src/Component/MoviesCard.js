import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Stars from "./Stars";
import { Link } from 'react-router-dom';

const MoviesCard = ({ film }) => {
  let { image, rating, name, date, description } = film;

  return (
    <div>
    <Link to ={`/moviedetails/${film.id}`}>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <div className="overview">
            <Card.Text>{description}</Card.Text>
          </div>
          <hr />
          <Card.Text ><Stars rating={rating}/></Card.Text>
        </Card.Body>
      </Card>
    </Link>
    </div>
  );
};

export default MoviesCard;
