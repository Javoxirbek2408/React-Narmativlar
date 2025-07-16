import { Card, Form, Input } from "antd";
import { Slash } from "lucide-react";
import { NavLink } from "react-router-dom";
import { IphoneCall } from "../../assets/icon/IphoneCall";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";

export const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you would typically send the form data to your backend
    alert("Message sent successfully!");
    form.resetFields();
  };
  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <ul className="  flex  gap-2">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink to={"/contact"}>Cantact</NavLink>
        </li>
      </ul>
      <div className="flex justify-between mt-[80px]">
        <Card className="w-[340px] ">
          <div>
            <div className="flex gap-3 items-center  font-medium text-base leading-6">
              <IphoneCall /> Call To Us
            </div>
            <p className="font-normal !mt-6 text-sm leading-[21px]">
              {" "}
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-normal !mt-4 text-sm leading-[21px]">
              Phone: +8801611112222
            </p>
          </div>
          <hr className="w-[270px] mt-8 !bg-gray-300" />
          <div>
            <div className="flex gap-3 items-center  font-medium text-base leading-6">
              <IphoneCall /> Write To US
            </div>
            <p className="font-normal !mt-6 text-sm leading-[21px]">
              {" "}
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <p className="font-normal !mt-4 text-sm leading-[21px]">
              Emails: customer@exclusive.com{" "}
            </p>
            <p className="font-normal !mt-4 text-sm leading-[21px]">
              Emails: support@exclusive.com{" "}
            </p>
          </div>
        </Card>
        <div className="w-[800px] p-6 pt-[40px] bg-white rounded-lg shadow-md">
          <Form form={form} layout="vertical"    onFinish={onFinish}>
            <div className="flex gap-4">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                className="mb-4"
              >
                <Input
                  placeholder="Your Name *"
                  className="!w-[235px] !h-[50px] p-2 border rounded !focus:outline-none !outline-none focus:ring-2  font-normal text-base leading-6 !bg-[#F5F5F5]"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="Your Email *"
                  className="!w-[235px]  !bg-[#F5F5F5] !h-[50px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500  font-normal text-base leading-6"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="Your Phone *"
                  className="!w-[235px]  !bg-[#F5F5F5] !h-[50px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500  font-normal text-base leading-6"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
              className="mb-6"
            >
              <Input.TextArea
                rows={4}
                placeholder="Your Massage"
                className=" !w-[737px] p-2 border rounded focus:outline-none focus:ring-2 ont-normal text-base leading-6 !bg-[#F5F5F5] "
              />
            </Form.Item>

            <Form.Item>
              <CurrentButton
                htmlType="submit"
                title={"Send Massage"}
                className="w-[215px] !h-[56px] !text-white !bg-[#DB4444] !ml-[522px]  font-medium text-base leading-6"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
