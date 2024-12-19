'use client'
import { useQuery } from '@apollo/client';

import ArticleBody from '@/components/module/ArticleBody';
import { GET_CONTENT } from '@/utils/queries';

interface ArticleParams {
  contentType: string;
  url: string
  // Add other fields as necessary
}

const ArticlePage = ({params} : {params: ArticleParams}) => {
  const { contentType, url } = params;
  const { loading, error, data } = useQuery(GET_CONTENT,{ 
    variables: {
      'full_url':`${contentType}/${url}`
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