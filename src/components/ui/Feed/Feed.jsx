import Link from "next/link";
import { Card } from "../Card/Card";

const fetchFeed = async()=>{
    //name,img,body,time,company,viewed
    return [{
        id:"1",
        img:"/next.svg",
        url:"url",
        title:{short:"Ещё THIS IS THE TITLE THAT I WILL PROBABLY HAVE IN THIS WORK "},
        description:{ cut:"Description bulibuli", thumbnail:""}
    }]
}

export default async function Feed(){
    const news = await fetchFeed();

    return(
    <div className="mx-auto p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
        <div className="flex w-full justify-between mb-6">
            <div className="text-[28px] font-bold font-sans">
                Сегодня
            </div>
            <div className="text-base text-gray-500 font-medium font-sans">
                <Link href='/'>
                    Источники
                </Link>
            </div>
        </div>
        
        <div className="flex w-full" >
            {news.map((article) => 
                <Card params={ article } />
            )
            }
        </div>
    </div>
    );
}