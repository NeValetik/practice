"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Baner(){
    // const {offer} = params; fetch banner
    return(
            <header
        className={`flex items-center justify-center text-gray-200 text-2xl`}
        >
                    <Image 
                        src="/globe.svg" 
                        alt="Banner" 
                        width="200"
                        height="200"
                        className="ml-3"
                        />{" "}
            </header>

    );
} 