import PropTypes from 'prop-types';

const DishDetails = (props) => {
    const vegetabelImg = "https://imgs.search.brave.com/ibfJ1yFD7l0RvP84k7O15hvYCyloUPuGPb__m9g9vmU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQzLzc4LzM4/LzM2MF9GXzE0Mzc4/Mzg2OF95cUNFaHZL/ZlpQdHdWZElGQjRz/SjdySkJSdzh0bnEz/Yy5qcGc";
    const clock = "https://imgs.search.brave.com/MyJVfwV9MWiCINpFq78FE_m-7rSPty0BEgUXrosYcik/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzY4Lzg5Lzg5/LzM2MF9GXzI2ODg5/ODkyOF9wUFZNSXpB/TDR4dXVlV3JsRDZF/SmpSVzd5dFlvbE5L/US5qcGc";

    return (
        <div className="pt-20 relative overflow-hidden -mt-5">
            <div className="md:h-96 relative items-center justify-center border-b border-gray-500">
                <p className="text-black mx-5 md:mx-8 pt-5 text-2xl md:text-5xl md:pt-8 font-extrabold">{props.name}</p>
                <p className="w-1/2 text-gray-600 mx-5 md:mx-8 py-5 text-xs md:text-xl md:py-8 font-medium">
                    It is a type of cookery developed in the Indian Subcontinent by imperial kitchens of Mughal Empire.
                </p>
                <div className="w-1/3 flex mx-5 md:mx-8">
                    <img src={clock} className="md:h-10 mr-3 h-5 mb-4" />
                    <span className="font-semibold md:text-xl md:mt-1 text-sm">{props.time}</span>
                </div>
            </div>
            <div className="relative md:-top-60 -top-16 -right-20 w-full flex justify-end">
                <img src={vegetabelImg} className="w-[50%]" />
            </div>
        </div>
    );
};

DishDetails.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
};

export default DishDetails;
