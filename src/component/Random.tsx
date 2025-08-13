import "../component/css/Random.css";
import BackC from "../assets/back_card.png";

const backC_arr = [ BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,
                    BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC,BackC
                ]

export default function Random(){

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll-left w-max">
                {/* แสดงภาพ 2 รอบเพื่อทำ loop ไม่มีที่สิ้นสุด */}
                {[...backC_arr, ...backC_arr].map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-[40dvh] w-auto mx-4 inline-block 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-sm"
                />
                ))}
            </div>
        </div>
    );
}