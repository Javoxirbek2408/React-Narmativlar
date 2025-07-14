import React, { useState } from "react";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import {
  CircleX,
  LogOut,
  ShoppingBag,
  Star,
  User,
  User2,
  User2Icon,
} from "lucide-react";
const items = [
  {
    label: "Manage My Account",
    key: "SubMenu",
    icon: <User />,
  },
  {
    label: "My Order",
    key: "SubMenu",
    icon: <ShoppingBag />,
  },
  {
    label: "My Cancellations",
    key: "SubMenu",
    icon: <CircleX />,
  },
  {
    label: "My Reviews",
    key: "SubMenu",
    icon: <Star />,
  },
  {
    label: "Logout",
    key: "SubMenu",
    icon: <LogOut />,
  },
];

export const Menus = () => {
  // const [current, setCurrent] = useState("mail");
  // const onClick = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };
  return (
    <Dropdown placement="bottomRight" menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <User2Icon />
        </Space>
      </a>
    </Dropdown>
  );
};
