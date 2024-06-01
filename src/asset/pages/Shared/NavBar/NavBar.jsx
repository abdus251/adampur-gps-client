import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../../../assets/home/logos.png'
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useCart from "../../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><Link className="ml-60" to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad">Order Food</Link></li>
    <li><Link to="/secret">Secret</Link></li>
    <li>
      <Link to="/dashboard/mycart">
        <button className="btn gap-2">
          <FaShoppingCart></FaShoppingCart>
        
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button>
      </Link>
    </li>

    {
      user ? <>

        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }

    <li><a>Item 3</a></li>
  </>
  return (
    <nav>
      <div className="navbar fixed z-10 bg-opacity-30 bg-pink-400  text-primary-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className="pr-4" src={logo} style={{ height: "100%" }} alt="" />আদমপুর সরকারি প্রাথমিক বিদ্যালয়, বন্দর, নারায়ণগঞ্জ</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;