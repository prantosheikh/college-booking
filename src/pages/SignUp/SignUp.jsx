import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it



  return (
    <div className="my-10 w-full lg:w-4/6 mx-auto">
      <div className="my-1 mx-auto">
        <div className="">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body ">
              <h1 className="text-3xl font-semibold">Create your Account.</h1>
              <p>
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
                      {...register("name")}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="PhotoURL"
                      {...register("userPhoto")}
                      className="input input-bordered"
                    />
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
                      {...register("email")}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Date of birth</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Date of birth"
                      {...register("date")}
                      className="input input-bordered"
                    />
                  </div>
                
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type=""
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    
                   
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

              <div className="divider">OR</div>
              <div className="flex justify-around items-center text-center gap-5 mt-2">
                <button
                  type="submit"
                  className="bg-primary py-1 rounded-2xl border w-1/2 text-white"
                >
                  <FcGoogle className="text-white ms-16 lg:ms-48  my-1 me-4" />
                  Google
                </button>

                <button className=" bg-blue-900 py-1  rounded-2xl border  w-1/2  text-white ">
                  <FaFacebookF className=" rounded-2xl ms-16  text-white lg:ms-48 my-1" />{" "}
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
