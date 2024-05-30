import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DishDetails from "../components/DishDetails";
import List from "../components/List";

const Details = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1');
                const data = await response.json();
                console.log(data);
                setDetails(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <DishDetails name={details.name} time={details.timeToPrepare} />

            <div className="md:-my-55 -my-20">
                <p className="mx-5 md:mx-10 md:text-3xl text-xl font-bold">Ingredients</p>
                <p className="mx-5 md:mx-10 md:text-xl text-sm font-semibold md:mt-3 mt-2 text-gray-600">For 2 people</p>

                <div className="flex items-center flex-col mt-6">
                    <List  />
                </div>
            </div>
        </>
    )
}

export default Details