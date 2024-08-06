import Workspace from "@Components/Dashboard/WorkSpace";
import Navbar from "@Components/common/Navbar";
import SideBar from "@Components/common/SideBar";

export default function Dashboard() {
  return (
    <>
      
      <div className="flex ">
        <div className="flex justify-start">
          <SideBar />
        </div>
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <div className="w-full h-full">
            <Workspace />
          </div>
        </div>
      </div>
    </>
  );
}
