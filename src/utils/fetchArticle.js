import client from '../lib/client';
import {queryContentArticle} from './queries';

export const fetchArticle = async ({ id })=>{
    // console.log(id);
    const GET_DATA = queryContentArticle(id);
    //name,img,body,time,company,viewed
    const  article = (await client.query({ query: GET_DATA })).data.content;
    return article;
}