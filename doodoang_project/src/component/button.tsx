import { useState } from "react";

type button = {
    max_h: number,
    link?: string,
    base: string,
    hover: string,
    onClick?: () => any 
}

export default function Picbutton(button:button){
    const [imgB,setimgB] = useState<string>(button.base);

    function onHover(){
        setimgB(button.hover);
    }

    function onMouseleave(){
        setimgB(button.base);
    }

    // โค้ดพี่เอิร์ท ขอบคุณค่ะ สาธุๆๆๆ
    if (button.link) {
        return <a onMouseOver={onHover} onMouseLeave={onMouseleave} href={button.link}>
            <img 
                style={button.max_h ? { maxHeight: `${button.max_h}dvh` } : undefined}
                src={imgB}
                alt=""/>
        </a>
    }
    return (<img
        onMouseOver={onHover} onMouseLeave={onMouseleave}
        onClick={button.onClick}
        style={button.max_h ? { maxHeight: `${button.max_h}dvh` } : undefined}
        className="cursor-pointer"
        src={imgB}
        alt=""/>)
    // โค้ดพี่เอิร์ท ขอบคุณค่ะ สาธุๆๆๆ
}