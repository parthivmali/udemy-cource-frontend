import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { LoginSchema } from "../../schemas/LoginSchema";
import { ILogin } from "../../interfaces";
import { userLogin } from "../../services/Auth-services";
import Swal from "sweetalert2";
import { AxiosError} from "axios";


const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    validationSchema:LoginSchema,
    onSubmit: (values : ILogin) => {
      // console.log(values);
      const {email, password} = values
      const loginData = {
        email,
        password
      }

      userLogin(loginData)
      .then((res) => {
        if(res){
          void Swal.fire({
            icon: 'success',
            title: 'Logged in successfully',
          }).then(() => {
              navigate('/')
          });  
         }else{
          console.log("Please enter valid email or password");
         }
      }).catch((err:AxiosError<string>) => {
        console.log(err);
          
      });
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
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
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
                  Login
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{' '}
              <Link to={"/signup"} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login