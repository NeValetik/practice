import Link from 'next/link';
import Image from 'next/image';


interface BanerImage{
    url?:string;
    imageUrl?:string;
    className?:string;
}

export default function BanerImage({url,imageUrl,className}:BanerImage){
  // const {url} = url;
  return(
    <Link href={url? url :'/'}>
      <Image 
        src={imageUrl? imageUrl: '/globe.svg'} 
        alt="Banner" 
        width="1"
        height="1"
        className={'w-[920px] h-52 ' + className}
      />
    </Link>        
  );
} 