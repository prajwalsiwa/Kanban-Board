import { useState } from "react";
import DropdownOptions from "../DropdownOptions";
import PortalTemplate from "@Templates/PortalTemplate";
import EditTaskModal from "@Components/Dashboard/Board/EditTask/EditTaskModal";

interface roundedContainerProps {
  message: string;
  color?: string
}

export default function RoundedContainer({
  message,
  color,
}: roundedContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = () => {
    setIsOpen(true);
  };
  const handleDeleteClick = () => {};

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-full rounded-lg min-h-10 border border-gray-400 border-solid flex justify-start items-start">
        <div className="w-full flex justify-start items-start pl-2">
          <p
            className={`w-full flex justify-start items-start text-left ${color}`}
          >
            {message}
          </p>
        </div>
        <div>
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
    </>
  );
}
