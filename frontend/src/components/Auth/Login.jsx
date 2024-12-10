import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col  items-center py-10 gap-5"
      >
        {/* email */}
        <div className="flex flex-col w-4/5">
          <label>Enter your email</label>
          <input
            className="border border-slate-400 outline-none px-3 py-1 rounded-md"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail.message}</p>}
        </div>

        {/* password */}
        <div className="flex flex-col w-4/5">
          <label>Enter your Password</label>
          <input
            className="border border-slate-400 outline-none px-3 py-1 rounded-md"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.password.message}</p>}
        </div>

        <input
          className="bg-cyan-500 text-white tex-lg w-1/2 py-2 rounded-xl"
          type="submit"
          value="Login"
        />
        <div>
          <span >
            Don't Have an Account? 
            <Link className="underline text-blue-800 ml-2" to="/signup">
              Signup
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
