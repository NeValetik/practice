"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FeedSourcesFilters from "./FeedSourcesFilters";

export default function FeedSources(){
    const [isDropdown,setIsDropdown] = useState(false);
    const [numberOfOff,setNumberOfOff] = useState(0);

    const handleOnClick = async() => {
        setIsDropdown(true)
    }

    return(
        <>
            <div href='/'className={"flex items-center" + " " + (isDropdown&& "text-[#FF4700]")}  onClick={handleOnClick} >
                <Image alt="img" src={!isDropdown ? "/gear.svg" : "/gearorange.svg"} className={"w-[18px] h-[18px] mr-1"} width="1" height="1"></Image>
                <div className="flex-col">
                    Источники
                    {numberOfOff !== 0 && 
                                        <div className=" text-xs">
                                        cкрыто {numberOfOff}
                                        </div>
                                        }
                </div>
            </div>
            { isDropdown &&
                <FeedSourcesFilters value = {numberOfOff} setter={setNumberOfOff}/>
            }
        </>
    )
     
} 