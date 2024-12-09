"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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
                <div className="flex text-base text-gray-500 font-medium font-sans">
                    <Link href='/'className="flex items-center">
                        <Image alt="img" src="/gear.svg" className="w-[18px] h-[18px] mr-1" width="1" height="1"></Image>
                        Источники
                    </Link>
                </div>  
                }
            </div>
            
        </>
    );
} 