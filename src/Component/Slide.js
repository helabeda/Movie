import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.decorsed.com/file/decorsed/thewolfofwallstreet/the-wolf-of-wall-street.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="slidetitle"> The Wolf of Wall Street </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freakingeek.com/wp-content/uploads/2020/03/LaPlateforme-Banniere-800x445.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="slidetitle"> The Plateform </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rogierfsc.files.wordpress.com/2014/05/ce-que-le-jour-doit-a-la-nuit-wallpaper_412469_47608.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="slidetitle"> Ce que le jour doit à la nuit </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
