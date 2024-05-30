import InfoAdd from "./InfoAdd"
import ImageAdd from "./ImageAdd"
import PropTypes from 'prop-types';

const Card = ({ name, description, image }) => {
    return (
        <div className="md:w-2/3 w-[90%] flex border-b border-gray-300 py-5">
            <div className="w-3/5">
                <InfoAdd name={name} description={description} />
            </div>
            <div className="w-2/5 flex items-center justify-end">
                <div className="p-3 items-center">
                    <ImageAdd image={image} />
                </div>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};