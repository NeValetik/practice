'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Title(){
    // const {offer} = params;
    return(
        <div className="mx-auto py-10 h-min-20 h-max-64 ">
            <Link href="/">
                <Image src={'/new-point-logo.svg'} className="w-full h-full" width="100" height="100" alt="Logo Here"/>
            </Link>
        </div>
    );
} 