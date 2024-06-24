import React, { useState } from 'react';
import Main from '../components/section/Main';
import VideoView from '../components/video/VideoView';
import { Link } from 'react-router-dom';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');

    const handleSearch = async (query, category) => {
        setLoading(true);
        setCurrentCategory(category);
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY2}`);
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
                    <p>요즘 유행하는 옷을 소개시켜드릴게요.</p>
                    <button onClick={() => handleSearch('유행하는 옷', '유행하는 옷')} className="search-link">
                        바로가기
                    </button>
                </div>
                <div className="home__box">
                    <h2>할인하는 옷</h2>
                    <p>현재 세일 중인 옷 정보를 확인하세요.</p>
                    <button onClick={() => handleSearch('할인 중인 옷', '할인하는 옷')} className="search-link">
                        바로가기
                    </button>
                </div>
                <div className="home__box">
                    <h2>코디 추천</h2>
                    <p>당신에게 가장 어울리는 코디를 추천해드릴게요.</p>
                    <button onClick={() => handleSearch('코디 추천', '코디 추천')} className="search-link">
                        바로가기
                    </button>
                </div>
            </div>
            <section id='videoViewPage'>
                {currentCategory && (
                    <div className="video__title">
                        <h2>{currentCategory}</h2>
                        <Link to={`/search/${currentCategory}`} className="more-link">더보기</Link>
                    </div>
                )}
                <div className="video__inner">
                    <VideoView videos={videos} />
                </div>
                {loading && <p>Loading...</p>}
            </section>
        </Main>
    );
};

export default Home;
