'use client'
import { useQuery } from '@apollo/client';

import ArticleBody from '@/components/module/ArticleBody';
import { GET_CONTENT } from '@/utils/queries';
import { use } from 'react';

interface ArticleParams {
  contentType: string;
  url: string
  // Add other fields as necessary
}

const ArticlePage = ({params} : {params: ArticleParams}) => {
  const param:ArticleParams = use(params);
  const { loading, error, data } = useQuery(GET_CONTENT,{ 
    variables: {
      'full_url':`${param.contentType}/${param.url}`
    },
    notifyOnNetworkStatusChange:true

  }
    
  );
  
  if (loading) return <>Loading...</>
  if (error) return <>error here</>
  return(
    <div className="flex">
      {
        data &&
        <ArticleBody fetchedArticle={data} />
      }
    </div>
  );
}

export default ArticlePage;