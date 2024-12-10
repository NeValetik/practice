import client from '../lib/client';
import queryContent from './queries';


export const fetchFeed = async ({from, offset, affiliations=[1,2,3,4,5]})=>{
    // console.log(affiliations)
    const GET_DATA = queryContent(from,offset,affiliations);
    //name,img,body,time,company,viewed
    const  article = (await client.query({ query: GET_DATA })).data.contents;
    return article;
}

