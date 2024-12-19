'use client'
import { useState } from 'react';
import Image from 'next/image';

import FeedSourcesFilters from './SourcesFilters';

const FeedSources=()=>{
  const [isDropdown,setIsDropdown] = useState<boolean>(false);
  const [numberOfOff,setNumberOfOff] = useState<number>(()=>{const storedNumberOfOff = Number(localStorage.getItem('numberOfOff'));
    return storedNumberOfOff || 0;
  });

  const handleOnClick = () => {
    setIsDropdown(true);
  }

  const handleOnClickOutside = () => {
    setIsDropdown(false);
    window.location.reload();
  }

  return(
    <div className="flex text-base text-gray-500 font-medium font-sans click" >
      <div className={'flex items-center' + ' ' + (isDropdown&& 'text-[#FF4700]')}  onClick={handleOnClick} >
        <Image alt="img" src={!isDropdown ? '/gear.svg' : '/gearorange.svg'} className={'w-[18px] h-[18px] mr-1'} width="1" height="1"></Image>
        <div className="flex-col">
                    Источники
          {numberOfOff !== 0 && 
                                        <div className="text-xs">
                                        cкрыто {numberOfOff}
                                        </div>
          }
        </div>
      </div>
      { isDropdown &&
                <>
                  <FeedSourcesFilters value = {numberOfOff} setter={setNumberOfOff}/>
                  <div className="top-0 left-0 fixed w-lvw h-lvh z-10" onClick={handleOnClickOutside}></div>
                </>
      }
    </div>  
  )
} 

export default FeedSources;