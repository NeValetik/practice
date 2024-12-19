"use client"
import {useState, useEffect} from "react";

import { fetchArticle } from "@/utils/fetchArticle";

import ArticleBody from "@/components/module/Article";
import { QueryContentArticleReturn } from "@/utils/queries";

interface ArticleParams {
  id: string;
  title: string;
  content: string;
  // Add other fields as necessary
}

export default function ArticlePage({params} : {params: ArticleParams}) {
  const [article,setArticle] = useState<QueryContentArticleReturn|null>(null);
  useEffect(()=>{
    const handle = async()=>{
      const fetched = await fetchArticle({id:params.id});
      setArticle(fetched)
    }

    handle();
  })
  return(
    <div className="flex">
      <ArticleBody fetchedArticle={article} />
    </div>
  );
}
