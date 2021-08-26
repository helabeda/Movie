import React, { useState } from "react";
import "./App.css";
import MovieList from "./Component/MovieList";
import { MoviesData } from "./MoviesData";
import Slide from "./Component/Slide";
import Search from "./Component/Search";
import AddMovies from "./Component/AddMovies";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./Component/MovieDetails";


function App() {

  const [movie, setMovie] = useState(MoviesData);
  const handleAdd = (form) => {
    setMovie([...movie, form]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (FormControl) => {
    setSearch(FormControl);
  };
  const [rate, setRate] = useState(1);
  const handleRate = (Rating) => {
    setRate(Rating);
    console.log(Rating);
  };
  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleRate={handleRate} />
      <Router>
      <Link to ="/addmovie"><h1>Add Movie</h1></Link>
      <Slide />
        <Switch>
          <Route
          exact
            path="/" 
            render={(props) => (
              <MovieList
                {...props}
                movie={movie.filter(
                  (elt) =>
                    elt.name
                      .toLowerCase()
                      .includes(search.toLowerCase().trim()) &&
                    elt.rating >= rate
                )}  
              />
            )}
          />
          <Route 
            path="/moviedetails/:id" 
            render = {(props)=>(
            <MovieDetails {...props}
            movie = {movie}
            />
            )}
          />
          <Route 
            path="/addmovie" 
            render = {(props)=>(
            <AddMovies {...props}
            handleAdd={handleAdd}
            />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
