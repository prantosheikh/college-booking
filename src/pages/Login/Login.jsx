import { useForm } from "react-hook-form";
import loginImg from "../../assets/Login/Login.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className=" shadow-lg my-10">
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
                  {...register("example")}
                />
              </div>

              <div className="form-contro">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* include validation with required or other standard HTML validation rules */}
                <input
                  className="border  px-4 py-3 w-full"
                  placeholder="Password"
                  {...register("exampleRequired", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <input
                className="bg-blue-600 mt-5 btn-block text-white py-3 rounded-xl font-bold"
                type="submit"
              />
            </form>
            
            <div className="divider">OR</div>
            <div className="flex justify-between items-center text-center pb-6 gap-5 mt-2">
              <button
                type="submit"
                className="bg-blue-600 btn-block py-2 rounded-2xl border  text-white"
              >
                <FcGoogle className="text-white ms-16 lg:ms-36 " />
                Google
                
              </button>

              <button className=" bg-blue-900 btn-block py-2 rounded-2xl border text-white">
                <FaFacebookF className="rounded-2xl ms-16  text-white lg:ms-36" />{" "}
                Facebook
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
