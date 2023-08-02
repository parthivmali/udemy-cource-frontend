import { useFormik } from "formik"
import { IAddPlace, IApiResponse } from "../interfaces";
import { AddPlaceSchema } from "../schemas/AddPlaceSchema";
import { addPlace } from "../services/Auth-services";
import { useEffect, useState } from "react";
// import { AxiosError, AxiosResponse } from "axios";
// import Swal from "sweetalert2";

const AddPlace = () => {
  const [data, setData] = useState<IApiResponse>()
  // const navigate = useNavigate()
  useEffect(() => {
    const getLocalData = localStorage.getItem('user')
    if(getLocalData){
      const localData = JSON.parse(getLocalData);
      setData(localData);
    }
  }, [])
  
  const formik = useFormik({
    initialValues: {
      creator : data?._id,
      title:'',
      description:'',
      address:''
    },
    validationSchema:AddPlaceSchema,
    onSubmit: (values : IAddPlace) => {
      console.log(values);
      const {title, description, address} = values;
      const createdPlace:IAddPlace = {
        creator : data?._id,
        title,
        description,
        address
      }
      addPlace(createdPlace)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  })
  return (
    <div className="relative z-10">
      <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          alt=""
          className="h-full w-full object-cover object-center absolute"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50 "/>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative z-10">
          <div className="mx-auto sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Add Your Place . . . .
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.title && formik.touched.title ? <p className="text-red-500 flex items-center">{formik.errors.title}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.description && formik.touched.description ? <p className="text-red-500 flex items-center">{formik.errors.description}</p> : null}
                </div>
              </div>

              <div>
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-white">
                    Address
                  </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.address && formik.touched.address ? <p className="text-red-500 flex items-center">{formik.errors.address}</p> : null}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add Place
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlace