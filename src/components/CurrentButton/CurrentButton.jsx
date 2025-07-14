import { Button } from "antd";

export const CurrentButton = ({
  title,
  icon,
  className,
  color,
  variant,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      icon={icon}
      className={className}
      color={color}
      variant={variant}
    >
      {title}
    </Button>
  );
};
