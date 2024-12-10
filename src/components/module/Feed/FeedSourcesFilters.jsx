"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoCheckboxSharp } from "react-icons/io5";

export default function FeedSourcesFilters({value,setter}){
    const [checkbox,setCheckbox] = useState(() => {
        // Initialize state from localStorage if available
        const storedItems = JSON.parse(localStorage.getItem("items"));
        // const storedNumberOfOff = Number(localStorage.getItem("numberOfOff"));

        return {
            items: storedItems || [
                {
                    name: "moldovan",
                    isOn: true,
                    text: "Молдавские",
                    color: "text-[#808080]",
                    isNotChangable: true,
                    affiliation: 1,
                },
                {
                    name: "romanian",
                    isOn: true,
                    text: "Румынские",
                    affiliation: 2,
                },
                {
                    name: "russian",
                    isOn: true,
                    text: "Российские",
                    affiliation: 3,
                },
                {
                    name: "ukranian",
                    isOn: true,
                    text: "Украинские",
                    affiliation: 4,

                },
                {
                    name: "worldvide",
                    isOn: true,
                    text: "Международные",
                    affiliation: 5,
                }
            ],
            numberOfOff: value,
        };
    });

    // const cleanStorage = () =>{
    //     localStorage.removeItem("items");
    //     localStorage.removeItem("numberOfOff");
    // }

    const handleOnMount = () =>{
        localStorage.setItem("items",JSON.stringify(checkbox.items));
        localStorage.setItem("numberOfOff",checkbox.numberOfOff);
    }   

    useEffect(() => {
        handleOnMount(); 
        // cleanStorage();
    }, [checkbox]);

    
    
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
                
                return { ...prevState, items: updatedItems, numberOfOff: updatedNumberOfOff};
            });
        }
    };

    return(
        <div
                    className="z-20 absolute w-30  -translate-x-14 translate-y-10
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    flex-col p-2"
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