import { useEffect, useState } from "react"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"
import TimeCard from "../components/TimeCard"
import Types from "../components/Types"
import "./Page.css"
import Card from "../components/Card"

const Page = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
                const data = await response.json();

                setDishes(data.dishes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <TimeCard />
            <Types />
            <Menu />

            <div className="flex justify-between items-center p-4 mt-3 md:mx-10 ">
                <div>
                    <p
                        className="text-xl md:text-4xl font-bold cursor-pointer"
                        onClick={() => { setDropdownVisible(!isDropdownVisible); }}>
                        Recommended
                    </p>
                    {isDropdownVisible && (
                        <div className="right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
                            </div>
                        </div>
                    )}
                </div>
                <button className="bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg">
                    Menu
                </button>
            </div>

            <div className="items-center flex flex-col justify-center mb-4">
                {dishes.map((dish, index) => (
                    <Card key={index} name={dish.name} description={dish.description} image={dish.image} />
                ))}
            </div>
        </>
    )
}

export default Page