import useTimer from "./useTimer";

export default function Timer() {


    const { timer } = useTimer("04-12-2026");


    return (
        <div className="flex items-center justify-center gap-2 md:gap-5 p-3 bg-white">
            {timer && (<>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-[#232323]">{timer.day} :</h2>
                    <p className="font-normal text-[#787878]">Days</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-[#232323]">{timer.hour} :</h2>
                    <p className="font-normal text-[#787878]">Hours</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-[#232323]">{timer.minutes} :</h2>
                    <p className="font-normal text-[#787878]">Mins</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-[#232323]">{timer.seconds}</h2>
                    <p className="font-normal text-[#787878]">Secs</p>
                </div>
            </>)}
        </div>
    )
}





