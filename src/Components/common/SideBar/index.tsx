import { useState } from "react";
import Icon from "../Icon";
import DropdownOptions from "../DropdownOptions";

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleToogle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleAddClick = () => {
  
  };

  const handleDeleteClick = () => {

  };

  return (
    <div className="h-full">
      {isCollapsed ? (
        <div className="flex h-full ">
          <div className="h-full w-[1rem] bg-gray-700 rounded-md transition-all relative " />

          <div className="w-8 h-8 rounded-full bg-gray-500 flex hover:bg-gray-700 mt-[3.75rem] transition-all absolute left-4">
            <Icon
              name="arrow_forward_ios"
              className="text-sm w-full h-full flex overflow-hidden justify-center  items-center"
              onClick={handleToogle}
            />
          </div>
        </div>
      ) : (
        <div className="w-[17.25rem] transition-all flex flex-col ">
          <div className="flex gap-4 items-center p-2 header border-gray-600 border transition-all">
            <div className="w-10 h-10 rounded-lg font-semibold text-lg text-white bg-slate-600 flex justify-center items-center">
              KB
            </div>
            <div className="font-semibold text-md">Kanban Workspace</div>
            <div>
              <Icon
                name="arrow_back_ios_new"
                className="text-sm font-bold  w-8 h-8 overflow-hidden rounded-lg flex justify-center items-center hover:border-gray-500 hover:bg-gray-500"
                onClick={handleToogle}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-4 py-2  border-gray-500 border">
              <div className="text-md font-medium">Your Boards</div>
              <Icon name="add" onClick={handleAddClick} className="w-8 h-8 rounded-lg hover:bg-gray-500 flex justify-center items-center" />
            </div>
            <div className="px-4 py-2 flex justify-between items-center ">
              <p className="">My Todo</p>
              <DropdownOptions
                options={[
                  { id: 1, label: "Delete Board", onClick: handleDeleteClick },
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
