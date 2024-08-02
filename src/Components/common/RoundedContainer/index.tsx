import DropdownOptions from "../DropdownOptions";

interface roundedContainerProps {
  message: string;
}

const handleEditClick = () => {};
const handleDeleteClick = () => {};
export default function RoundedContainer({ message }: roundedContainerProps) {
  return (
    <div className="w-full rounded-lg min-h-10 border border-gray-400 border-solid flex justify-start items-start">
      <div className="w-full flex justify-start items-start pl-2">
        <p className="w-full flex justify-start items-start text-left">
          {message}
        </p>
      </div>
      <div>
        <DropdownOptions
          options={[
            { id: 1, label: "Edit", onClick: handleEditClick, iconName: "edit" },
            { id: 2, label: "Delete", onClick: handleDeleteClick, iconName: "delete", iconClassName: "text-red-600"},
          ]}
        />
      </div>
    </div>
  );
}
