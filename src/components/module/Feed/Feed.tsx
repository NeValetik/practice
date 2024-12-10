"use client"
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { fetchFeed, } from "@/utils/fetchFeed";
import calculateTheDateOfPosting from "@/utils/calculateTheDateOfPosting";
import { QueryContentReturn } from "@/utils/queries"

import Card from "../Card/Card";
import Baner from "../Advertisment/Baner";
import FeedDate from "./FeedDate";

const BANNER_APPEARANCE_RATE:number = 11;
const NUMBER_OF_ARTICLE_FETCHED:number = 20;

interface InitialFeed {
    initialFeed: QueryContentReturn[]
} 

export default function Feed({initialFeed}:InitialFeed){
    const [news,setNews] = useState<QueryContentReturn[]>(initialFeed);
    const [skipNews,setSkipNews] = useState(NUMBER_OF_ARTICLE_FETCHED);
    // const [lastDisplayedDate, setLastDisplayedDate] = useState(null);
    const { ref, inView } = useInView({});
    const lastDisplayedDateRef = useRef<string|null>(null);

    useEffect(() => {
        setNews(initialFeed);
    },[initialFeed])

    useEffect(() => {
        const loadArticles = async () => {
            const newNews = await fetchFeed({ from: skipNews, offset: NUMBER_OF_ARTICLE_FETCHED });
            setNews((prevNews) => [...prevNews, ...newNews]);
            setSkipNews(skipNews + NUMBER_OF_ARTICLE_FETCHED);
        };
        if(inView){
            loadArticles();
        }
    },[inView]);

    return(
        <div className="p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
            {/* <FeedDate date={"Сегодня"}/> */}
            
            <div className="flex flex-col w-full gap-6 flex-grow" >
            { news && news.map((article, index) => {
                const articleDate = calculateTheDateOfPosting(article.dates.posted);

                const showDateHeader = index === 0 || articleDate !== lastDisplayedDateRef.current;
                if (showDateHeader) {
                    lastDisplayedDateRef.current = articleDate;
                }
                
                const isBanner = index % BANNER_APPEARANCE_RATE === 2;
                
                return (
                    <div key={index}>
                            {showDateHeader && <FeedDate date={articleDate} index={index}/>}
                            <Card params={article} />
                            {isBanner && (
                                <div ref={ref}>
                                    <Baner className="h-16 w-10" isInFeed={true} />
                                </div>
                            )}
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}