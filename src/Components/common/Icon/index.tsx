interface IconPropTypes {
  name: string;
  iconSymbolType?: string;
  onClick?: () => void;
  className?: string;
}

function Icon({
  name,
  iconSymbolType = "material-symbols-outlined",
  onClick,
  className,
}: IconPropTypes) {
  return (
    <i className={`${iconSymbolType} ${className} cursor-pointer`} onClick={onClick}>
      {name}
    </i>
  );
}

export default Icon;
