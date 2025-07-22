import HomeButton from "../assets/HomeButton.png"
import ClickedHomeButton from "../assets/ClickedHomeButton.png"

import { useLocation, useNavigate } from "react-router-dom";

import Picbutton from "../component/button";
import { arcana } from "../template/Card";

import "../pages/css/getcard.css"
import { useEffect } from "react";

export default function Get_Card(){
    const navigate = useNavigate();
    const location = useLocation();
    const card = location.state as [number,string];
    const number = card[0],path=card[1];

    // console.log(number);

    return (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-full max-w-screen-md bg-white shadow-md rounded-xl overflow-hidden grid grid-rows-[auto_1fr_auto] min-h-[90vh]">
                        <header className="TemplateColor text-white text-2xl p-4 text-center roboto-font-bold">
                            {arcana[number==null?(0):(number)].name}
                        </header>

                        <main className="grid grid-cols-3 gap-4 p-4">
                            <div className="col-span-1 flex flex-col justify-between">
                                <img className="flex-1 flex items-center justify-center"src={path} alt="">
                                </img>
                                
                                <div className="mt-4 py-2 px-4 rounded">
                                    <Picbutton onClick={() => navigate("/",{replace: true})} max_h={10} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
                                </div>
                            </div>

                            <div className="col-span-2 p-4 noto-sans-thai-font">
                                {arcana[number==null?(0):(number)].meanTH}<br/><br/>
                                ความหมายที่ดี: {arcana[number==null?(0):(number)].meanGoodTH}<br/>
                                ความหมายที่: {arcana[number==null?(0):(number)].meanBadTH}<br/><br/>
                                ข้อความจากแม่หมอ: {arcana[number==null?(0):(number)].hint}
                            </div>
                        </main>

                        <footer className="TemplateColor text-white p-4 text-center roboto-font-bold">
                            made by CSCMU66
                        </footer>
                    </div>
                </div>
    )
}