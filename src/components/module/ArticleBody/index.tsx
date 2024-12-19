import Image from 'next/image';
import { QueryContentArticleReturn } from '@/utils/queries';

interface ArticleBodyParams {
  fetchedArticle: QueryContentArticleReturn
} 

const ArticleBody = ({fetchedArticle}:ArticleBodyParams)=>{
  return(
    
    <div className="p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
      { fetchedArticle &&
            <div>
              <div className={'flex rounded-sm h-4 w-4 mr-2'} >
                {fetchedArticle.content.parents && fetchedArticle?.content?.parents?.at(-1).attachment!=''?
                  <Image alt="logo" src={'https://i.simpalsmedia.com/point.md/logo/'+fetchedArticle.content.parents?.at(-1).attachment} width={16} height={16} className="w-full h-full"></Image>
                  :
                  <div className="bg-gray-400 h-full w-full items-center flex justify-center rounded-sm">
                    <div className="flex rounded-full bg-white h-[11px] w-[11px]">
                    </div>
                  </div>
                }   
              </div>
              <div className={''}>
                {fetchedArticle.content.dates?.posted}
              </div>
              <div>

              </div>
              <div>
                {fetchedArticle.content.description.intro}
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

export default ArticleBody;