import Button from "@Components/common/Button";
import Icon from "@Components/common/Icon";
import { useState } from "react";

interface AddBoardModalProps {
  onClose: () => void;
}

interface Task {
  title: string;
  description: string;
}

function EditTaskModal({ onClose }: AddBoardModalProps) {
  const [value, setValue] = useState<Task>({ title: "", description: "" });

  const handleCustomChange = (field: keyof Task, fieldValue: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      [field]: fieldValue,
    }));
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSave = () => {
    // Add your save logic here
    onClose();
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] border border-gray-500 rounded-xl">
      <div className="flex gap-6 flex-col pb-5">
        <div className="title flex justify-between px-4 py-4 w-full border-b border-b-gray-500">
          <p className="text-lg font-bold">Edit Task</p>
          <Icon
            name="close"
            onClick={onClose}
            className="hover:bg-gray-500 justify-center items-center hover:rounded-lg py-1"
          />
        </div>
        <div className="px-4 w-full flex flex-col gap-4">
          <div className="label w-full flex flex-col gap-1">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="p-2 w-full rounded-lg bg-transparent border border-gray-500"
              onChange={(e) => handleCustomChange("title", e.target.value)}
              value={value.title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              id="description"
              className="bg-transparent rounded-lg h-40 w-full border border-gray-500"
              onChange={(e) =>
                handleCustomChange("description", e.target.value)
              }
              value={value.description}
            ></textarea>
          </div>
        </div>
        <div className="actions flex gap-4 px-3 justify-end">
          <Button
            className="bg-slate-500 hover:bg-slate-700 text-md font-medium rounded-lg p-2 px-4"
            label="Cancel"
            onClick={handleCancel}
          />
          <Button
            className="bg-green-500 hover:bg-green-700 text-md font-medium rounded-lg p-2 px-4"
            label="Save"
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
