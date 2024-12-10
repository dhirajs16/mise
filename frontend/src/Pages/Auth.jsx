import { Outlet } from "react-router-dom";
import Logo from "../components/Logo/Logo";

const Auth = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-screen h-[90vh]  bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500">
        <div className="col-span-3 w-full flex justify-center items-center">
          <img
            className="object-cover transform"
            src="/images/auth_illustration.png"
            alt="auth graphics"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="w-4/5 flex flex-col items-center bg-white rounded-xl py-5">
            <Logo className="w-44 object-cover" />
            {/* children: Login and Signup Forms */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
// "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-y-12"></div>
export default Auth;
