import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { CiChat1, CiRead, CiStar } from 'react-icons/ci';

const Home = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data);
                setVideoDetail(data.items[0])
            })
    }, [videoId]);


    return (
        <Main
            title="유튜버 채널"
            description="유튜버 채널 페이지입니다."
        >
            <section id='videoViewPage'>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100vh'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='title'>{videoDetail.snippet.title}</h2>
                            <div className='channel'>
                                <div>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`} className='channelTitle'>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div>
                                    <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                        </div>
                        <div className="video__desc">
                            {videoDetail.snippet.description}
                        </div>
                    </div>
                )}
            </section>
            <div className="home__title">
                <h2>WHAT TO WEAR</h2>
            </div>
            <div className="home__search">
                 <div className="home__box">
                    <h2>유행하는 옷</h2>
                    <p>요즘 유행하는 옷을<br/> 소개시켜드릴게요.</p>
                 <Link to={`/search/요즘 유행하는 옷`} className="search-link">
                        바로가기
                    </Link>
                 </div>
                 <div className="home__box">
                 <h2>할인하는 옷</h2>
                    <p>현재 세일 중인 옷<br/> 정보를 확인하세요.</p>
                    <Link to={`/search/할인 중인 옷`} className="search-link">
                    바로가기
                    </Link>
                    </div>
                    <div className="home__box">
                    <h2>코디 추천</h2>
                    <p>당신에게 가장 어울리는<br/> 코디를 추천해드릴게요.</p>
                    <Link to={`/search/코디 추천`} className="search-link">
                    바로가기
                    </Link>
                    </div>
                </div>
        </Main>
    )
}

export default Home;
