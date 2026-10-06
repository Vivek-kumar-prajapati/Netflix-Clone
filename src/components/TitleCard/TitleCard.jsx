import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./TitleCard.css";
const TitleCard = ({ title, category }) => {
  const [movieData, setMovieData] = useState([]);
  const cardsref = useRef();

  {
    /* THIS FUNCTION IS IMP USED FOR SCROLL BY BOTH LAPTOP LEFT SLIDE/ RIGHT SLIDE OR MOUSE WHEEL */
  }

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
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));
  }, [category]);

  useEffect(() => {
    const cards = cardsref.current;
    function handelWheel(event) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        cards.scrollLeft += event.deltaY;
      }
    }
    cards.addEventListener("wheel", handelWheel, { passive: false });

    return () => {
      cards.removeEventListener("wheel", handelWheel);
    };
  }, []);
  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {movieData.map((card, index) => {
          return (
            <Link  to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
