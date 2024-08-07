import { useState } from "react";
import DropdownOptions from "../DropdownOptions";
import PortalTemplate from "@Templates/PortalTemplate";
import EditTaskModal from "@Components/Dashboard/Board/EditTask/EditTaskModal";
import DetailBoard from "@Components/Dashboard/Board/DetailBoard";

interface roundedContainerProps {
  message: string;
  color?: string;
}

export default function RoundedContainer({
  message,
  color,
}: roundedContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleEditClick = () => {
    setIsOpen(true);
  };
  const handleDeleteClick = () => {};

  const onClose = () => {
    setIsOpen(false);
  };

  const onDetailClose = () => {
    setIsDetailOpen(false);
  };

  const handleDetail = () => {
    setIsDetailOpen(true);
  };

  return (
    <>
      {/* Changed container div to use flex-col to stack children vertically */}
      <div className="w-[260px] rounded-lg min-h-10 relative border border-gray-400 border-solid flex flex-col justify-start items-start cursor-pointer ">
        {/* Added padding and set width to full for the text container */}
        <div
          className="flex justify-start items-start p-2 pr-6 hover:bg-gray-700 rounded-lg w-full"
          onClick={handleDetail}
        >
          {/* Added break-words to ensure text wraps properly */}
          <p className={`w-full text-left ${color} break-words`}>
            {message}
          </p>
        </div>
        <div className="absolute right-0.5">
          <DropdownOptions
            options={[
              {
                id: 1,
                label: "Edit",
                onClick: handleEditClick,
                iconName: "edit",
              },
              {
                id: 2,
                label: "Delete",
                onClick: handleDeleteClick,
                iconName: "delete",
                iconClassName: "text-red-600",
              },
            ]}
          />
        </div>
      </div>
      {isOpen && (
        <PortalTemplate>
          <EditTaskModal onClose={onClose} />
        </PortalTemplate>
      )}
      {isDetailOpen && (
        <PortalTemplate>
          <DetailBoard onClose={onDetailClose} />
        </PortalTemplate>
      )}
    </>
  );
}
