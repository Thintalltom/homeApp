import { Link } from "react-router-dom"
import Home from 'remoteApp/Home'
import Action from 'designApp/Apx'
import Products from 'remoteApp/Alt'
const Navbar = () => {
   
  return (
    <div>
        <nav className=" bg-slate-500 flex justify-center  p-[10px] gap-[20px]">
         
         <Action />
         <Products />
        </nav>
    </div>
  )
}

export default Navbar