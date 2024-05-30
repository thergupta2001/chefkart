import refrigerator from "../assets/refrigerator.png";

const List = () => {

    return (
        <>
            <div className="md:w-1/2 w-[90%]">
                <p className="w-full text-md md:text-2xl font-bold text-gray-900">Vegetables (05)</p>
                <div className="flex mt-3">
                    <span className="w-1/2 md:text-xl text-xs text-gray-600">Cauliflower</span>
                    <span className="w-1/2 flex justify-end md:text-xl text-xs text-gray-600">01 pc</span>
                </div>
                <div className="flex mt-3">
                    <span className="w-1/2 md:text-xl text-xs text-gray-600">Tomato</span>
                    <span className="w-1/2 flex justify-end md:text-xl text-xs text-gray-600">10 pc</span>
                </div>
                <div className="flex mt-3">
                    <span className="w-1/2 md:text-xl text-xs text-gray-600">Spinach</span>
                    <span className="w-1/2 flex justify-end md:text-xl text-xs text-gray-600">1/2 kg</span>
                </div>
            </div>

            <div className="md:w-1/2 w-[90%] mt-10">
                <p className="w-full text-md md:text-2xl font-bold text-gray-900">Spices (10)</p>
                <div className="flex mt-3">
                    <span className="w-1/2 md:text-xl text-xs text-gray-600">Coriander</span>
                    <span className="w-1/2 flex justify-end md:text-xl text-xs text-gray-600">100 gm</span>
                </div>
                <div className="flex mt-3">
                    <span className="w-1/2 md:text-xl text-xs text-gray-600">Mustard Oil</span>
                    <span className="w-1/2 flex justify-end md:text-xl text-xs text-gray-600">1/2 litres</span>
                </div>
            </div>

            <div className="md:w-1/2 w-[90%] mt-10">
                <p className="w-full text-xl md:text-3xl font-bold text-gray-900">Appliances</p>
                <div className="flex overflow-x-auto mx-2 md:mx-10">
                    <div className="p-5 flex-shrink-0">
                        <img
                            src={refrigerator}
                            className="md:w-20 md:h-20 w-10 h-10"
                        />
                    </div>
                    <div className="p-5 flex-shrink-0">
                        <img
                            src={refrigerator}
                            className="md:w-20 md:h-20 w-10 h-10"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default List