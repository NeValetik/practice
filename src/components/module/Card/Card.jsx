'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import processStringsInformation from '@/utils/processIntroStringsInformation';
import convertTimeStampToDate from "@/utils/convertTimeStampToDate";
import removeBadSigns from "@/utils/removeBadSigns";

//TODO: change here font and update the logic after fetch
export default function Card({ params }){
    const news = {...params,title:{...params.title,short: removeBadSigns(params.title.short)}, dates:{...params.dates, posted:convertTimeStampToDate(params.dates.posted)},description:{...params.description,
        intro: processStringsInformation(params.description.intro),}};
    const [visited,setVisited] =useState(false);
    // consoleid);
    const handleVisiting = () =>
    {
        setVisited(true);
    }

    useEffect(()=>{
        if (localStorage.getItem(news.id)!=null){
            setVisited(true);
        }
        if (visited){
            localStorage.setItem(news.id,visited);
        }
        localStorage.setItem("current_news",news.id);
    },[visited])
    
    return(
        <div className="flex">
            <div className="flex-shrink-0">
                <Link href ={news.cparent.url.ru+"/"+news.url +"/" + news.id} className="text-2xl" onClick={handleVisiting}>
                   <Image src={"https://i.simpalsmedia.com/point.md/news/370x194/"+news.thumbnail}/*news.img*/ 
                    alt = "img" 
                    className={"object-fill rounded-md w-60 h-32" +" "+ (visited ?"opacity-75": "")} 
                    width ="370" height="190" />
                </Link>
            </div>
            <div className="ml-4 flex-col ">

                <div className={"flex mb-1 mt-[-2.5px] font-medium hover:text-[#FF9870]"}>
                    <Link href ={news.cparent.url.ru+"/"+news.url +"/"+ news.id} className={"text-2xl" +" "+ (visited ?"opacity-75": "")} onClick={handleVisiting}>{news.title.short} </Link>
                </div>
                <div className="lg:flex lg:visible hidden lg:mb-[4px]">
                    <div className={"text-base text font-normal " +" "+ (visited ?"opacity-75": "")}>
                        {news.description.intro}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className={"flex rounded-sm h-4 w-4 mr-2" +" "+ (visited ?"opacity-75": "")} >
                        {news.parents.at(-1).attachment!=""?
                            <Image alt="logo" src={"https://i.simpalsmedia.com/point.md/logo/"+news.parents.at(-1).attachment} width={16} height={16} className="w-full h-full"></Image>
                            :
                            <div className="bg-gray-400 h-full w-full items-center flex justify-center rounded-sm">
                                <div className="flex rounded-full bg-white h-[11px] w-[11px]">
                                </div>
                            </div>
                        }   
                    </div>
                    <div className={"flex" +" "+ (visited ?"opacity-75": "")}>
                        {news.dates.posted}
                    </div>
                </div>
            </div>
        </div>
    );
} 