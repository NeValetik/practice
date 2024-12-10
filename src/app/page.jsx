"use client"
import Image from "next/image";
// import Head from "next/head";
import Feed from "@/components/module/Feed/Feed"
import { fetchFeed } from "@/utils/fetchFeed";
import { useEffect, useState } from "react";

const INITIAL_NUMBER_OF_NEWS = 20

export default function Home() {
  const [initialFeed,setInitialFeed] = useState(null);
  useEffect(()=>{
    const loadMore=async()=>{
      const data = await fetchFeed({from:0, offset:INITIAL_NUMBER_OF_NEWS})
      setInitialFeed(data);
    }
    loadMore();
  },[])
  return(
  <>
    <div className="flex">
        <Feed initialFeed={initialFeed} />
    </div>
  </>
  );
}
