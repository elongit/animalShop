
import { NavLink } from "react-router-dom"
function Button({label , path}) {
  return (
   <button className="text-xl text-white bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded py-3 px-8">
        <NavLink to={path}>
            {label}
        </NavLink>
   </button>
  )
}

export default Button