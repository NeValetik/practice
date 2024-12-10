import client from '../lib/client';
import queryContent,{ QueryContentReturn } from './queries';

interface FetchFeedParams {
    from: number;
    offset: number;
    affiliations?: number[];

}

export const fetchFeed = async ({from, offset, affiliations=[1,2,3,4,5]}:FetchFeedParams):Promise<QueryContentReturn[]>=>{
    const GET_DATA = queryContent(from,offset,affiliations);
    
    const  article:QueryContentReturn[] = (await client.query({ query: GET_DATA })).data.contents;
    //name,img,body,time,company,viewed
    // console.log(client.query({query:GET_DATA}));
    
    return article;
}

