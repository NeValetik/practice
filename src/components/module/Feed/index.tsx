"use client"
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery, useReactiveVar } from "@apollo/client";

import calculateTheDateOfPosting from "@/utils/calculateTheDateOfPosting";
// import { Item } from "@/components/module/Feed/components/SourcesFilters"; 
import GET_CONTENTS, { QueryContentReturn } from "@/utils/queries";

import Card from "../Card";
import Baner from "../Banner";
import FeedDate from "./components/Date";
import FeedSources from "./components/Sources";
import { affiliationsVar } from "@/lib/client"


const INITIAL_STARTING_POINT:number = 0;
const NUMBER_OF_NEWS:number = 20;

const BANNER_APPEARANCE_RATE:number = 11;

// interface InitialFeed {
//     initialFeed: QueryContentReturn[]
// } 

const Feed = () => {
  const affiliations = useReactiveVar(affiliationsVar)

  const { data, fetchMore } = useQuery(GET_CONTENTS, {
    variables:{
      "from":INITIAL_STARTING_POINT,
      "offset":NUMBER_OF_NEWS,
      "affiliations":affiliations,
    },
    notifyOnNetworkStatusChange:true
  });
  const { ref, inView } = useInView({});
  const lastDisplayedDateRef = useRef<string|null>(null);
  
  useEffect(()=>{
    if(inView && data?.contents) {
      fetchMore(
        {
          variables: {"from" : data.contents.length },
          updateQuery(previousData, { fetchMoreResult }) {
            if (!fetchMoreResult) return previousData;
            return {
              ...previousData,
              contents: [...previousData.contents , ...fetchMoreResult.contents],
            };
          },
        })
    }
  },[inView])
  
  if (data)

  return(
    <div className="p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
      <div className="flex flex-col w-full gap-6 flex-grow" >
        {data.contents.map((article, index) => {
          const articleDate = calculateTheDateOfPosting(article.dates.posted);

          const showDateHeader = index === 0 || articleDate !== lastDisplayedDateRef.current;
          if (showDateHeader) {
            lastDisplayedDateRef.current = articleDate;
          }
                
          const isBanner = index % BANNER_APPEARANCE_RATE === 2;
                
          return (
            <div key={index}>
              {showDateHeader && 
              <div className="flex w-full justify-between mb-6">
                <FeedDate date={articleDate} index={index}/>
                {index === 0 &&
                  <FeedSources />
                }   
              </div>
              }
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

export default Feed;