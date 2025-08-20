import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="herotitle" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enenmy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={PlayIcon} alt="playicon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={InfoIcon} alt="infoicon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-card">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
