import PropTypes from 'prop-types';

const ImageAdd = ({ image }) => {
    return (
        <div className="flex flex-col mt-1.5">
            <div className="rounded-lg relative">
                <div className="relative">
                    <img src={image} className="md:h-20 md:w-24 h-20 w-40 rounded-lg" />
                </div>
                <div className="w-full flex justify-center -top-2 relative">
                    <button className="flex flex-col text-center text-md font-semibold hover:bg-orange-500 hover:text-white text-orange-600 bg-red-50 px-6 border border-orange-500 rounded-lg ">
                        <div className="">Add</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageAdd

ImageAdd.propTypes = {
    image: PropTypes.string.isRequired
};