import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { ISignin } from "../../interfaces";
import { SignupSchema } from "../../schemas/SignupSchema";
import { userSignup } from "../../services/Auth-services";
import Swal from "sweetalert2";


const Signup = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },
    validationSchema:SignupSchema,
    onSubmit: async (values : ISignin) => {
      // console.log(values);
      const { name , email, password} = values
      const signupData = {
        name,
        email,
        password
      };
      try {
        const response = await userSignup(signupData);
        console.log(response);
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  })
  return (
    <div>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
          />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50 "/>
        <div className="relative z-10">
          <div className="mx-auto sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" action="#" method="POST" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.name && formik.touched.name ? <p className="text-red-500 flex items-center">{formik.errors.name}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.email && formik.touched.email ? <p className="text-red-500 flex items-center">{formik.errors.email}</p> : null}
                </div>
              </div>

              <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  {formik.errors.password && formik.touched.password ? <p className="text-red-500 flex items-center">{formik.errors.password}</p> : null}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-300">
            Already have an account?{' '}
              <Link to={"/login"} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup