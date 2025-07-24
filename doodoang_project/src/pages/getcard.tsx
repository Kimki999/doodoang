import HomeButton from "../assets/HomeButton.png"
import ClickedHomeButton from "../assets/ClickedHomeButton.png"

import { useLocation, useNavigate } from "react-router-dom";

import Picbutton from "../component/button";
import { arcana } from "../template/Card";

import "../pages/css/getcard.css"
import { useEffect, useState } from "react";
import FadeIn from "../component/fadeIn";

export default function Get_Card(){
    const navigate = useNavigate();
    const location = useLocation();
    const card = location.state as [number,string];
    const number1 = card[0],path=card[1];
    const [ number,setnumber ] = useState<number>(0);

    if(number1 == null){
        setnumber(0);
    }

    useEffect(() => {
        const onPopState = () => {
            navigate("/", { replace: true }); // กลับ A ทันทีเมื่อ back
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    // console.log(number);

    return (
        <FadeIn>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-indigo-400 max-w-1/2 h-3/4 flex justify-center items-center rounded-xl sm:max-w-3/4 " >
                    <div className="m-2">
                        <header className="TemplateColor roboto-font-bold rounded-t-lg">
                            <div className="text-center text-white p-2 shadow-xl 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[7px]">
                                {arcana[number].name}
                            </div>
                        </header>


                        <main className="hidden sm:block">
                            <div className="bg-white grid grid-cols-3 grid-row-3">
                                <div className="col-span-1 row-span-2">
                                    <div className="grid-row-3">
                                        <div className="row-span-2 flex justify-center items-center m-2">
                                            <img className="max-w-3/4 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-sm" src={path}></img>
                                        </div>
                                        <div className="row-span-1 flex justify-center items-center m-2">
                                            <Picbutton  onClick={() => navigate("/",{replace: true})} max_h={10} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 row-span-3 noto-sans-thai-font m-3 overflow-y-auto h-full 
                                side-scroll 2xl:text-[15px] xl:text-[13px] lg:text-[11px] md:text-[9px] sm:text-[7px] text-[5px]">
                                    <div className="">
                                        <p>{arcana[number].meanTH}</p><br/><br/>
                                        <p><a className="noto-sans-thai-font-bold">ความหมายด้านดี:</a> {arcana[number].meanGoodTH}</p><br/>
                                        <p><a className="noto-sans-thai-font-bold">ความหมายด้านลบ:</a> {arcana[number].meanBadTH}</p><br/><br/>
                                        <p><a className="noto-sans-thai-font-bold">ข้อความจากแม่หมอ:</a> {arcana[number].hint}</p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <main className="block max-h-3/4 sm:hidden">
                            <div className="bg-white">

                                <div className="flex justify-center items-center">
                                    <img className="max-w-1/2 rounded-sm m-2" src={path}></img>
                                </div>

                                <div className="side-scroll noto-sans-thai-font m-3 overflow-y-auto h-full text-[8px] sm:text-[11px]">
                                    <div className="">
                                        <p>{arcana[number].meanTH}</p><br/><br/>
                                        <p><a className="noto-sans-thai-font-bold">ความหมายด้านดี:</a> {arcana[number].meanGoodTH}</p><br/>
                                        <p><a className="noto-sans-thai-font-bold">ความหมายด้านลบ:</a> {arcana[number].meanBadTH}</p><br/><br/>
                                        <p><a className="noto-sans-thai-font-bold">ข้อความจากแม่หมอ:</a> {arcana[number].hint}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="m-2">
                                        <Picbutton onClick={() => navigate("/",{replace: true})} max_h={5} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
                                    </div>
                                </div>
                            </div>  
                        </main>

                        <footer className="TemplateColor noto-sans-thai-font text-center text-white rounded-b-lg p-2 shadow-xl">
                            <div className="text-red-500 2xl:text-[14px] xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[7px] text-[7px]">
                                อย่าลืมมาแลกของที่ระลึกฟรีได้ที่บูธชั้น 3 ห้อง 308 น้าาา
                            </div>
                            <div className="noto-sans-thai-font-bold 2xl:text-[12px] xl:text-[10px] lg:text-[8px] md:text-[6px] sm:text-[5px] text-[5px]">
                                made by CSCMU66 
                            </div>
                        </footer> 
                    </div>
                </div>    
            </div>
            

            
        </FadeIn>
    )
}