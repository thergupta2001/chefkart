import refrigerator from "../assets/refrigerator.png";
import PropTypes from 'prop-types';

const InfoAdd = ({ name, description }) => {
    const imageSrc = 'https://imgs.search.brave.com/F_-TQX3GXj2oUW82vWp8WSUPu1vDeETl7_4aj2sdzIg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL1ZlZ19zeW1i/b2wuc3Zn.svg';

    return (
        <div className="justify-center mt-2 flex flex-col">
            <div className="m-2 md:text-2xl text-md font-semibold flex items-center">
                <span>{name}</span>
                <img src={imageSrc} className="w-4 h-4 mx-1 mt-0.5" />
            </div>

            <div className="mx-2 mb-2 mt-2 md:text-2xl flex text-md font-semibold items-center">
                <div className="w-1/4 flex border-r border-gray-400">
                    <img src={refrigerator} className="w-6 mr-3" />
                    <img src={refrigerator} className="w-6" />
                </div>
                <div className="flex flex-col mx-6">
                    <p className="text-xs font-semibold">Ingredients</p>
                    <p className="text-xs font-bold text-orange-600">View {`>`}</p>
                </div>
            </div>

            <div className="m-2 font-50 text-xs text-gray-600">
                <span className="font-semibold md:text-md text-sm">
                    {description}
                </span>
            </div>
        </div>
    )
}

export default InfoAdd

InfoAdd.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};