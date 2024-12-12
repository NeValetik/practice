"use client"
import FeedSources from "./FeedSources";

interface FeedDateParams{
    index:number;
    date:string | null;
}

export default function FeedDate({index, date=null}:FeedDateParams){
    // const {offer} = params;
    return(
        <>
            <div className="flex w-full justify-between mb-6">
                <div className="text-[28px] font-bold font-sans">
                    {date}
                </div>
                { index === 0 &&
                <div className="flex text-base text-gray-500 font-medium font-sans click" >
                    <FeedSources />
                </div>  
                }
            </div>
            
        </>
    );
} 