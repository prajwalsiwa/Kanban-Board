import kanban from "@Assets/kanbanImage.jpg";

function ResetLink() {
  return (
    <div className="w-screen h-screen flex text-black">
      <div className="image h-full w-[60%] ">
        <img src={kanban} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="login h-full  w-[40%]  bg-gray-100 flex gap-36  pt-20 flex-col">
        <div className="flex flex-col">
          <h1>Kanban Board</h1>
        </div>
        <div className="flex px-56 gap-12 flex-col w-full">
          <h2 className="text-xl">Reset Password</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-start items-start w-full">
              <label htmlFor="username">Email</label>
              <input
                id="username"
                type="text"
                className="border rounded-lg border-b-1 bg-white  naxatw-border-gray-300   w-full py-2 px-1  focus:!outline focus:outline-1 focus:outline-gray-500 outline-gray-400 "
              />
            </div>
            <div className="button-section  gap-6  flex flex-col w-full py-6">
              <button
                type="submit"
                className="bg-blue-700 rounded-lg text-white hover:bg-blue-500 w-full py-2 "
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetLink;
