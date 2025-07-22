import TheFool from "../assets/The_Fool.png";
import TheMagician from "../assets/The_Magician.png";
import TheHighPreistess from "../assets/The_High_Priestess.png";
import TheEmpress from "../assets/The_Empress.png";
import TheEmperor from "../assets/The_Emperor.png";
import TheHierophant from "../assets/The_Hierophant.png";
import TheLovers from "../assets/The_Lovers.png";
import TheChariot from "../assets/The_Chariot.png";
import Strength from "../assets/Strength.png";
import TheHermit from "../assets/The_Hermit.png";
import WheelofFortune from "../assets/Wheel_of_Fortune.png";
import Justice from "../assets/Justice.png";
import TheHangedMan from "../assets/The_Hanged_Man.png";
import Death from "../assets/Death.png";
import Temperance from "../assets/Temperance.png";
import TheDevil from "../assets/The_Devil.png";
import TheTower from "../assets/The_Tower.png";
import TheStar from "../assets/The_Star.png";
import TheMoon from "../assets/The_Moon.png";
import TheSun from "../assets/The_Sun.png";
import Judgement from "../assets/Judgement.png";
import TheWorld from "../assets/The_World.png";
import Backcard from "../assets/back_card.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Picbutton from "../component/button";
import HomeButton from "../assets/HomeButton.png";
import ClickedHomeButton from "../assets/ClickedHomeButton.png";
import ForecastButton from "../assets/ForecastButton.png";
import ClickedForecastButton from "../assets/ClickedForecastButton.png";
import "../pages/css/flip.css"


const Allcard = [TheFool,TheMagician,TheHighPreistess,TheEmpress,TheEmperor,
                 TheHierophant,TheLovers,TheChariot,Strength,TheHermit,
                 WheelofFortune,Justice,TheHangedMan,Death,Temperance,
                 TheDevil,TheTower,TheStar,TheMoon,TheSun,Judgement,TheWorld
                ]

export default function Flipcard(){
    const navigate = useNavigate();
    const location = useLocation();
    const number = location.state as number;
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flex items-center justify-center place-items-center min-h-screen ">
            <div className="bg-white flex items-center justify-center rounded-xl">
                <div className="bg-white items-center justify-center m-2">
                    <div className="">
                        <img className="h-[50dvh] items-center rounded-xl" src={Allcard[number==null?(0):(number)]} alt=""></img>
                    </div>
                    <div className="flex items-center justify-center mt-1 rounded-xl">
                        <Picbutton onClick={() => navigate("/",{ replace: true })} max_h={10} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
                    </div>
                    <div className="flex items-center justify-center mt-1 rounded-xl">
                        <Picbutton onClick={() => navigate("/GetCard",{replace: true,state:[number,Allcard[number]]})} max_h={10} base={ForecastButton} hover={ClickedForecastButton} ></Picbutton>   
                    </div>
                </div>
            </div>
        </div>
        // <div className="bg-white">
        //     <div className="">
        //         <div className="bg-blue-200 h-[50dvh] max-w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-auto perspective cursor-pointer" onClick={() => setFlipped(flipped == false?(true):(true))}>
        //             <div className={`relative items-center justify-center w-full h-full transition-transform duration-700 transform preserve-3d ${flipped ? "rotate-y-180" : ""}`}>   

        //                 {/* ด้านหลัง */}
        //                 {/* <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center text-xl rotate-y-180 backface-hidden rounded-lg shadow-lg"> */}
        //                 <div className="absolute w-full h-full text-white flex items-center justify-center text-xl backface-hidden rounded-lg">
        //                     <img className="h-[50dvh] items-center rounded-xl" src={Backcard} alt=""></img>
        //                 </div>

        //                 {/* ด้านหน้า */}
        //                 {/* <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center text-xl backface-hidden rounded-lg shadow-lg"> */}
        //                 <div className="absolute w-full h-full text-white flex items-center justify-center text-xl rotate-y-180 backface-hidden rounded-lg">
        //                     <img className="h-[50dvh] items-center rounded-xl" src={Allcard[number==null?(0):(number)]} alt=""></img>
        //                 </div>                    
        //             </div>
        //         </div>  
        //     </div>
            
        //     <div className="bg-green-500 m-2 flex justify-center">
        //         <Picbutton onClick={() => navigate("/",{ replace: true })} max_h={10} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
        //     </div>
        //     <div className="bg-orange-500 m-2 flex justify-center">
        //         <Picbutton onClick={() => navigate("/GetCard",{replace: true,state:[number,Allcard[number]]})} max_h={10} base={ForecastButton} hover={ClickedForecastButton} ></Picbutton>   
        //     </div>
        // </div>
    );
}