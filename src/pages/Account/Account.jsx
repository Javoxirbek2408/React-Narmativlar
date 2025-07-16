import { Home, Lock, Mail, Slash, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Input, Button, Card, Divider, message } from "antd";

export const Account = ({ userData, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  // Foydalanuvchi ma'lumotlari bilan formani to'ldirish
  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        address: userData.address,
      });
    }
  }, [userData, form]);

  const onFinish = (values) => {
    const updatedData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
    };

    if (isPasswordChanged) {
      if (!values.currentPassword) {
        message.error("Iltimos, joriy parolni kiriting");
        return;
      }
      if (values.newPassword !== values.confirmPassword) {
        message.error("Yangi parollar mos kelmadi");
        return;
      }
      updatedData.currentPassword = values.currentPassword;
      updatedData.newPassword = values.newPassword;
    }

    onSave(updatedData);
    message.success("Profil muvaffaqiyatli yangilandi");
  };

  const handleCancel = () => {
    form.resetFields();
    setIsPasswordChanged(false);
    onCancel();
  };
  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <NavLink className={"font-normal text-sm leading-[21px]"}>
            Home
          </NavLink>
          <Slash className="w-[13px] text-gray-500" />
          <NavLink className={"font-normal text-sm leading-[21px]"}>
            My Account
          </NavLink>
        </div>
        <div>
          <span className="font-normal text-sm leading-[21px] ">Welcome! </span>
          <span className="font-normal text-sm leading-[21px] text-[#DB4444]">
            Md Rimel
          </span>
        </div>
      </div>
      <div className="flex  justify-between">
        <menu className="flex flex-col gap-4">
          <ul className=" font-medium  text-base leading-6 flex flex-col gap-2  ">
            Manage My Account
            <li className="pl-3">
              <NavLink className={"font-normal text-base leading-6"}>
                My Profile
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                Address Book
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Payment Options
              </NavLink>
            </li>
          </ul>
          <ul className=" font-medium text-base leading-6 flex flex-col gap-2 ">
            My Orders
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Returns
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Cancellations
              </NavLink>
            </li>
          </ul>
          <ul className=" font-medium text-base leading-6 flex flex-col gap-2 ">
            My WishList
          </ul>
        </menu>
        <div className="max-w-3xl mx-auto p-4">
          <Card>
            <h2 className={" !text-[#DB4444] !mb-4 font-medium text-xl leading-7 "}>
              Edit Your Profile
            </h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <div className="!w-[710px] flex justify-between">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: "Iltimos ismingizni kiriting" },
                  ]}
                >
                  <Input
                    p
                    className="text-gray-400 !h-[50px] !pl-4 !w-[330px] !bg-[#F5F5F5]"
                    placeholder="Md"
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos familiyangizni kiriting",
                    },
                  ]}
                >
                  <Input
                    className="text-gray-400 !h-[50px] !pl-4 !w-[330px] !bg-[#F5F5F5]"
                    placeholder="Rimel"
                  />
                </Form.Item>
              </div>

              <div className="!w-[710px] flex justify-between">
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Iltimos email kiriting" },
                    { type: "email", message: "Noto'g'ri email formati" },
                  ]}
                >
                  <Input
                    className="text-gray-400 !w-[330px] !h-[50px] !bg-[#F5F5F5]"
                    placeholder="rimel1111@gmail.com"
                  />
                </Form.Item>

                <Form.Item name="address" label="Address">
                  <Input
                    className="text-gray-400 !w-[330px] !h-[50px] !bg-[#F5F5F5]"
                    placeholder="Kingston, 5236, United State"
                  />
                </Form.Item>
              </div>

              <p
                orientation="left"
                className="text-gray-600 !font-normal !text-base !mt-6 !mb-2 !leading-6"
              >
                Password Changes
              </p>

              <Form.Item name="currentPassword">
                <Input.Password
                  className="text-gray-400 !w-[710px] !h-[50px] !bg-[#F5F5F5]"
                  placeholder={
                    isPasswordChanged
                      ? " Leave empty to keep current password"
                      : "Current password"
                  }
                  onChange={() => setIsPasswordChanged(true)}
                />
              </Form.Item>

              {isPasswordChanged && (
                <>
                  <Form.Item
                    name="newPassword"
                    rules={[
                      {
                        min: 6,
                        message:
                          "Parol kamida 6 belgidan iborat bo'lishi kerak",
                      },
                    ]}
                  >
                    <Input.Password
                      className="text-gray-400 !w-[710px] !h-[50px] !bg-[#F5F5F5]"
                      placeholder="New password"
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    dependencies={["newPassword"]}
                    rules={[
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("newPassword") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Parollar mos kelmadi")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className="text-gray-400 !w-[710px] !h-[50px] !bg-[#F5F5F5]"
                      placeholder="Confirm new password"
                    />
                  </Form.Item>
                </>
              )}

              <div className="!w-[710px]  items-center flex justify-end gap-3 mt-6">
                <Button
                  onClick={handleCancel}
                  className="!border-none border-gray-300 hover:border-gray-400"
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" w-[214px] !h-[56px] rounded opacity-100 gap-2.5 px-12 py-4 !bg-[#DB4444] !font-medium !ext-base !leading-6"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
