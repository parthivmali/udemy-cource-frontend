import { useState, useEffect } from "react"
import { getAllPlaces } from "../services/Auth-services"
import { IApiResponse, ICreatorId, IGetAllPlaces } from "../interfaces"
import { useLocation } from "react-router-dom"


const MyPlaces = () => {
    const [placesData, setPlacesData] = useState([])
    const [currentUserPlaces, setCurrentUserPlaces] = useState([]);
    const [data, setData] = useState<IApiResponse>()
    const location = useLocation();

    const singleUserPlace = location.state?.singleUserPlace || [];
    console.log("Received singleUserPlace =>", singleUserPlace);

    let place;
    const getPlaces = async() => {
        await getAllPlaces() 
        .then((res) => {
           place = res?.data.places
            setPlacesData(place);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    useEffect(()=>{
        getPlaces()
    },[])

  useEffect(() => {
    const getLocalData = localStorage.getItem('user')
    if(getLocalData){
      const localData = JSON.parse(getLocalData);
      setData(localData);
    }
  }, [])
  
    const loggedInUserId = data?._id

    useEffect(() => {
        setCurrentUserPlaces(placesData.filter((place:ICreatorId) => place.creator === loggedInUserId));
      }, [placesData, loggedInUserId]);

    const combinedData = singleUserPlace.length !== 0 ? singleUserPlace : currentUserPlaces;
  return (
    <div className="relative">
      <img
        src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
        alt=""
        className="h-full w-full object-cover object-center absolute"
      />
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50 "/>
        <div className="relative z-10 py-20">
        {placesData.length !== 0 ?
        <ul role="list" className="py-10">
        {combinedData.map((person:IGetAllPlaces,index:number) => (
            <li key={index} className="md:max-w-sm mx-auto bg-white border rounded-md mb-5">
            <div className="flex items-center justify-center">
                <img className="w-96 h-96 " src={person.image} alt="" />
            </div>
            <div className="space-y-1 text-center my-2">
                <h2 className="font-bold text-2xl">{person.title}</h2>
                <p className="font-semibold text-lg text-gray-600">{person.description}</p>
                <p className=" text-md text-gray-600">{person.address}</p>
            </div>
            <div className="border-t mt-4 flex items-center justify-around">
                <button className="border border-pink-500 p-1 px-2 text-center font-bold text-pink-600 hover:bg-pink-600 hover:text-white my-3">VIEW ON MAP</button>
                <button className="p-1 px-5 text-center font-bold bg-pink-700 text-white hover:bg-pink-600 my-3">EDIT</button>
                <button className="p-1 px-3 text-center font-bold bg-orange-800 hover:bg-orange-900 text-white my-3">DELETE</button>
            </div>
            </li>
        ))}
        </ul>
        : 
        <div className="flex items-center justify-center">
            <p className="text-center mt-10 px-2 text-white font-semibold text-xl bg-[#AC876D] sm:max-w-sm">
                No place found. Maybe create one? 
            </p>
        </div>
        }
      </div>
    </div>
  )
}

export default MyPlaces