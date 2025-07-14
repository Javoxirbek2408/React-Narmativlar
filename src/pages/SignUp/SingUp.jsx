import { Checkbox, Form, Input } from "antd";
import singImg from "../../assets/img/singup_img.png";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { GoogleIcon } from "../../assets/icon/GoogleIcon";
import { Link } from "react-router-dom";
export const SingUp = () => {
  return (
    <div>
      <div className="flex mt-[60px] mb-[140px]">
        <img src={singImg} alt="" />
        <div className="flex  flex-col gap-[40px] justify-center-safe ml-[130px]">
          <div className="flex flex-col gap-6">
            <h2 className=" font-medium text-4xl leading-[30px] tracking-[4%]">
              Create an account
            </h2>
            <p className="font-normal text-base leading-6">
              Enter your details below
            </p>
          </div>
          <Form className="flex flex-col gap-10">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Name"
                className=" !outline-0 !border-none !border-b-4  !border-gray-400 !h-7 p-3"
              />
              <hr />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Email or Phone Number"
                className=" !outline-0 !border-none !border-b-4  !border-gray-400 !h-7 p-3"
              />{" "}
              <hr />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className=" !outline-0 !border-none !border-b-4  !border-gray-400 !h-7 p-3"
              />{" "}
              <hr />
            </Form.Item>
          </Form>
          <CurrentButton
            className="w-[371px] !h-[56px] !font-medium text-base leading-6  !text-white !bg-[#DB4444]
"
            title={"Create Account"}
          />
          <CurrentButton
            icon={<GoogleIcon />}
            className="w-[371px] !h-[56px] !font-medium text-base leading-6 "
            title={"Sign up with Google"}
          />
          <div className="flex  gap-3 items-center justify-center">
            <p className="font-normal text-base leading-6">
              Already have account?
            </p>{" "}
            <Link to={'/login'} className="font-medium text-base leading-6 border-b-2">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
