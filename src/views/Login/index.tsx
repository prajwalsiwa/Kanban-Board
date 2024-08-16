import { useState } from "react";
import googleIcon from "@Assets/Google.svg";
import kanban from "@Assets/kanbanImage.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type loginData = {
  email: string;
  password: string;
};

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>();

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLoginSubmit = () => {};

  return (
    <div className="w-screen h-screen flex text-black">
      <div className="image h-full xl:w-[60%]  ">
        <img src={kanban} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="login h-full  w-[55rem]  bg-gray-100 flex items-center justify-center  gap-10   flex-col">
        <div className="flex flex-col w-full justify-center gap-5 items-center">
          <h1>Kanban Board</h1>
          <h3>Stop starting, start finishing</h3>
        </div>
        <div className="flex justify-center items-center gap-12 flex-col w-[40rem]">
          <div className="flex justify-center items-center flex-col gap-10">
            <h2 className="text-xl">Welcome to Kanban Board</h2>
          </div>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                    pattern: {
                      value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  id="username"
                  type="text"
                  className="border w-[20rem] rounded-lg border-b-1 bg-white  naxatw-border-gray-300  py-2 px-1  focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-400 "
                />
                <p className="text-red-500">{errors?.email?.message}</p>
              </div>
              <div className="flex flex-col justify-start items-start w-full relative ">
                <label htmlFor="password">Password</label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                  })}
                  id="password"
                  type={isVisible ? "text" : "password"}
                  className="border w-[20rem]  rounded-lg border-b-1 bg-white naxatw-border-gray-300 p-1 py-2  focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-300"
                />
                <p className="text-red-500">{errors?.password?.message}</p>
                <i
                  className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal"
                  onClick={toggleVisibility}
                >
                  {isVisible ? "visibility" : "visibility_off"}
                </i>
                {/* <i className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal">visibility_off</i> */}
              </div>
              <div
                className="justify-end flex items-end !underline hover:text-blue-800 cursor-pointer text-blue-500"
                onClick={() => navigate("/reset")}
              >
                {/* <a href="./reset" className="hover:text-blue-800"> */}
                Forgot Password
                {/* </a> */}
              </div>

              <div className="button-section  gap-6  flex flex-col w-full">
                <button
                  type="submit"
                  className="bg-blue-700 w-[20rem] rounded-lg text-white hover:bg-blue-500  py-2 "
                >
                  Sign in
                </button>
                <div className="flex justify-center items-center gap-1">
                  <p>Don't have an account?</p>{" "}
                  <div
                    className="hover:text-blue-800 font-normal underline cursor-pointer text-blue-500 "
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full border border-solid border-gray-200  py-2 rounded-lg flex justify-center items-center gap-4 hover:border-gray-200 hover:bg-gray-200"
                >
                  <img src={googleIcon} alt="" /> Sign in with google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
