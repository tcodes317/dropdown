import { useState } from "react";
import {AiOutlineCaretDown} from "react-icons/ai";
import {AiOutlineCaretUp} from "react-icons/ai";
import list from "./file.json";

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <div className="relative flex-col items-center w-[348px] h-[340px]">
                 <button onClick={()=> setIsOpen((prev) => !prev)} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-transparent active:border-white duration-300 active:text-white">
                    Dropdown
                    {!isOpen ? (
                        <AiOutlineCaretDown classNmae="h-8 " />
                    ) : (
                        <AiOutlineCaretUp className="h-8" />
                    )
                    }
                </button>
                {isOpen && (
                    <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                        {/* {list.map((items, i)=>{
                            <div className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" key={i}>
                                <h3 className="font-bold">{items.city}</h3>
                                <h3 className="font-bold">{items.emoticon}</h3>
                            </div>
                        })} */}
                        <h1>Header One</h1>
                        <h1>Header two</h1>
                        <h1>Header three</h1>
                    </div>
                )}
            </div>
        </>
    )
}
export default Dropdown;