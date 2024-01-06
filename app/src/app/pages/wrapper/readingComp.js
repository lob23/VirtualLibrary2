"use client";
import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar completed={60} />;
};

export default function reading_list_comp(){
    return(
        <>
        <div className="relative w-[500px] h-[270px] bg-cream bg-opacity-60 rounded-3xl px-5 py-3 shadow-lg">
            <div className="absolute grid grid-flow-col grid-cols-3 w-full h-full top-0 bottom-0 right-0 left-0">
                <div className="col-span-1 w-[150px] h-[210px] m-auto">
                    <img className="object-cover w-full h-full rounded-3xl"
                         src="/image/book.png">
                    </img>
                </div>
                <div className="col-span-2 flex flex-col w-full h-auto ml-5 py-10">
                    <h2 className="font-Gilroy_sb w-auto h-auto text-blue text-3xl mt-5">
                        The girls I've been
                    </h2>
                    <h4 className="font-Gilroy_sb w-auto h-auto text-blue text-2xl mt-2">
                        Tess Sharpe
                    </h4>
                    <div className="w-4/5 h-3 bg-cream rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-yellow" style={{ width: '50%' }}></div>
                    </div>
                    <div className="w-4/5 h-auto flex flex-row item-stretch">
                        <p className="font_Gilroy_md w-full h-full text-yellow text-md mt-2 text-left">
                            60%
                        </p>
                        <p className="font_Gilroy_md w-full h-full text-yellow text-md mt-2 text-right">
                            60/100
                        </p>
                    </div>
                    <div className="relative w-full h-full">
                        <button className="absolute font_Gilroy_sb right-10 bottom-3 w-auto px-8 py-1 button_white text-blue text-2xl">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    );
}