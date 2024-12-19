'use client'
import Link from 'next/link';

import BanerImage from './components/BanerImage';

interface BanerParams{
    url?: string|null;
    className?: string;
    isInFeed?:boolean;
    imageClassName?:string;
}

export default function Baner({url = null, className='', isInFeed=false, imageClassName=''}:BanerParams){
  return(
    <div
      className={'flex flex-col items-center justify-center text-gray-200 text-2xl pt-3'}
    >
      <div className="relative">
        {/* Baner Text */}
        <div className={'z-0 select-none justify-items-center'+ ' ' +className}>
          <div className="absolute inset-0 flex items-center justify-center">
                    BANER
          </div>

          {/* Image */}
          {url && (
            <BanerImage
              imageUrl={url}
              className={'relative z-10' + ' ' + {imageClassName}}
            />
          )}
        </div>
      </div>
      {isInFeed&&
        <div className="flex-col">
          <div className="text-gray-500 m-2 text-xs font-medium hover:text-[#FF4700]  ">
            <Link href="/">Разместить рекламный пост</Link>
          </div>
        </div>
      }
    </div>

  );
} 