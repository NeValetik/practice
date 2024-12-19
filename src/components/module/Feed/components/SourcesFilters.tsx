"use client"
import { useEffect } from "react";

import { makeVar, useReactiveVar  } from "@apollo/client";

import { IoCheckboxSharp } from "react-icons/io5";

export interface Item {
  name:string;
  isOn:boolean;
  text:string;
  color?:string;
  isNotChangable?:boolean;
  affiliation:number;
} 

interface FeedFiltersParams{
  value:number;
  setter:React.Dispatch<React.SetStateAction<number>>;
}

// export const checkbox = makeVar();
export const checkbox = makeVar((() => {
  const storedItems:Item[]|null = JSON.parse(localStorage.getItem("items") || "[]");

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
    numberOfOff: 0,
  };
})());

const FeedSourcesFilters = ({value,setter}:FeedFiltersParams) => {
  

  // const cleanStorage = () =>{
  //     localStorage.removeItem("items");
  //     localStorage.removeItem("numberOfOff");  
  //     localStorage.removeItem("affiliations");
  // }
  const checkboxLocal = useReactiveVar(checkbox);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(checkboxLocal.items));
    localStorage.setItem("numberOfOff", checkboxLocal.numberOfOff.toString());
    localStorage.setItem(
      "affiliations",
      JSON.stringify(checkboxLocal.items.filter((item: Item) => item.isOn).map((item) => item.affiliation))
    );
  }, [checkboxLocal.items, checkboxLocal.numberOfOff]);

    
  const handleOnClick = (labelText:string|null) => {
    checkbox((() => {
              
      const updatedItems = checkboxLocal?.items.map((item) =>
        item.name === labelText
          ? { ...item, isOn: !item.isOn } 
          : item 
      );
              
      const updatedNumberOfOff = updatedItems.reduce((count, item) => {
        return !item.isOn ? count + 1 : count;
      }, 0);
      setter(updatedNumberOfOff);
              
      return { ...checkboxLocal, items: updatedItems, numberOfOff: updatedNumberOfOff};
    })());
  };
  
  const handleClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) =>{
    const label =(e.target as Element).closest('label'); 
    if (label) {
      const labelText = label.getAttribute('id');
      if (labelText !== checkboxLocal.items[0].name) handleOnClick(labelText)
    }
  }

  return(
    <div
      className="z-20 absolute w-30  -translate-x-14 translate-y-10
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    flex-col p-2"
      role="menu"
    >
      <div className="py-1 flex-col flex gap-4" role="none">
        {checkboxLocal.items.map((item,index)=>{
          return (
            <label
              id={item.name}
              className="flex text-sm text-gray-700 
                                    items-center font-body"
              role="menuitem"
              onClick={handleClick}
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
            </label>
          );
        })
        }
                       
      </div>
    </div>
  )
} 

export default FeedSourcesFilters;