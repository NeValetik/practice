"use client"
import { useState } from "react";
import Link from "next/link";
import Title  from "./Title";

export default function Header(){
    // const {offer} = params;
    return(
        <div className = "flex content-center justify-center" >
            <Title />
        </div>
    );
} 