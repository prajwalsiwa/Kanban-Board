import Button from "@Components/common/Button";
import RoundedContainer from "@Components/common/RoundedContainer";
import { ChangeEvent, useState } from "react";

interface boardProps {
  taskList: object[];
  label: string;
}

function Board({ taskList, label }: boardProps) {
  const [value, setValue] = useState<string | null>(null);
  const [newMessageList, setnewMessageList] = useState<message[]>(taskList);

  const handleAddnewMessageList = () => {
    if (value) {
      setnewMessageList((msg) => [
        ...msg,
        {
          id: Math.random(),
          message: value,
        },
      ]);
      setValue(null);
    }
  };

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="w-[18rem] h-fit  border border-gray-600 rounded-lg">
      <div className="flex justify-start pl-4 py-2 border-b">
        <p className="title text-lg font-semibold">{label}</p>
      </div>
      <div className="p-2 flex flex-col gap-2">
        {newMessageList.map((msg, index) => (
          <div key={index}>
            <RoundedContainer message={msg.message} />
          </div>
        ))}
        <div className="w-full">
          <textarea
            className="bg-transparent border border-gray-500 outline-none rounded-lg min-h-11 p-1 w-full"
            onChange={handleChange}
            value={value || ""}
            placeholder="Enter here"
          />
          <div>
            <Button
              className="border border-gray-500 rounded-md py-2 hover:bg-slate-500 hover:text-black px-2"
              leftIconName="add"
              label="Add item"
              onClick={handleAddnewMessageList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
