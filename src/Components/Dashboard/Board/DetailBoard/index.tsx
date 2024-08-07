import Icon from "@Components/common/Icon";

interface detailBoardProps {
  onClose: () => void;
}
function DetailBoard({ onClose }: detailBoardProps) {
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
            <p></p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBoard;
