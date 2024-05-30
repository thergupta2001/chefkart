import { IoArrowBack } from "react-icons/io5"
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="h-20 top-0 left-0 w-full fixed flex items-center z-10">
                <div className="flex items-center px-8 w-full fixed">
                    <div onClick={() => { navigate(-1) }}>
                        <IoArrowBack className="text-2xl mr-4 cursor-pointer hover:move-left transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-medium">{location.pathname === "/" ? 'Select dishes' : ''}</span>
                </div>
            </div>
        </>
    )
}

export default Navbar