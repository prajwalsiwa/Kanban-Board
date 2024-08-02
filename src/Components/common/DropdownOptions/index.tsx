import Icon from "../Icon";

import useOutsideClick from "@Hooks/useOutsideClick";

interface optionPropsTypes {
  id: number;
  label: string;
  onClick: () => void;
  iconName: string;
  iconClassName?: string;
}

interface DropdownOptionsPropsTypes {
  options: optionPropsTypes[];
}

function DropdownOptions({ options }: DropdownOptionsPropsTypes) {
  const [dropdownRef, isOpen, handleToggle] = useOutsideClick();

  return (
    <div className="relative" ref={dropdownRef}>
      <Icon
        name="more_vert"
        className=" justify-center items-center flex hover:bg-gray-700 w-8 h-8 rounded-lg"
        onClick={handleToggle}
      />

      <ul
        className={`flex-col justify-start items-center absolute border-gray-500 border py-2 px-2 z-50   rounded-lg top-10 w-40 bg-[#161B22] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {options.map(
          ({
            id,
            label,
            onClick,
            iconName,
            iconClassName,
          }: optionPropsTypes) => (
            <li
              key={id}
              onClick={onClick}
              className="flex justify-start  w-full text-sm rounded-lg hover:bg-gray-500 pl-3 py-2 gap-2 items-center"
            >
              <Icon name={iconName} className={iconClassName} />
              {label}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default DropdownOptions;
