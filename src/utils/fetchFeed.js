import client from '../lib/client';
import queryContent from './queries';


export const fetchFeed = async ({from,offset})=>{
    const GET_DATA = queryContent(from,offset);
    //name,img,body,time,company,viewed
    const  article = (await client.query({ query: GET_DATA })).data.contents;
    return article;
}

