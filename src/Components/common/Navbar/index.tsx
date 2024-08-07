import { useNavigate } from "react-router-dom";
import Button from "../Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="h-[3.6rem] w-full  bg-purple-800 flex items-center ">
      <div className="title pl-10 flex justify-between w-full pr-12">
        <p className="text-xl font-bold">My Todo</p>
        <Button
          onClick={()=>navigate("/login")}
          label="Sign in"
          className="border border-gray-500 rounded-lg px-4 py-2 hover:bg-gray-950 bg-gray-800"
        />
      </div>
    </div>
  );
}

export default Navbar;
