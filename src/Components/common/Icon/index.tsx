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
    <i className={`${iconSymbolType} ${className}`} onClick={onClick}>
      {name}
    </i>
  );
}

export default Icon;
