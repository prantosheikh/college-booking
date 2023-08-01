import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/SignUp/SignUp.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL);
        const saveUser = {
          name: data.name,
          email: data.email,
          photo: data.photoURL,
          date: data.date,
        };

        fetch("https://college-server-kappa.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="shadow-lg my-10 lg:px-12">
      <div className="lg:flex px-10 lg:justify-around lg:items-center lg:min-h-screen">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold ">Create your Account.</h1>
          <p className="mb-5">
            Already member?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login here.
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6 justify-around w-full">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-3">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  {...register("userPhoto", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-3">
                    Photo field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-6 justify-around w-full">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-3">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Date of birth</span>
                </label>
                <input
                  type="date"
                  placeholder="Date of birth"
                  {...register("date", { required: true })}
                  className="input input-bordered"
                />
                {errors.date && (
                  <span className="text-red-600 mt-3">
                    Date field is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 mt-3">
                  Password field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-3">
                  Password must be 6 Characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 mt-3">
                  Password must be one upper case one lower case one sipecil
                  Characters
                </span>
              )}
              <label className="label">
                <p className="text-red-600">{error}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="bg-blue-700 rounded-xl border  w-100  text-white font-semibold py-4"
              >
                Login
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>

        <div className="lg:w-1/2">
          <img src={signupImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
