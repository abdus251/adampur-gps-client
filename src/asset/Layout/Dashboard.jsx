import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>


                <div className="w-full navbar">
                    <div className="h-full bg-[#D1A054] ">
                        <label htmlFor="my-drawer-2"></label>
                        <ul className="menu p-4 w-80">
                            {/* Sidebar content here */}
                            <li><NavLink to="dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                            <li><NavLink to="dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart   <span className="badge badge-secondary">+{cart?.length || 0}</span>
                              </NavLink>
                                
                                </li>

                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome>Home</FaHome></NavLink></li>
                            <li><NavLink to="/menu">Our Menu</NavLink></li>
                            <li><NavLink to="/order/salad">Order Food</NavLink></li>


                        </ul>

                    </div>

                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg-hidden">Open drawer</label>
                {/* Page content here */}
                <h2 className="text-center">My Cart</h2>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

            </div>
        </div>
    );
};

export default Dashboard;