import React, { useState, useEffect } from "react";
import Main from "../components/section/Main";
import VideoView from "../components/video/VideoView";
import { Link } from "react-router-dom";

const Home = () => {
  const [videosByCategory, setVideosByCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  const handleSearch = async (query, category) => {
    setLoading(true);
    setCurrentCategory(category);
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideosByCategory((prevVideos) => ({
        ...prevVideos,
        [category]: data.items,
      }));
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Define your default categories here
    const categories = [
      { query: "20대 코디 추천", category: "20대 코디 추천" },
      { query: "세일 중인 옷", category: "세일중인 옷" },
      { query: "유행 중인 옷", category: "유행 중인 옷" },
    ];

    // Perform initial search for each category
    categories.forEach(({ query, category }) => {
      handleSearch(query, category);
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Main title="유튜버 채널" description="유튜버 채널 페이지입니다.">
      <div className="home__title">
        <h2>WHAT TO WEAR</h2>
      </div>
      <div className="home__cont">
        <div className="home__search">
          {/* Here you can add more search boxes for different categories if needed */}
        </div>
        <section id="videoViewPage">
          {Object.keys(videosByCategory).map((category) => (
            <div key={category}>
              <div className="video__title">
                <h2>{category}</h2>
                <Link to={`/search/${category}`} className="more-link">
                  더보기
                </Link>
              </div>
              <div className="video__inner">
                <VideoView videos={videosByCategory[category]} />
              </div>
            </div>
          ))}
          {loading && <p>Loading...</p>}
        </section>
      </div>
    </Main>
  );
};

export default Home;
