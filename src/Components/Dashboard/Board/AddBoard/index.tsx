import { boardType } from "@Components/Dashboard/WorkSpace";
import Button from "@Components/common/Button";
import Icon from "@Components/common/Icon";
import { useState } from "react";

interface AddBoardModalProps {
  onClose: () => void;
  setBoardList: React.Dispatch<React.SetStateAction<boardType[]>>;
}

const labelColorList = [
  {
    color: "white",
    bgColor: "white",
    textColor: "text-white",
  },
  {
    color: "border-red-500",
    bgColor: "bg-red-100",
    textColor: "text-red-500",
  },
  {
    color: "border-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    color: "border-pink-500",
    bgColor: "bg-pink-100",
    textColor: "text-pink-500",
  },
  {
    color: "border-blue-500",
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    color: "border-yellow-500",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
  },
  {
    color: "border-purple-500",
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
  },
];

function AddBoardModal({ onClose, setBoardList }: AddBoardModalProps) {
  const [value, setValue] = useState<{ label?: string }>({});
  const [labelColor, setLabelColor] = useState("white");
  const [activeColor, setActiveColor] = useState("white");

  const handleCustomChange = (field: string, fieldValue: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      [field]: fieldValue,
    }));
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSave = () => {
    setBoardList((prev) => [
      ...prev,
      {
        id: Math.random(),
        label: value?.label || "",
        color: labelColor,
        messageList: [],
      },
    ]);
    onClose();
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-[20rem] border border-gray-500  rounded-xl">
      <div className="flex gap-6 flex-col pb-5">
        <div className="title flex justify-between px-4 py-4 w-full border-b border-b-gray-500">
          <p className="text-lg font-bold">Add New</p>
          <Icon
            name="close"
            onClick={onClose}
            className="hover:bg-gray-500 justify-center items-center hover:rounded-lg py-1"
          />
        </div>
        <div className="px-4 w-full flex flex-col gap-4">
          <div className="label w-full flex flex-col gap-1">
            <label htmlFor="label" className="font-semibold">
              Label Name
            </label>
            <input
              type="text"
              id="label"
              className="p-2 w-full rounded-lg bg-transparent border border-gray-500"
              onChange={(e) => handleCustomChange("label", e.target.value)}
              value={value.label || ""}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="color" className="font-semibold">
              Color
            </label>
            <div className="flex gap-3">
              {labelColorList.map((color, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div
                    className={`w-8 h-8 border rounded-lg flex justify-center items-center cursor-pointer ${color.bgColor}`}
                    onClick={() => {
                      setLabelColor(color.textColor);
                      setActiveColor(color.color);
                    }}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-[2.5px] ${color.color}`}
                    ></div>
                  </div>
                  {color.color === activeColor && (
                    <div className="border-b-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              id="description"
              className="bg-transparent rounded-lg h-32 w-full border border-gray-500"
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

export default AddBoardModal;
