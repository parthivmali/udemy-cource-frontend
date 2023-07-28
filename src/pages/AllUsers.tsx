import { useState, useEffect } from "react"
import { getAllUsers } from "../services/Auth-services"
import { IGetAllUsers } from "../interfaces"


// const people = [
//   {
//     name: 'Jane Cooper',
//     places: '3',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   }
// ]

const AllUsers = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [usersName, setUsersName] = useState([])
    
    const getCategories = async() => {
        await getAllUsers()
        .then((res)=>{
            const fatchData = res?.data
            setUsersName(fatchData)
        }).catch((err) => {
            console.log(err);
            
        });
    }
    
    useEffect(()=>{
        getCategories()
    },[])
    
  return (
    <div>
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center blur-sm"
          />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
      <div className="relative z-10">
        {usersName.length !== 0 ?
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5 mt-5 md:px-20 px-10">
        {usersName.map((person: IGetAllUsers,index:number) => (
            <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-[#373738] shadow-lg">
            <div className="flex w-full items-center justify-between space-x-5 p-4">
                <img className="h-14 w-14 flex-shrink-0 rounded-full bg-white p-1" src={person.image} alt="" />
                <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                    <h3 className="truncate text-md font-bold text-[#FED000]">{person.name}</h3>
                </div>
                <p className="mt-1 truncate text-sm text-white">{person.places.length} Places</p>
                </div>
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

export default AllUsers