'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//TODO: change here font and update the logic after fetch
export function Card({ params }){
    const news = params;
    console.log(news);
    return(
        <div className="flex ">
            <div className="flex rounded-lg w-60 h-28">
                <Image src={news.img} alt = "img" className="object-contain w-full h-full text-black" width ="100" height="100" />
            </div>
            <div className="ml-4 flex-col ">

                <div className="flex mb-2 mt-[-2.5px] font-medium">
                    <Link href ={news.url} className="text-2xl">{news.title.short}</Link>
                </div>
                <div className="sm:flex sm:visible hidden sm:mb-[10px]">
                    <div className="text-base text font-normal ">
                        {news.description.cut}
                    </div>
                </div>
                <div className="flex">
                    <div className="flex">
                        author
                    </div>
                    <div className="flex">
                        time
                    </div>
                </div>
            </div>
        </div>
    );
} 