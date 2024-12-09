import Link from "next/link";
import Image from "next/image";


export default function BanerImage({url,imageUrl,className}){
    // const {url} = url;
    return(
        <Link href={url? url :"/"}>
            <Image 
                src={imageUrl? imageUrl: "/globe.svg"} 
                alt="Banner" 
                width="1"
                height="1"
                className={"w-[920px] h-52 " + className}
                />
        </Link>        
    );
} 