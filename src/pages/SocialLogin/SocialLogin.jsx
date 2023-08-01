import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
          const loggedInUser = result.user;
          const saveUser = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            photo: loggedInUser.photoURL,
          };

          fetch("https://college-server-kappa.vercel.app//users", {
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
          })
            navigate(from, {replace: true})
            console.log(loggedInUser);
        })
    }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-around items-center text-center gap-5 mt-2">
        <button
          onClick={handleGoogleSignIn}
          type="submit"
          className="bg-primary py-1 rounded-2xl border w-1/2 text-white"
        >
          <FcGoogle className="text-white ms-16 lg:ms-36  my-1 me-4" />
          Google
        </button>

        <button className=" bg-blue-900 py-1  rounded-2xl border  w-1/2  text-white ">
          <FaFacebookF className=" rounded-2xl ms-16  text-white lg:ms-36 my-1" />{" "}
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
