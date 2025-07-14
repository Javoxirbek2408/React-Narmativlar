import { Button } from "antd";

export const CurrentButton = ({
  title,
  icon,
  className,
  color,
  variant,
  ref,
  onClick
}) => {
  return (
    <Button
    onClick={onClick}
      icon={icon}
      className={className}
      color={color}
      variant={variant}
      ref={ref}
    >
      {title}
    </Button>
  );
};
