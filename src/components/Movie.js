import Proptypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, rating, year}) {
    return (
    <div className="each">
      
          <Link to={`/movie/${id}`} className="title">
            <img src={coverImg} alt={title}/><br/>
            <p>{title}</p>
          </Link>
          <p>IMDb rating: {rating}</p>
          <p>Year: {year}</p>
          <p>
          {/* {genres.map((g,index) => <span key={index}>{g} </span>)} */}
          </p>
      </div>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
    // summary: Proptypes.string.isRequired,
    // genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie; 