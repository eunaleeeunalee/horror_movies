import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [how, setHow ] = useState("7.5");

  const onChange = (event) => {
    setHow(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${how}&sort_by=year&genre=Horror`).then(
    response => response.json()
    ).then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    }); 
  };
  
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year&genre=Horror`).then(
      response => response.json()
      ).then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      }); 
  },[]);
  
  return (
  <div>
    {loading ? <h1>Loading</h1>:
    <div>
      <h1 className="fade-in-box">Horror Movie Finder</h1>
      <form onSubmit={onSubmit}>
        <label>Minimum IMDb Rating:</label>
        <input 
          type="range"
          min="0.5" 
          max="8.6" 
          value={how} 
          onChange={onChange}
          oninput="num.value = this.value"/>
          <output id="num">{how}</output>
        <br/>
        <button>search</button>
      </form>
      {movies.map((movie => 
      <Movie 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image} 
        title={movie.title} 
        rating = {movie.rating}
        year = {movie.year}
      />   
      ))};
      <p>"Horror Movie Finder" made by eunalee</p>
    </div>
    }
  </div>
  );
}

export default Home;