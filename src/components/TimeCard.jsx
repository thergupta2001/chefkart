const TimeCard = () => {
    return (
        <div className="pt-20 relative">
            <div className="md:h-24 h-16 bg-black relative items-center justify-center">
            </div>
            <div className="relative -top-10 mx-auto h-16 w-4/5 sm:w-4/5 md:w-1/3 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="flex-1 ml-2 border-r border-slate-300 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <p className="text-md font-semibold">12 May 2021</p>
                </div>

                <div className="flex-1 justify-end text-right mr-4 border-l border-slate-300 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <p className="text-md font-semibold">12 May 2021</p>
                </div>
            </div>
        </div>
    )
}

export default TimeCard