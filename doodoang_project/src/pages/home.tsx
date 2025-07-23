import { useNavigate } from "react-router-dom";
import Random from "../component/Random"
import Picbutton from "../component/button"
import RandomButton from "../assets/RandomButton.png";
import ClickedRandomButton from "../assets/ClickedRandomButton.png";
import FadeIn from "../component/fadeIn";

export default function Home(){
    const navigate = useNavigate();
    
    function getRandom(){
        return Math.floor(Math.random() * 22);
    }

    // console.log(location.pathname)
    // console.log(window.history.length)

    return (
        <FadeIn>
            <div className="flex items-center justify-center min-h-screen">
                <div className="mx-auto max-w-3/4 overflow-hidden rounded-xl bg-white shadow-md text-black">
                    <div className="flex items-center justify-center m-3 text-lg roboto-font-bold 2xl:text-2xl xl:text-xl lg:text-lg">
                        DooDoang
                    </div>
                    <div className="m-2">
                        <Random></Random> 
                    </div>
                    <div className="flex items-center justify-center m-2">
                        <Picbutton onClick={() => navigate("/FlipCard",{state:getRandom()})} max_h={10} base={RandomButton} hover={ClickedRandomButton}></Picbutton>
                    </div>
                    <div className="flex items-center justify-center m-4 text-xs roboto-font-bold">
                        made by CS66 CMU student
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}