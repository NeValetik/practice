"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoCheckboxSharp } from "react-icons/io5";

export default function FeedSourcesFilters({value,setter}){
    const [checkbox,setCheckbox] = useState(
        {items:[
                {
                    name: "moldovan",
                    isOn: true,
                    text: "Молдавские",
                    color: "text-[#808080]",
                    isNotChangable: true
                },
                {
                    name: "romanian",
                    isOn: true,
                    text: "Румынские"
                },
                {
                    name: "russian",
                    isOn: true,
                    text: "Российские"
                },
                {
                    name: "ukranian",
                    isOn: true,
                    text: "Украинские"
                },
                {
                    name: "worldvide",
                    isOn: true,
                    text: "Международные"
                },
            ],
        numberOfOff: value,
        }
    );

    const handleOnClick = (e) => {
        const label = e.target.closest('label'); 
        if (label) {
            const labelText = label.getAttribute('data-name');
            setCheckbox((prevState) => {
               
                const updatedItems = prevState.items.map((item) =>
                    item.name === labelText
                        ? { ...item, isOn: !item.isOn } 
                        : item 
                );
                

                const updatedNumberOfOff = updatedItems.reduce((count, item) => {
                    return !item.isOn ? count + 1 : count;
                }, 0);
                setter(updatedNumberOfOff);
                
                return { ...prevState, items: updatedItems};
            });
        }
    };

    return(
        <div
                    className="z-20 absolute w-30  -translate-x-14 translate-y-10
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none flex-col p-2"
                    role="menu"
                >
                    <div className="py-1 flex-col flex gap-4" role="none">
                        {checkbox.items.map((item,index)=>{
                            return (<label
                                className="flex text-sm text-gray-700 
                                items-center font-body"
                                role="menuitem"
                                data-name={item.name}
                                onClick={(e) => {!(item?.isNotChangable) && handleOnClick(e)}}
                                key={index}
                            >
                                <div>
                                    { item.isOn?
                                        <IoCheckboxSharp  className={"w-5 h-5 rounded-full"+' '+(item.color? item.color: "text-[#FF4700]")} />
                                        :
                                        <IoCheckboxSharp  className={"w-5 h-5 rounded-lg text-white border-[1px]"} />
                                    }
                                </div>
                                <div className="ml-2 text-base">
                                    {item.text}
                                </div>
                            </label>);

                        })
                        }
                       
                    </div>
                </div>
    )
     
} 