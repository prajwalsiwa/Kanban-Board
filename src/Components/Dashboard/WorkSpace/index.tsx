import Board from "@Components/Dashboard/Board";
import Button from "@Components/common/Button";
import PortalTemplate from "@Templates/PortalTemplate";
import { useState } from "react";
import AddBoardModal from "../Board/AddBoard";

export interface message {
  id: number;
  message: string;
}

export interface boardType {
  id: number;
  messageList: message[];
  label: string;
  color: string;
}

const taskBoardList: boardType[] = [
  {
    id: 1,
    label: "To do",
    color: "text-red-500",
    messageList: [
      {
        id: 2,
        message: "Lorem ipsum dolor sit amet consectetur ",
      },
      {
        id: 3,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo?",
      },
      {
        id: 4,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo?",
      },
      {
        id: 5,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo?",
      },
      {
        id: 6,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo?",
      },
    ],
  },
  {
    id: 2,
    label: "In Progress",
    color: "text-green-500",
    messageList: [
      {
        id: 1,
        message: "Workout",
      },
      {
        id: 2,
        message: "Get up early in the morning",
      },
    ],
  },
  {
    id: 3,
    label: "Done",
    color: "text-blue-500",
    messageList: [
      {
        id: 1,
        message: "Done breakfast",
      },
    ],
  },
];

function Workspace() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [boardList, setBoardList] = useState(taskBoardList);
  const handleAddBoard = () => {
    setIsAddOpen(true);
  };

  const handleClose = () => {
    setIsAddOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex  mt-10 pl-10">
        <div className="flex gap-4">
          <div className="flex gap-4">
            {boardList.map((board) => (
              <div className="" key={board.id}>
                <Board
                  label={board.label}
                  taskList={board.messageList}
                  labelColor={board.color}
                />
              </div>
            ))}
          </div>
          <Button
            label="Add new Board"
            onClick={handleAddBoard}
            leftIconName="Add"
            className="border border-gray-500 rounded-md p-2 hover:bg-slate-600"
          />
        </div>
      </div>
      {isAddOpen && (
        <PortalTemplate>
          <AddBoardModal
            onClose={handleClose}
            setBoardList={setBoardList}
          />
        </PortalTemplate>
      )}
    </>
  );
}

export default Workspace;
