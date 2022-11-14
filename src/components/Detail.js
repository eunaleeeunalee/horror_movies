import {useEffect, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import "./style.css"
import "./style2.css"

function Detail(){
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    const {genres} = useParams()
    const [detail, setDetail] = useState([]);
    const [play, setPlay] = useState();
    const [more, setMore] = useState();
    const [adress, setAdress] = useState();

    const onClick = (event) => {
        if(document.getElementById('player').paused == true){
          setPlay(document.getElementById('player').play());
        }else{
          setPlay(document.getElementById('player').pause());
        }
      }

    const pageOpen = (event) => {
        setAdress(event.target.innerText);
        console.dir(event.target)
        console.log(event.target.innerText);
        console.log(detail.genres)
    }

    
    const onClickk = () => {
        const button = document.querySelector(".more")
        button.classList.toggle("more2")
    }

    // callback: https://github.com/hi-rachel/react-movie/blob/master/src/routes/Detail.js
    const getMovie = useCallback(async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [])

    return(
    <div>
        {loading ? <h1>Loading</h1>:
        <div>
        <img className="backimage" src={detail.background_image}/>
        <div style={{position: "absolute"}}>
        
        <div className="detail">
        <h2>{detail.title_long}</h2>
        <br/>
        <button value="more" onClick={onClickk} className="morebut">···</button>
        <div className="more">
            <button><a href="/">HOME</a> </button>
            <button value="play" onClick={onClick}>BGM</button>
        </div>
        <audio
          src="sb_horizons.mp3" 
          type="audio/mpeg"
          id="player"
      ></audio>
      <br/>
        <div className="info">
        <img src={detail.medium_cover_image} className="poster"/>
            <ul>
                <li>IMDb rating: {detail.rating}</li>
                <li>Year: {detail.year}</li>
                <li>Language: {detail.language}</li>
                <li>Runtime: {detail.runtime} min</li>
                <li>Genre:
                    <ul style={{marginLeft: "24vw"}}>
                    {detail.genres.map((g) => (
                    <li
                    key={g}
                    >
                    {g}
                    </li>))}
                    </ul>
                </li>
                <br/>
                <li>Overview: {detail.description_full}</li>
                <br/>
                <li>Trailor: <span className="yepo" onClick={pageOpen}>https://www.youtube.com/embed/{detail.yt_trailer_code}</span></li>
            </ul>
        <iframe
        src={adress}>
        </iframe>
        </div>
        
        </div>
        <p className="name">"Horror Movie Finder" made by eunalee</p>
    </div>
        
        
        </div>
    }
  </div>
  );
}
export default Detail;