import { Outlet, Route, Routes } from "react-router-dom"

const Auth = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-screen h-[90vh] px-10">
        <div className="col-span-1 w-full bg-cyan-200">
          <img className="w-full h-full" src="" alt="auth graphics" />
        </div>
        <div className="col-span-1">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Auth