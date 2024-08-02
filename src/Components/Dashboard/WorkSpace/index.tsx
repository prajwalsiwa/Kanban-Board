import Board from "@Components/Board";
import Button from "@Components/common/Button";

interface message {
  id: number;
  message: string;
}

interface boardType {
  id: number;
  messageList: message[];
  label: string;
}

const boardList: boardType[] = [
  {
    id: 1,
    label: "To do",
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
    messageList: [
      {
        id: 1,
        message: "Done breakfast",
      },
    ],
  },
];

const handleAddBoard = () => {};

function Workspace() {
  return (
    <div className="w-full h-full flex  mt-10 pl-10">
      <div className="flex gap-4">
        <div className="flex gap-4">
          {boardList.map((board) => (
            <div className="" key={board.id}>
              <Board label={board.label} taskList={board.messageList} />
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
  );
}

export default Workspace;
