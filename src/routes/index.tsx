import { Routes,Route } from "react-router-dom"
import Signup from "../components/authentication/Signup"
import Home from "../pages/Home"
import Private from "./private"
import Public from "./public"
import Login from "../pages/Login"
import AllUsers from "../pages/AllUsers"

const index = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Private/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<AllUsers/>}/>
            </Route>
            <Route path="/" element={<Public/>}>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default index