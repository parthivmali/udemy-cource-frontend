import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const index = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default index