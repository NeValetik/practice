"use client"
import { useEffect, useState } from "react";

import { fetchFeed } from "@/utils/fetchFeed";

import Feed from "@/components/module/Feed/Feed"
import { Item } from "@/components/module/Feed/FeedSourcesFilters"; 
import { QueryContentReturn } from "@/utils/queries";

const INITIAL_NUMBER_OF_NEWS:number = 20;

export default function Home() {
  const [initialFeed,setInitialFeed] = useState<QueryContentReturn[] | null>(null);
  useEffect(()=>{
    const initialData=async()=>{
      const storedAffiliations:Item[] = JSON.parse(localStorage.getItem("items") || "[]");
      if (storedAffiliations) {
        const affiliations:number[] = storedAffiliations
          .filter((item:Item) => item.isOn)
          .map((item:Item) => item.affiliation);

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
      {initialFeed && <Feed initialFeed={initialFeed} />}
    </div>
  </>
  );
}
