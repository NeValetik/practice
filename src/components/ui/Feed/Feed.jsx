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
    },{
        id:"2",
        img:"/next.svg",
        url:"url",
        title:{short:"Ещё THIS IS THE TITLE THAT I WILL PROBABLY HAVE IN THIS WORK "},
        description:{ cut:"Description bulibuli", thumbnail:""}
    },{
        id:"3",
        img:"/next.svg",
        url:"url",
        title:{short:"Ещё THIS IS THE TITLE THAT I WILL PROBABLY HAVE IN THIS WORK "},
        description:{ cut:"Description bulibuli", thumbnail:""}
    },{
        id:"4",
        img:"/next.svg",
        url:"url",
        title:{short:"Ещё THIS IS THE TITLE THAT I WILL PROBABLY HAVE IN THIS WORK "},
        description:{ cut:"Description bulibuli", thumbnail:""}
    },{
        id:"5",
        img:"/next.svg",
        url:"url",
        title:{short:"Ещё THIS IS THE TITLE THAT I WILL PROBABLY HAVE IN THIS WORK "},
        description:{ cut:"Description bulibuli", thumbnail:""}
    },{
        id:"6",
        img:"/1bffe876f5633ed6e7239a409e9b6083.jpg",
        url:"url",
        title:{short:"В Тбилиси водометами разогнали проевропейских протестующих под парламентом"},
        description:{ cut:"Проевропейскую акцию протеста, которая снова собралась у здания парламента Грузии вечером в пятницу, разогнали водометами и слезоточивым га…", thumbnail:""}
    },]
}
//each 12-th should be baner
export default async function Feed(){
    const news = await fetchFeed();

    return(
    <div className="p-6 bg-[#FFFFFF] rounded-lg w-full max-w-5xl flex flex-col text-gray-800">
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
        
        <div className="flex flex-col w-full gap-6" >
            {news.map((article) => 
                <Card params={ article } />
            )
            }
        </div>
    </div>
    );
}