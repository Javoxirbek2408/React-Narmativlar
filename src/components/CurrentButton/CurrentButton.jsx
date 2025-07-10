import { Button } from "antd";

export const CurrentButton = ({
  title,
  icon,
  className,
  color,
  variant,
  ref,
}) => {
  return (
    <Button
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
