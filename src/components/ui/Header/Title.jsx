'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Title(){
    // const {offer} = params;
    return(
        <div className="w-44 h-12 justify-items-center content-center">
            <div className="sm:w-44 sm:h-12 w-20 h-6 ">
                <Link href="/">
                    <Image src={'/new-point-logo.svg'} className="w-full h-full" width="100" height="100" alt="Logo Here"/>
                </Link>
            </div>
        </div>
    );
} 