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
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => {
                console.log(data);
                setVideoDetail(data.items[0])
            })
    }, [videoId]);


    return (
        <Main
            title="유튜버 채널"
            description="유튜버 채널 페이지입니다."
        > <section id='videoViewPage'>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100vh'
                                style={{ poasition: 'absolute', top: 0, left: 0 }}
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
        </Main>
    )
}

export default Home