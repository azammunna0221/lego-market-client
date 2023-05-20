import userPic from "../../../images/user.jpg"
import logo from "../../../images/Lego.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error.message));
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Toys
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>All Toys</a></li>
                                    <li><a>My Toys</a></li>
                                    <li><a>Add A Toys</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className=" w-36" src={logo} alt="Site Logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        {
                            user &&
                            <>
                                <li><a>All Toys</a></li>
                                <li><a>My Toys</a></li>
                                <li><a>Add A Toys</a></li>
                            </>
                        }
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-outline mr-5">Logout</button> :
                            <Link to="/login"><button className="btn btn-outline mr-5">Login</button></Link>
                    }
                    {
                        user &&
                        <div className="avatar online">
                            <div className=" w-10 rounded-full">
                                <img src={userPic} />
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;