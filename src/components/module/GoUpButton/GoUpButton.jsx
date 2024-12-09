"use client"
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GoUpButton(){
    const [isVisible,setIsVisible] = useState(false)

    useEffect(()=>{
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 230);
        }
        window.addEventListener("scroll",toggleVisibility);

        return () => {window.removeEventListener("scroll",toggleVisibility);}
    }
    ,[])

    const handleOnClick = ()=>{
        window.scrollTo({ top:0 });
    }
    //TODO:Make the button to be sticky to the feed. 
    return(
        <div className={`fixed bottom-20 left-48 ${
            isVisible ? "opacity-100" : "opacity-0"}`} >
            <button className="rounded-lg m-2 bg-gray-200" disabled={!isVisible} onClick={handleOnClick}>
                <FaArrowUp className="bg-gray-200  m-2 rounded-lg h-[15px] w-[15px] text-white"/>
               
            </button>
        </div>
    );
} 