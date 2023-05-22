import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const [error, setError] = useState(null);
    const { login, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from);
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }
    const handleGoogleLogin = () =>{
        googleUser()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-col-1 md:grid-cols-2 gap-5">
                    <div className=" ml-20 border ">
                        <img className=" w-auto" src="login.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                                </div>
                                <div>
                                    <p>Have No Account? <Link className=" text-blue-500" to="/register">Register</Link> </p>
                                </div>
                                <div>
                                    <p className=" text-red-400">{error}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;