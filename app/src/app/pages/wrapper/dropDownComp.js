export default function dropDrownComp(noti){
    console.log("Noti: ", noti);
    return(
        <div className="relative w-[400px] h-[90px] bg-white border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
            <div className="absolute flex flex-col w-9/10 h-3/4 top-2 bottom-2 my-auto ml-7 justify-between">
                <h3 className="font-Gilroy_md text-lg text-blue flex flex-row">
                    Your book {noti.content} has been approved
                </h3>
                <p className="font-Gilroy_md text-md text-blue">
                    Tue 19/12/2023 &emsp; 22h
                </p>
            </div>
        </div>
    );
} 