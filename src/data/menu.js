import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillGift } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";




export const headerMenus = [
    {
        title: "봄 옷 추천",
        icon: <AiFillGithub />,
        src: "/search/봄%20옷%20추천"
    }, {
        title: "여름 옷 추천",
        icon: <AiFillHome />,
        src: "/search/여름%20옷%20추천"
    },
    {
        title: "가을 옷 추천",
        icon: <AiFillGift />,
        src: "/search/가을%20옷%20추천"
    },
    {
        title: "겨울 옷 추천",
        icon: <AiFillGift />,
        src: "/search/겨울%20옷%20추천"
    },
    {
        title: "여행 옷 추천",
        icon: <AiFillHeart />,
        src: "/search/여행%20옷%20추천"
    },
    {
        title: "소개팅 옷 추천",
        icon: <AiFillThunderbolt />,
        src: "/search/소개팅%20옷%20추천"
    },
    {
        title: "데일리 옷 추천",
        icon: <AiFillFire />,
        src: "/search/데일리%20옷%20추천"
    }, {
        title: "비오는 날 옷 추천",
        icon: <AiFillSound />,
        src: "/search/비오는 날%20옷%20추천"
    },

]

export const searchKeyword = [
    {
        title: "반팔",
        src: "/search/반팔",
    },
    {
        title: "긴팔",
        src: "/search/긴팔",
    },
    {
        title: "신발",
        src: "/search/신발",
    },
    {
        title: "바지",
        src: "/search/바지",
    },
    {
        title: "아우터",
        src: "/search/아우터",
    },
    {
        title: "시계",
        src: "/search/시계",
    },
    {
        title: "모자",
        src: "/search/모자",
    },
    {
        title: "액세서리",
        src: "/search/액세서리",
    },
    {
        title: "양말",
        src: "/search/양말",
    },
    {
        title: "가방",
        src: "/search/가방",
    },
    {
        title: "안경",
        src: "/search/안경",
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/seodaewon1/youtube-api",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "/",
        icon: <AiFillCodepenSquare />
    },
    {
        title: "instagram",
        url: "/",
        icon: <AiFillInstagram />
    },
]