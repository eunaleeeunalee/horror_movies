import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "./style.css"

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [how, setHow ] = useState("7.5");
  const [play, setPlay] = useState();
  const [more, setMore] = useState();

  const onChange = (event) => {
    setHow(event.target.value);
  };

  const onClick = (event) => {
    if(document.getElementById('player').paused == true){
      setPlay(document.getElementById('player').play());
    }else{
      setPlay(document.getElementById('player').pause());
    }
  }

  const onClickk = () => {
    const button = document.querySelector(".more")
    button.classList.toggle("more2")
}


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
      <br/>
      <form onSubmit={onSubmit}>
        <div className="how">
        The horror movies above
        <input type="number" min="0.0" max="8.5" step="0.5" value={how} onChange={onChange}/> 
        IMDb Rating<br/>
        </div>
        <button value="more" onClick={onClickk} className="morebut">···</button><br/>
        <div className="more">
        <span className="moretext">
          Type between 0 to 8.5 and press 'search'<br/>
          or press 'bgm' for the music
        </span><br/><br/>
          <button>SEARCH</button>
          <button value="play" onClick={onClick}>BGM</button>
        </div>
      </form>
      
      <br/>

      <audio
          src="sb_horizons.mp3" 
          type="audio/mpeg"
          id="player"
      ></audio>
      
      
      {movies.map((movie => 
      <Movie 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image} 
        title={movie.title} 
        rating = {movie.rating}
        year = {movie.year}
        // genres = {movie.genres}
      />   
      ))};
      <p className="name">"Horror Movie Finder" made by eunalee</p>
    </div>
    }
  </div>
  );
}

export default Home;