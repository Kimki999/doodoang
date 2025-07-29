import TheFool from "../assets/00_the_fool.png";
import TheMagician from "../assets/01_the_magician.png";
import TheHighPreistess from "../assets/02_the_high_priestess.png";
import TheEmpress from "../assets/03_the_empress.png";
import TheEmperor from "../assets/04_the_emperor.jpg";
import TheHierophant from "../assets/05_the_hirophant.jpg";
import TheLovers from "../assets/06_the_lovers.jpg";
import TheChariot from "../assets/07_the_chariot.jpg";
import Strength from "../assets/08_strength.jpg";
import TheHermit from "../assets/09_the_hermit.png";
import WheelofFortune from "../assets/10_the_wheel.png";
import Justice from "../assets/11_justice.png";
import TheHangedMan from "../assets/12_hanged_man.png";
import Death from "../assets/13_Death.png";
import Temperance from "../assets/14_Temperance.png";
import TheDevil from "../assets/15_The_Devil.png";
import TheTower from "../assets/16_The_Tower.png";
import TheStar from "../assets/17_The_Star.jpg";
import TheMoon from "../assets/18_The_Moon.jpg";
import TheSun from "../assets/19_The_Sun.jpg";
import Judgement from "../assets/20_Judgement.jpg";
import TheWorld from "../assets/21_The_World.jpg";
import Backcard from "../assets/back_card.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Picbutton from "../component/button";
import HomeButton from "../assets/HomeButton.png";
import ClickedHomeButton from "../assets/ClickedHomeButton.png";
import ForecastButton from "../assets/ForecastButton.png";
import ClickedForecastButton from "../assets/ClickedForecastButton.png";
import "../pages/css/flip.css"
import FadeIn from "../component/fadeIn";


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


    console.log(location.pathname)

    return (
            <FadeIn>
                <div className="flex items-center justify-center place-items-center min-h-screen ">
                    <div className="bg-white flex items-center justify-center rounded-xl">
                        <div className="items-center justify-center m-2">
                            <div className="roboto-font-bold text-lg flex items-center justify-center 
                            text-red-500 underline decoration-red-500 2xl:text-2xl xl:text-xl lg:text-lg">
                                !!! Click on card !!!
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="perspective cursor-pointer w-49 h-80" onClick={() => setFlipped(flipped==false?(true):(true))}>
                                    <div className={`relative transition-transform duration-700 preserve3D ${flipped==false?("flip180"):("")}`}>
                                        {/* Back Card */}
                                        <div className="absolute rounded-xl backface-hidden flip180 m-2">
                                            <img className="max-h-1/2 items-center rounded-xl shadow-l object-cover" src={Backcard} alt=""></img>
                                        </div>

                                        {/* Front Card */}
                                        <div className="absolute rounded-xl backface-hidden m-2">
                                            <img className="max-h-1/2 items-center rounded-xl shadow-l object-cover" src={Allcard[number==null?(0):(number)]} alt=""></img>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                                
                            <div className="flex items-center justify-center mt-1 rounded-xl">
                                <Picbutton onClick={() => navigate("/",{ replace: true })} max_h={10} base={HomeButton} hover={ClickedHomeButton}></Picbutton>
                            </div>
                            <div className="flex items-center justify-center mt-1 rounded-xl">
                                <Picbutton onClick={() => navigate("/GetCard",{replace: true,state:[number,Allcard[number]]})} max_h={10} base={ForecastButton} hover={ClickedForecastButton} ></Picbutton>   
                            </div>

                            <div className="noto-sans-thai-font-bold text-center m-2 text-red-500 text-xs">
                                อย่าลืมมาแลกของที่ระลึกฟรีได้ที่บูธชั้น 3 ห้อง 308
                            </div>
                            <div className="flex items-center justify-center m-2 text-xs roboto-font-bold">
                                made by CS66 CMU student
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

    );
}