"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeedSourcesFilters from "./FeedSourcesFilters";

export default function FeedSources(){
    const [isDropdown,setIsDropdown] = useState(false);

    const handleOnClick = async() => {
        setIsDropdown(true)
    }

    return(
        <>
            <div href='/'className="flex items-center" onClick={handleOnClick} >
                <Image alt="img" src="/gear.svg" className="w-[18px] h-[18px] mr-1" width="1" height="1"></Image>
                Источники
            </div>
            { isDropdown &&
                <FeedSourcesFilters />
            }
        </>
    )
     
} 