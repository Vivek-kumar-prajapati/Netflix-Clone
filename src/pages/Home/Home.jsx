import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/*CREATING HERO OR MAIN SECTION*/}
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />

        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />

          <p>
            Discovering his ties to a secret ancient order , A young man living
            in a modern Istabul embark on a quest to save the city from a
            immortal enemy.
          </p>

          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt=""></img>Play
            </button>
            <button className=" btn btn-dark">
              <img src={info_icon} alt=""></img>More Info
            </button>
          </div>

          <TitleCard title={""} category={"upcoming"} />
        </div>
      </div>
      {/*ENDING MAIN SECTION*/}

      {/*STARTING MORE CARD SECTION*/}

      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"now_playing"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"top_rated"} />
        <TitleCard title={"Top pics for you"} category={"upcoming"} />
      </div>

      {/*ENDING MORE CARD SECTION*/}

      <Footer />
    </div>
  );
};

export default Home;
