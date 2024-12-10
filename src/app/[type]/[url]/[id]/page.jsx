"use client"
import {useState, useEffect} from "react";

import { fetchArticle } from "@/utils/fetchArticle";

import ArticleBody from "@/components/module/Article/ArticleBody";

const INITIAL_NUMBER_OF_NEWS = 20

export default function ArticlePage({params}) {
  const [article,setArticle] = useState(null);
  useEffect(()=>{
    const handle = async()=>{
      const fetched = await fetchArticle({id:params.id});
      setArticle(fetched)
    }

    handle();
  },[])
  return(
    <div className="flex">
        <ArticleBody fetchedArticle={article} />
    </div>
  );
}
