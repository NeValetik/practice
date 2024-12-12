"use client"
import { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

const BUTTON_SCROLL_CONST:number =230;

export default function GoUpButton(){
    const [isVisible,setIsVisible] = useState<boolean>(false)

    useEffect(()=>{
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > BUTTON_SCROLL_CONST);
        }
        window.addEventListener("scroll",toggleVisibility);

        return () => {window.removeEventListener("scroll",toggleVisibility);}
    }
    ,[])

    const handleOnClick = ()=>{
        window.scrollTo({ top:0 });
    }

    return(
        <div className={"fixed z-0 md:bottom-20 md:left-48 bottom-10"+ " " + 
            (isVisible ? "opacity-100" : "opacity-0")} >
            <button className="rounded-lg m-2 bg-gray-200" disabled={!isVisible} onClick={handleOnClick}>
                <FaArrowUp className="bg-gray-200  m-2 rounded-lg h-[15px] w-[15px] text-white"/>
            </button>
        </div>
    );
} 