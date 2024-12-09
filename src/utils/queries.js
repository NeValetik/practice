import { gql } from '@apollo/client';

const queryContent = (from,offset) =>gql(`
  query GetData {
    contents(
        project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
        lang: "ru", 
        skip: ${from}, 
        take: ${offset}
    ) {
        id,
        url,
        title { short },
        album { source },
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

export const queryContentArticle = (id) =>gql(`
    query GetData {
      content(
          project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
          lang: "ru", 
          id: "${id}",
        ) {
          id,
          url,
          title { short },
          album { source },
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