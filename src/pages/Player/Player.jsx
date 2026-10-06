import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
const Player = () => {

  const {id} =useParams();
  const navigate = useNavigate()
  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type:""
  });

  useEffect(() => {
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTEwZjM5ZTgxYzQ4YTgzYmE1NWE5OTdlNmQ0MDkwOSIsIm5iZiI6MTc4NzI0NTE0MC42MDcsInN1YiI6IjZhODczMjU0NGZiYTk1YWVkMTQyOGY5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1Szzua19qOs8C4Dh20T72eT93yzUR9XSrsSmnMjj3g",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) =>
        setapiData(res.results[0]),
      )
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="player">
      <img src={back_arrow_icon} alt=""  onClick={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="traler"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        <p>{apiData.published_at}</p>
      </div>
    </div>
  );
};

export default Player;
