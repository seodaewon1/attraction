import React, { useState } from 'react';
import Main from '../components/section/Main';
import { Link } from 'react-router-dom';
import VideoView from '../components/video/VideoView';
import { CiChat1, CiRead, CiStar } from 'react-icons/ci';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        setLoading(true);
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
            const data = await response.json();
            setVideos(data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Main
            title="유튜버 채널"
            description="유튜버 채널 페이지입니다."
        >
           

            <div className="home__title">
                <h2>WHAT TO WEAR</h2>
            </div>
            <div className="home__search">
                <div className="home__box">
                    <h2>유행하는 옷</h2>
                    <p>요즘 유행하는 옷을<br /> 소개시켜드릴게요.</p>
                    <button onClick={() => handleSearch('유행하는 옷')} className="search-link">
                        바로가기
                    </button>
                </div>
                <div className="home__box">
                    <h2>할인하는 옷</h2>
                    <p>현재 세일 중인 옷<br /> 정보를 확인하세요.</p>
                    <button onClick={() => handleSearch('할인 중인 옷')} className="search-link">
                        바로가기
                    </button>
                </div>
                <div className="home__box">
                    <h2>코디 추천</h2>
                    <p>당신에게 가장 어울리는<br /> 코디를 추천해드릴게요.</p>
                    <button onClick={() => handleSearch('코디 추천')} className="search-link">
                        바로가기
                    </button>
                </div>
            </div>
            <section id='videoViewPage'>
                <div className="video__inner">
                    <VideoView videos={videos} />
                </div>
                {loading && <p>Loading...</p>}
            </section>
        </Main>
    );
};

export default Home;
