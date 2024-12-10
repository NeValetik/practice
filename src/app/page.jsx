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
    const initialData=async()=>{
      const storedAffiliations = JSON.parse(localStorage.getItem("items"));
      if (storedAffiliations) {
        const affiliations = storedAffiliations
        .filter((item) => item.isOn)
        .map((item) => item.affiliation);
        const data = await fetchFeed({from:0, offset:INITIAL_NUMBER_OF_NEWS, affiliations})
        setInitialFeed(data);
      }
      else
      {
        const data = await fetchFeed({from:0, offset:INITIAL_NUMBER_OF_NEWS})
        setInitialFeed(data);
      }
    }
    initialData();
  },[])
  return(
  <>
    <div className="flex">
        <Feed initialFeed={initialFeed} />
    </div>
  </>
  );
}
