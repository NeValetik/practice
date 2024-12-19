"use client"
import { useQuery } from "@apollo/client";

import ArticleBody from "@/components/module/Article";
import { GET_CONTENT } from "@/utils/queries";

interface ArticleParams {
  title: string;
  content: string;
  contentType: string;
  url: string
  // Add other fields as necessary
}

export default function ArticlePage({params} : {params: ArticleParams}) {
  const { loading, error, data } = useQuery(GET_CONTENT,{ 
    variables: {
      "full_url":`${params.contentType}/${params.url}`
    }
  }
  );
  
  if (loading) return <>...Loading</>
  if (error) return <>error</>
  return(
    <div className="flex">
      <ArticleBody fetchedArticle={data} />
    </div>
  );
}
