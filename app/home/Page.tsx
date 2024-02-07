
import {FaCalendar, FaDownload, FaLaughWink} from "react-icons/fa";
import {FaTachometerAlt} from "react-icons/fa";
import React from "react";
import {Dropdown, DropdownMenu, DropdownItem, Button, DropdownTrigger} from "@nextui-org/react";
import {IoSettingsSharp} from "react-icons/io5";
import {AiFillTool} from "react-icons/ai";
import {FaFolder} from "react-icons/fa";
import {FaChartArea} from "react-icons/fa";
import {FaTable} from "react-icons/fa6";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import {MdOutlineAttachMoney} from "react-icons/md";
import {FaClipboardList} from "react-icons/fa";
import {TiMessages} from "react-icons/ti";
import {FaSearch} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import {FaMessage} from "react-icons/fa6";
import {FcBusinessman} from "react-icons/fc";
import pic from "../../public/image1.png"

import {Square3Stack3DIcon} from "@heroicons/react/24/outline";
import {Form} from "react-bootstrap";
import dynamic from "next/dynamic";
import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});


export default function Page() {

    const chartConfig = {
        type: "line",
        height: 240,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            stroke: {
                lineCap: "round",
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };
    return (

        <div className={"flex h-auto "}>


            {/*Side Panel*/}
            <div className={"flex justify-center  pt-6 bg-indigo-500  w-2/12 h-auto"}>
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
            <div className={" col bg-gray-100 w-10/12 h-auto"}>

                {/* Search  bar*/}

                <div className={"flex flex-row bg-gray-100 shadow-2xl border-e-gray-300 w-full h-20"}>

                    <div className={"flex flex-col ml-3 mt-2 p-2 w-8/12"}>
                        <Form className="d-flex flex-col p-2 items-center justify-center">
                            <Form.Control
                                type="search"
                                placeholder="Search for.."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="outline-success  bg-blue-600 text-1xl p-1"><FaSearch/></Button>
                        </Form>
                    </div>

                    <div className={"flex flex-col w-1/12 text-gray-600 text-3xl justify-center opacity-50"}>
                        <IoIosNotifications/></div>
                    <div className={"flex flex-col w-1/12 text-gray-600 text-2xl justify-center opacity-50"}>
                        <FaMessage/></div>
                    <div className={"flex flex-row w-2/12 text-gray-600 text-3xl items-center gap-2 opacity-50"}><p
                        className={"text-[12px]"}>Douglas McGee</p><FcBusinessman/></div>

                </div>
                {/*</div>*/}
                <div>
                    <div className={"flex flex-row w-full p-6"}>
                        <div className={"flex flex-col w-6/12 text-2xl text-[#5a5c69]"}><p>Dashboard</p></div>
                        <div className={"flex flex-row w-6/12 justify-end"}>
                            <button className={"flex gap-1 bg-[#4e73df] items-center p-1"}><FaDownload/>Generate Report
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-nowrap w-full gap-5 p-6 justify-center">

                    <div
                        className="flex  w-full h-28 p-4 border-l-8 border-blue-800 rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"text-[#4e73df] text-[14px] "}>EARNINGS (MONTHLY)</p>
                            <p className={"text-gray-600 font-bold"}>$40,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaCalendar/>
                        </div>
                    </div>

                    <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#1cc88a] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"text-[#1cc88a] text-[14px] "}>EARNINGS (ANNUAL)</p>
                            <p className={"text-gray-600 font-bold"}>$215,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <MdOutlineAttachMoney/>
                        </div>
                    </div>

                    <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#36b9cc] rounded-lg shadow-2xl bg-white border-e-gray-300">

                        <div className={"flex flex-wrap w-10/12"}>
                            <p className={"flex-row w-full text-[#36b9cc] text-[14px]"}>TASKS</p>
                            <div className={"flex flex-row w-full items-center text-gray-600 font-bold"}>
                                <div className="w-4/12 flex items-center">50%</div>
                                <div className="w-6/12">
                                    <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                        <div className="relative h-2 flex  rounded-lg  bg-gray-300 justify-center">
                                            <div
                                                className="absolute top-0 bottom-0 left-0 rounded-lg w-[50%] bg-[#36b9cc]"></div>
                                            <div className="relative text-blue-900 font-medium text-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaClipboardList/>
                        </div>
                    </div>

                    <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#f6c23e] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"flex-row w-full text-[#f6c23e] text-[14px]  "}>PENDING REQUESTS</p>
                            <p className={"flex-row w-full text-gray-600 font-bold "}>18</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <TiMessages/>
                        </div>
                    </div>

                </div>

                {/* Chart-1 - Earnings Overview  */}
                <div className={"flex flex-row w-full"}>
                    <div
                        className={"flex flex-col w-7/12 h-auto bg-[#f8f9fc] ml-6 m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

                        <h1 className={"text-blue-500 p-5 font-semibold "}>Earnings Overview</h1>
                        <hr className={"opacity-50 mb-2 mt-2"}/>

                    </div>

                    <div
                        className={"flex flex-col w-5/12 h-auto bg-[#f8f9fc] ml-6 m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

                        <h1 className={"text-blue-500 p-5 font-semibold"}>Revenue Sources</h1>
                        <hr className={"opacity-50 mb-2 mt-2"}/>

                    </div>
                </div>

                <div>

                    {/*<Card>*/}
                    {/*    <CardHeader*/}
                    {/*        floated={false}*/}
                    {/*        shadow={false}*/}
                    {/*        color="transparent"*/}
                    {/*        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"*/}
                    {/*    >*/}
                    {/*        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">*/}
                    {/*            <Square3Stack3DIcon className="h-6 w-6" />*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <Typography variant="h6" color="blue-gray">*/}
                    {/*                Line Chart*/}
                    {/*            </Typography>*/}
                    {/*            <Typography*/}
                    {/*                variant="small"*/}
                    {/*                color="gray"*/}
                    {/*                className="max-w-sm font-normal"*/}
                    {/*            >*/}
                    {/*                Visualize your data in a simple way using the*/}
                    {/*                @material-tailwind/react chart plugin.*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardBody className="px-2 pb-0">*/}
                    {/*        <Chart {...chartConfig} />*/}
                    {/*    </CardBody>*/}
                    {/*</Card>*/}
                </div>


                {/* PROJECT BOX   */}
                <div className={"flex flex-row w-full p-4"}>

                    <div
                        className={"flex flex-col w-6/12 h-auto bg-[#f8f9fc] m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

                        <h1 className={"text-[#4e73df] font-semibold p-4"}>Projects</h1>
                        <hr className={"opacity-70"}/>

                        <div className={"flex flex-col w-full p-2"}>
                            <div className={"flex flex-row w-full"}>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-start"}>Server Migration
                                </div>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-items-end items-end"}>20%
                                </div>
                            </div>
                            <div className={"flex flex-col w-full mt-2"}>
                                <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                    <div className="relative h-4 flex items-center justify-center">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 rounded-lg w-[20%] bg-[#e74a3b]"></div>
                                        <div className="relative text-blue-900 font-medium text-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    2*/}
                        <div className={"flex flex-col w-full p-2"}>
                            <div className={"flex flex-row w-full"}>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-start"}>Sales Tracking
                                </div>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-items-end items-end"}>40%
                                </div>
                            </div>
                            <div className={"flex flex-col w-full mt-2"}>
                                <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                    <div className="relative h-4 flex items-center justify-center">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 rounded-lg w-[40%] bg-[#f6c23e]"></div>
                                        <div className="relative text-blue-900 font-medium text-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    3*/}
                        <div className={"flex flex-col w-full p-2"}>
                            <div className={"flex flex-row w-full"}>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-start"}>Customer Database
                                </div>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-items-end items-end"}>60%
                                </div>
                            </div>
                            <div className={"flex flex-col w-full mt-2"}>
                                <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                    <div className="relative h-4 flex items-center justify-center">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 rounded-lg w-[60%] bg-[#4e73df]"></div>
                                        <div className="relative text-blue-900 font-medium text-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    4*/}
                        <div className={"flex flex-col w-full p-2"}>
                            <div className={"flex flex-row w-full"}>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-start"}>Payout Details
                                </div>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-items-end items-end"}>80%
                                </div>
                            </div>
                            <div className={"flex flex-col w-full mt-2"}>
                                <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                    <div className="relative h-4 flex items-center justify-center">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 rounded-lg w-[80%] bg-[#36b9cc]"></div>
                                        <div className="relative text-blue-900 font-medium text-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    5*/}
                        <div className={"flex flex-col w-full p-2"}>
                            <div className={"flex flex-row w-full"}>
                                <div className={"flex flex-col w-6/12 text-[#858796] justify-start"}>Account Setup</div>
                                <div
                                    className={"flex flex-col w-6/12 text-[#858796] justify-items-end items-end"}>Complete!
                                </div>
                            </div>
                            <div className={"flex flex-col w-full mt-2"}>
                                <div className="rounded-xl shadow-sm overflow-hidden p-1">
                                    <div className="relative h-4 flex items-center justify-center">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 rounded-lg w-[100%] bg-[#1cc88a]"></div>
                                        <div className="relative text-blue-900 font-medium text-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Illustrations   */}

                    <div
                        className={"flex flex-col w-6/12 h-auto bg-[#f8f9fc] m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

                        <h1 className={"text-[#4e73df] font-semibold p-4"}>Illustrations</h1>
                        <hr className={"opacity-70"}/>

                        <div className={"flex flex-row w-full"}><img src={pic} alt="Illustration"/></div>


                    </div>

                </div>

                {/*    END OF MIDDLE*/}
            </div>


        </div>
    );
};
