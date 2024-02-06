import {Suspense} from "react";
import {FaLaughWink} from "react-icons/fa";
import {FaTachometerAlt} from "react-icons/fa";
import React from "react";
import {Dropdown, DropdownMenu, DropdownItem, Button, DropdownTrigger} from "@nextui-org/react";


export default function Page() {
    return (

        <div className={"flex "}>


            {/*Side Panel*/}
            <div className={"flex justify-center  pt-6 bg-indigo-500 w-2/12 h-screen"}>
                <div className={"flex flex-col"}>
                    <div className={"flex"}><FaLaughWink className={"text-3xl -rotate-12 "}/> <h1
                        className={"text-3xl ml-3  font-semibold"}> SB ADMIN <span className={"text-xl"}>2</span></h1>
                    </div>

                    <hr className={"opacity-50 mt-5 mb-5"}/>
                    <div className={"flex "}><FaTachometerAlt className={"text-[16px] mt-1"}/>
                        <button className={"text-[16px] ml-3 "}> Dashboard</button>
                    </div>
                    <hr className={"opacity-50 mt-5 mb-2"}/>

                    <div>
                        <h1 className={"text-[12px] opacity-50"}>INTERFACE</h1>
                    </div>

                    {/*Dropdown Menu*/}
                    <div>
                        <Dropdown>

                                <Button>
                                    Open Menu
                                </Button>

                            <DropdownMenu  >
                                <DropdownItem >New file</DropdownItem>
                                <DropdownItem >Copy link</DropdownItem>
                                <DropdownItem >Edit file</DropdownItem>
                                <DropdownItem className="text-danger" color="danger">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                </div>

            </div>


            <hr className={"opacity-50 mb-2 mt-2"}/>

            {/*Middle Panel*/}
            <div className={"flex bg-white w-10/12 h-screen"}>

            </div>


        </div>
    );
};
