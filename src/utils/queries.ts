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

interface Url {
  ru: string;
}

interface CParent {
  id: string;
  url: Url;
}

export interface Contents {
  id: string;
  url: string;
  title: Title;
  description: Description;
  dates: Dates;
  thumbnail: string;
  parents: Parents[] | [];
  cparent: CParent;
}

export interface Content {
  id: string;
  url: string;
  title: Title;
  description: Description;
  dates: Dates;
  thumbnail: string;
  parents: Parents[] | [];
  cparent: CParent;
}


export interface QueryContentsReturn {
  contents:{
    id: string;
    url: string;
    title: Title;
    description: Description;
    dates: Dates;
    thumbnail: string;
    parents: Parents[] | [];
    cparent: CParent;
  }
}

export interface QueryContentArticleReturn {
  content:{
    id: string;
    url: string;
    title: Title;
    description: Description;
    dates: Dates;
    thumbnail: string;
    parents: Parents[] | [];
  }
}

const GET_CONTENTS = gql`
  query GetData($from: Int, $offset: Int, $affiliations: [Int]!) {
    contents(
        project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
        lang: "ru", 
        skip: $from, 
        take: $offset,
        affiliations: $affiliations,
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
`;

export const GET_CONTENT = gql`
    query GetData($full_url:String ) {
      content(
          project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
          lang: "ru", 
          id: "",
          full_url: $full_url,
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
  `;

export default GET_CONTENTS; 