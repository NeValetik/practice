import { gql } from '@apollo/client';

interface Title {
  short: string;
  long: string;
}

interface Description {
  intro: string;
  cut: string;
}

interface Dates {
  posted: string;
}

interface Parents {
  id: string;
  attachment: string;
}

interface ContentWrapper<T> {
  contents: T[];
}

export type ContentQueryReturnType = ContentWrapper<QueryContentReturn>
export type ContentQueryArticleReturnType = ContentWrapper<QueryContentArticleReturn>

export interface QueryContentReturn {
  id: string;
  url: string;
  title: Title;
  description: Description;
  dates: Dates;
  thumbnail: string;
  parents: Parents[];
}

export interface QueryContentArticleReturn {
  id: string;
  url: string;
  title: Title;
  description: Description;
  dates: Dates;
  thumbnail: string;
  parents: Parents[];
}

const queryContent = (from:number,offset:number,affiliations:number[]) =>gql(`
  query GetData {
    contents(
        project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
        lang: "ru", 
        skip: ${from}, 
        take: ${offset},
        affiliations: ${JSON.stringify(affiliations)}
    ) {
        id,
        url,
        title { short },
        description { intro },
        dates{posted},#don't know what are the arguments that the query accepts as conditions will convert manually
        thumbnail,
        parents {
          id
          attachment
        }
        cparent{
          id,
          url{
            ru
          }
        }
      }
  } 
`);

export const queryContentArticle = (id:string) =>gql(`
    query GetData {
      content(
          project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
          lang: "ru", 
          id: "${id}",
        ) {
          id,
          url,
          title { short },
          description { intro },
          dates{posted},#don't know what are the arguments that the query accepts as conditions will convert manually
          thumbnail,
          parents {
            id
            attachment
          }
  
        }
  } 
  `);

export default queryContent; 