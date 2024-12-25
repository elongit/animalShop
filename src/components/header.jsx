import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="shadow p-3 text-lg flex justify-between items-center">
      <h1 className="text-primary-color font-bold text-4xl flex">
        <NavLink to="/" aria-label="Home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8334/8334173.png"
            alt="Company Logo"
            className="w-14"
          />
        </NavLink>
      </h1>

      {/* Main Navigation */}
      <nav>
        <ul className="flex items-center gap-5 text-gray-600 font-semibold">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              className={({ isActive }) => isActive ? 'text-primary-color' : ''}
            >
              Home
            </NavLink>
          </li>
       
          <li>
            <NavLink
              to="/product"
              aria-label="Products"
              className={({ isActive }) => isActive ? 'text-primary-color' : ''}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              aria-label="Contact Us"
              className={({ isActive }) => isActive ? 'text-primary-color' : ''}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* User & Cart Navigation */}
      <nav className="w-fit">
        <ul className="flex items-center gap-5 text-gray-600 font-semibold">
          <li>
            <NavLink
              to="/login"
              aria-label="Login"
              className={({ isActive }) => isActive ? 'text-primary-color' : ''}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" aria-label="Shopping Cart"   className={({ isActive }) => isActive ? 'text-primary-color' : ''}>
              <FontAwesomeIcon icon={faCartShopping} size="2x" className="cursor-pointer"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
