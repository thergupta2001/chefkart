const Menu = () => {
    const imageSrc = 'https://imgs.search.brave.com/lqB_fXOeiu6-zvtduEwxa3GXdc7c75T8ReSL7o-tjA8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdXZh/aXVzLmNvbS9hc3Nl/dHMvY2hpY2tlbl9i/aXJ5YW5pLmpwZw'; // Single image link
    const imageElements = [];

    for (let i = 0; i < 15; i++) {
        imageElements.push(
            <div key={i} className="p-2 flex-shrink-0">
                <img
                    src={imageSrc}
                    alt={`Image ${i + 1}`}
                    className="md:w-20 md:h-20 w-16 h-16 rounded-full object-cover border-4 border-orange-500"
                />
            </div>
        );
    }

    return (
        <div>
            <p className="mt-5 md:mx-10 mx-2 text-xl md:text-4xl font-bold md:p-3 p-1 mb-4 border-b border-gray-400">Popular Dishes</p>
            <div className="flex overflow-x-auto mx-2 md:mx-10">
                {imageElements}
            </div>
        </div>
    )
}

export default Menu