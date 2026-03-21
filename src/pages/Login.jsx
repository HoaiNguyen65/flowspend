import { Eye, EyeOff, Wallet } from "lucide-react";
import useForm from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase/firebaseAuth";
import { getAuthErrorMessage } from "../utils/authErrorMessage";
function Login() {
  const { values, errors, handleChange, validateAll, toggleShowField } =
    useForm(
      {
        email: "",
        password: {
          value: "",
          show: false,
        },
      },
      {
        debounces: {
          email: 500,
          password: 800,
        },
        schemaName: "login",
      },
    );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!validateAll()) return;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values["email"],
        values["password"]["value"],
      );
      console.log("userCredential: ", userCredential);
      
      if (userCredential.user) {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      alert(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-[#F9FAFB]">
      <div className="lg:shadow-card rounded-card grid w-full max-w-5xl overflow-hidden lg:grid-cols-2">
        {/* left */}
        <div className="hidden bg-[url('./assets/images/login/Background.png')] bg-cover bg-center lg:block lg:p-12">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-card w-fit p-2">
              <Wallet size={19} color="white" />
            </div>
            <h1 className="text-2xl font-bold text-black">FlowSpend</h1>
          </div>
          <h1 className="mt-12 mb-4 text-3xl font-bold text-black">
            Master your money with ease.
          </h1>
          <p className="text-[1.125rem] text-[#475569]">
            Join thousands of users tracking their way to financial freedom with
            FlowSpend's intuitive tools.
          </p>
        </div>
        {/* right */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-black sm:text-3xl">
              Welcome Back
            </h1>
            <p className="text-grey text-base">
              Enter your details to access your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10" action="">
            <div className="flex flex-col gap-2">
              <label
                className="text-[0.875rem] font-semibold text-[#334155]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="focus:ring-primary rounded-card w-full border border-[#E2E8F0] bg-slate-50 px-4 py-2.5 outline-none focus:ring-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={values.email}
              />
              <p className="text-sm text-red-500 transition-opacity duration-300">
                <span className={errors.email ? "opacity-100" : "opacity-0"}>
                  {errors.email || "placeholder"}
                </span>
              </p>
            </div>
            <div className="my-6 mb-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-[0.875rem] font-semibold text-[#334155]"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-primary text-[0.875rem] font-semibold"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="focus:ring-primary rounded-card w-full border border-[#E2E8F0] bg-slate-50 px-4 py-2.5 outline-none focus:ring-2"
                  type={values["password"]["show"] ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={values["password"]["value"]}
                />
                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  type="button"
                  onClick={() => toggleShowField("password")}
                >
                  {values.password.show ? <Eye /> : <EyeOff />}
                </button>
              </div>
              <p className="text-sm text-red-500 transition-opacity duration-300">
                <span className={errors.password ? "opacity-100" : "opacity-0"}>
                  {errors.password || "placeholder"}
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-primary rounded-card w-full py-3 text-[1rem] font-bold text-white hover:cursor-pointer"
            >
              Log in
            </button>
          </form>
          <div className="mt-8 flex items-center">
            <div className="bg-border h-px w-full"></div>
            <p className="text-grey w-full text-center text-[0.75rem] font-bold">
              Or continue with
            </p>
            <div className="bg-border h-px w-full"></div>
          </div>
          {/* <button>Sign in Google</button> */}
          <div className="mt-10 flex items-center justify-center gap-1">
            <p className="text-base text-[#475569]">Don't have an account?</p>
            <Link className="text-primary text-base font-bold" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
