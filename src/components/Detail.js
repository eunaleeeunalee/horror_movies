import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams()
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, [])

    return(
    <div>
        <h1 className="fade-in-box">{detail.title}</h1>
        <div className="detail">

        </div>
    </div>
    )
}
export default Detail;