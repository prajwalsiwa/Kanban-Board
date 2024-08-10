import { useState } from "react";
import kanban from "@Assets/kanbanImage.jpg";

function ResetPassword() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
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
          <h2 className="text-xl">Reset Password</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-start items-start w-full relative ">
              <label htmlFor="password">Enter Password</label>
              <input
                id="password"
                type={isVisible ? "text" : "password"}
                className="border  rounded-lg border-b-1 bg-white naxatw-border-gray-300 p-1 py-2 w-full focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-300"
              />
              <i
                className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal"
                onClick={toggleVisibility}
              >
                {isVisible ? "visibility" : "visibility_off"}
              </i>
              {/* <i className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal">visibility_off</i> */}
            </div>
            <div className="flex flex-col justify-start items-start w-full relative ">
              <label htmlFor="password">Confirm Password</label>
              <input
                id="password"
                type={isVisible ? "text" : "password"}
                className="border  rounded-lg border-b-1 bg-white naxatw-border-gray-300 p-1 py-2 w-full focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-300"
              />
              <i
                className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal"
                onClick={toggleVisibility}
              >
                {isVisible ? "visibility" : "visibility_off"}
              </i>
              {/* <i className="material-symbols-outlined absolute right-3 bottom-2 cursor-pointer font-normal">visibility_off</i> */}
            </div>

            <div className="button-section  gap-6  flex flex-col w-full py-6">
              <button
                type="submit"
                className="bg-blue-700 rounded-lg text-white hover:bg-blue-500 w-full py-2 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
