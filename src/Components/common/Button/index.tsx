import Icon from "../Icon";

interface buttonPropsTypes {
  rightIconName?: string;
  leftIconName?: string;
  onClick: () => void;
  className?: string;
  label: string;
}
function Button({
  rightIconName,
  leftIconName,
  onClick,
  className,
  label,
}: buttonPropsTypes) {
  return (
    <div>
      <button className={`flex gap-1 ${className}`} onClick={onClick}>
      {leftIconName && <Icon name={leftIconName} />}  {label} {rightIconName && <Icon name={rightIconName} />}
      </button>
    </div>
  );
}

export default Button;
