import Navbar from "@Components/common/Navbar";
import SideBar from "@Components/common/SideBar";

export default function Dashboard() {
  return (
    <div className="flex w-full h-full">
      <div className="flex justify-start">
        <SideBar />
      </div>
      <Navbar />
    </div>
  );
}
