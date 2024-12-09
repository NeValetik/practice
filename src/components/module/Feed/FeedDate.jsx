"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeedSources from "./FeedSources";

export default function FeedDate({index, date=null}){
    // const {offer} = params;
    return(
        <>
            <div className="flex w-full justify-between mb-6">
                <div className="text-[28px] font-bold font-sans">
                    {date}
                    {/* here change on the dynamic time update using the utility calculateTheDate */}
                </div>
                { index === 0 &&
                <div className="flex text-base text-gray-500 font-medium font-sans click" >
                    <FeedSources />
                </div>  
                }
            </div>
            
        </>
    );
} 