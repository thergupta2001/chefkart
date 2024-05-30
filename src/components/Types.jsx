
const Types = () => {
    return (
        <div>
            <div className="flex overflow-x-auto md:px-10 px-5">
                {Array.from({ length: 10 }, (_, i) => (
                    <button key={i} className="text-gray-500 md:px-8 md:py-2 px-4 py-1 rounded-full md:m-2 mx-1 hover:text-orange-400 hover:border-orange-400 transition-transform duration-300 border border-gray-400">
                        Indian
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Types