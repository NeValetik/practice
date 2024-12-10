import client from '../lib/client';
import {queryContentArticle, QueryContentArticleReturn} from './queries';

type FetchArticleParams = {
    id: string,
}


export const fetchArticle = async ({ id }:FetchArticleParams):Promise<QueryContentArticleReturn>=>{
    // console.log(id);
    const GET_DATA = queryContentArticle(id);
    //name,img,body,time,company,viewed
    const  article:QueryContentArticleReturn = (await client.query({ query: GET_DATA })).data.content;
    return article;
}