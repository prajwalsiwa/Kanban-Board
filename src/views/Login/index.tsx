import { useState } from "react";
import googleIcon from "@Assets/Google.svg";
import kanban from "@Assets/kanbanImage.jpg";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type loginData = {
  email: string;
  password: string;
};

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginData>();

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLoginSubmit = () => {};

  return (
    <div className="w-screen h-screen flex text-black">
      <div className="image h-full w-[60%] ">
        <img src={kanban} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="login h-full  w-[40%]  bg-gray-100 flex gap-36  pt-20 flex-col">
        <div className="flex flex-col w-full justify-center items-center">
          <h1>Kanban Board</h1>
        </div>
        <div className="flex px-56 gap-12 flex-col w-full">
          <h2 className="text-xl">Welcome to Kanban Board</h2>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-start items-start w-full">
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
                  className="border rounded-lg border-b-1 bg-white  naxatw-border-gray-300   w-full py-2 px-1  focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-400 "
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
                  className="border  rounded-lg border-b-1 bg-white naxatw-border-gray-300 p-1 py-2 w-full focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-300"
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
              <div className="justify-end flex items-end !underline">
                <a href="./reset" className="hover:text-blue-800">
                  Forgot Password
                </a>
              </div>

              <div className="button-section  gap-6  flex flex-col w-full">
                <button
                  type="submit"
                  className="bg-blue-700 rounded-lg text-white hover:bg-blue-500 w-full py-2 "
                >
                  Sign in
                </button>
                <div className="flex justify-center items-center gap-1">
                  <p>Don't have an account?</p>{" "}
                  <a
                    href="./signup"
                    className="text-gray-600 hover:text-gray-900 font-normal underline "
                  >
                    Sign up
                  </a>
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
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Login;
