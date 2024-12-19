"use client"
import { useState, useEffect,  } from "react";
import Image from "next/image";
import { QueryContentArticleReturn } from "@/utils/queries";

interface ArticleBodyParams {
    fetchedArticle: QueryContentArticleReturn
} 

export default function ArticleBody({fetchedArticle}:ArticleBodyParams){
  const [article,setArticle] = useState<QueryContentArticleReturn>(fetchedArticle);
  useEffect(()=>{
    setArticle(fetchedArticle)
  },[fetchedArticle])
  return(
    <div className="p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
      { article&&
            <div>
              <div className={"flex rounded-sm h-4 w-4 mr-2"} >
                {article.parents && article.parents?.at(-1).attachment!=""?
                  <Image alt="logo" src={"https://i.simpalsmedia.com/point.md/logo/"+article.parents?.at(-1).attachment} width={16} height={16} className="w-full h-full"></Image>
                  :
                  <div className="bg-gray-400 h-full w-full items-center flex justify-center rounded-sm">
                    <div className="flex rounded-full bg-white h-[11px] w-[11px]">
                    </div>
                  </div>
                }   
              </div>
              <div className={""}>
                {article.dates.posted}
              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
              <div>
                    
              </div>
            </div>
      }
        hello
    </div>
  );
}