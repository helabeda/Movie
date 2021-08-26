import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const { id } = useParams();
  const [mov, setMov] = useState({});
  useEffect(() => {
    setMov(movie.find((elmt) => elmt.id === Number(id)));
  }, []);
  return (
    <div>
      <h1 className="video">More Information</h1>
      {mov.description}
      <iframe
        width="560"
        height="315"
        src={mov.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link to={"/"}><button className="local">←</button></Link>
    </div>
  );
};

export default MovieDetails;
