import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        console.log(name, email, url, password);

        setError('');
        if (email == null) {
            setError("Email Must Required");
        }
        if (password < 6) {
            setError("Password Must be 6 characters")
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                if(user != null){
                    alert("Register Successful");
                }
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }


    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="url" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                                <div>
                                    <p>Already Have an Account? <Link className=" text-blue-500" to="/login">Login</Link> </p>
                                </div>
                                <div>
                                    <p className=" text-red-400">{error}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;