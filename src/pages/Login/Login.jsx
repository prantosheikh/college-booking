import { useForm } from "react-hook-form";
import loginImg from "../../assets/Login/Login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const {user, signIn} = useAuth()
  const [error, setError] = useState("");
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
    .then((result) => {
      const user = result.user;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created successfully ",
        showConfirmButton: false,
        timer: 1500,
      });
      setError('')
    })
    .catch((error) => {
      console.log(error.message);
      const costomArror = error.message === "Firebase: Error (auth/user-not-found)." && "User not found. Please verify the entered information and try again."
      setError(costomArror);
    });
  }

  console.log(watch("example"));
  return (
    <div className="shadow-lg my-10">
      <div className="lg:flex px-10 lg:justify-around lg:items-center lg:min-h-screen">
        <div className="lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="lg:w-1/2">
          {" "}
         
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-4xl font-semibold">Welcome! Please Login.</h1>
              <p className="my-4">
                New member?{" "}
                <Link to='/signup' className="text-blue-600 font-semibold">
                  Register here
                </Link>
                .
              </p>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="border w-full px-4 py-3 rounded"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>

              <div className="form-contro mb-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* include validation with required or other standard HTML validation rules */}
                <input
                  className="border  px-4 py-3 w-full"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                  
                />
                 {errors.password && (
                  <span className="text-red-600 mt-3">
                    Name field is required
                  </span>
                 )}
                
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <span className="text-xl mt-2 cursor-pointer" onClick={handleTogglePassword}>
                {passwordVisible ? <BiShow></BiShow> : <BiHide></BiHide>}
              </span>

              <label className="label">
                  <p className="text-red-600">{error}</p>
                </label>

              <input
                className="bg-blue-600 cursor-pointer mt-5 btn-block text-white py-3 rounded-xl font-bold"
                type="submit"
              />
            </form>
            
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;



