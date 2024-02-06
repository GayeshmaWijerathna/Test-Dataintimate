import {Suspense} from "react";
import {FaLaughWink} from "react-icons/fa";
import {FaTachometerAlt} from "react-icons/fa";
import React from "react";
import {Dropdown, DropdownMenu, DropdownItem, Button, DropdownTrigger} from "@nextui-org/react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function Page() {
    return (

        <div className={"flex "}>


            {/*Side Panel*/}
            <div className={"flex justify-center  pt-6 bg-indigo-500  w-2/12 h-screen"}>
                <div className={"flex flex-col"}>
                    <div className={"flex"}><FaLaughWink className={"text-3xl -rotate-12 "}/> <h1
                        className={"text-3xl ml-3  font-semibold"}> SB ADMIN <span className={"text-xl"}>2</span></h1>
                    </div>

                    <hr className={"opacity-50 mt-5 mb-5"}/>
                    <div className={"flex "}><FaTachometerAlt className={"text-[16px] mt-1"}/>
                        <button className={"text-[16px] ml-3 "}> Dashboard</button>
                    </div>
                    <hr className={"opacity-50 mt-5 mb-2"}/>

                    {/*Interface*/}
                    <div>
                        <h1 className={"text-[12px] opacity-50"}>INTERFACE</h1>
                    </div>

                    {/*Dropdown Menu 1*/}
                    <div className={"flex mt-4 opacity-60 hover:opacity-100"}>
                        <IoSettingsSharp className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Components
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    {/*Dropdown Menu 2*/}
                    <div className={"flex mt-8 opacity-60 hover:opacity-100"}>
                        <AiFillTool className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Utilities
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    <hr className={"opacity-50 mt-6 mb-2 "}/>

                    {/*ADDons*/}
                    <div>
                        <h1 className={"text-[12px] opacity-50"}>ADDONS</h1>
                    </div>

                    {/*Dropdown Menu 1*/}
                    <div className={"flex mt-4 opacity-60 hover:opacity-100"}>
                        <FaFolder className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Pages
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    {/*Dropdown Menu 2*/}
                    <div className={"flex mt-8 opacity-60 hover:opacity-100"}>
                        <FaChartArea className={"mr-2 mt-0.5"}/>
                        <Button>
                            Charts
                        </Button>

                    </div>

                    {/*Dropdown Menu 3*/}
                    <div className={"flex mt-8 opacity-60 hover:opacity-100"}>
                        <FaTable className={"mr-2 mt-0.5"}/>
                        <Button>
                            Tables
                        </Button>

                    </div>
                    <hr className={"opacity-50 mb-2 mt-5"}/>

                    {/*close*/}
                    <div className={"flex justify-center mt-5  text-5xl opacity-50 hover:opacity-100"}>
                        <button><IoIosArrowDropleftCircle/></button>
                    </div>
                </div>

            </div>


            <hr className={"opacity-50 mb-2 mt-2"}/>

            {/*Middle Panel*/}
            <div className={" col bg-white w-10/12 h-screen"}>

            {/* Search  bar*/}
                <div className={"bg-black w-full h-24 mb-32 "}><h2>Search</h2></div>


                <div className={"flex justify-center w-full gap-5 p-6"}>

                        <div className="w-full h-28 p-4  border-l-4 border-blue-700"><h3>EARNINGS (MONTHLY)</h3></div>
                        <div className="w-full h-28 p-4  border-l-4 border-blue-700"><h3>EARNINGS (MONTHLY)</h3></div>
                        <div className="w-full h-28 p-4  border-l-4 border-blue-700"><h3>EARNINGS (MONTHLY)</h3></div>
                        <div className="w-full h-28 p-4  border-l-4 border-blue-700"><h3>EARNINGS (MONTHLY)</h3></div>


                </div>

            </div>


        </div>
    );
};
