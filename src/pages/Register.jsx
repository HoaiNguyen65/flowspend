import { Eye, EyeOff, Wallet } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { getPasswordStrength } from "../utils/passwordStrength";
import { STRENGTH_CONFIG } from "../constants/strengthConfig";
import { useMemo } from "react";
import { registerUser } from "../features/auth/authService";
import { getAuthErrorMessage } from "../utils/authErrorMessage";
import Loader from "../components/Loader";

function Register() {
  const {
    values,
    errors,
    isLoading,
    handleChange,
    toggleShowField,
    handleSubmit,
  } = useForm(
    {
      name: "",
      email: "",
      password: {
        value: "",
        show: false,
      },
      terms: false,
    },
    {
      debounces: {
        email: 500,
        password: 800,
      },
      schemaName: "register",
    },
  );

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const userCredential = await registerUser(
        values["email"],
        values["password"]["value"],
        values["name"],
      );

      if (userCredential.accessToken) {
        navigate("/login", { replace: true });
      }
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      alert(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // caculate password strength
  const strengthScore = getPasswordStrength(values.password.value).score;
  const strengthConfig = STRENGTH_CONFIG[strengthScore];

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6 text-slate-900">
      {isLoading && <Loader />}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-primary rounded-card w-fit p-2">
            <Wallet size={19} color="white" />
          </div>
          <h1 className="text-2xl font-bold text-black">FlowSpend</h1>
        </div>
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Create your account
            </h2>
            <p className="mt-2 text-slate-500">
              Start managing your finances better today
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-slate-700"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="focus:border-primary focus:ring-primary w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
              <p className="mb-1 py-0.5 text-sm text-red-500 transition-opacity duration-300">
                <span className={errors.name ? "opacity-100" : "opacity-0"}>
                  {errors.name || "placeholder"}
                </span>
              </p>
            </div>
            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="focus:border-primary focus:ring-primary w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <p className="mb-1 py-0.5 text-sm text-red-500 transition-opacity duration-300">
                <span className={errors.email ? "opacity-100" : "opacity-0"}>
                  {errors.email || "placeholder"}
                </span>
              </p>
            </div>
            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="focus:border-primary focus:ring-primary w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type={values.password.show ? "text" : "password"}
                  value={values.password["value"]}
                  onChange={handleChange}
                />
                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  type="button"
                  onClick={() => toggleShowField("password")}
                >
                  {values.password.show ? <Eye /> : <EyeOff />}
                </button>
              </div>
              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Password Strength
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider text-emerald-500 uppercase">
                    {strengthConfig?.label}
                  </span>
                </div>
                <div className="flex h-1.5 gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`${strengthScore >= level ? strengthConfig.color : "bg-slate-200"} flex-1 rounded-full transition-colors duration-300`}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="mb-1 py-0.5 text-sm text-red-500 transition-opacity duration-300">
                <span className={errors.password ? "opacity-100" : "opacity-0"}>
                  {errors.password || "placeholder"}
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3 pt-1">
              <div className="flex h-5 items-center">
                <input
                  className="h-4 w-4 cursor-pointer rounded border-slate-300 text-[#10B981] transition-colors focus:ring-[#10B981]"
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={values.terms}
                  onChange={handleChange}
                />
              </div>
              <label
                className="text-sm leading-tight text-slate-500"
                htmlFor="terms"
              >
                I agree to the{" "}
                <a
                  className="font-medium text-[#10B981] hover:underline"
                  href="#"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-[#10B981] hover:underline"
                  href="#"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            <p className="mb-1 py-0.5 text-sm text-red-500 transition-opacity duration-300">
              <span className={errors.terms ? "opacity-100" : "opacity-0"}>
                {errors.terms || "placeholder"}
              </span>
            </p>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#10B981] px-4 py-3 font-bold text-white shadow-sm shadow-emerald-200 transition-all hover:bg-[#059669]"
              type="submit"
            >
              Create Account
            </button>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <span className="bg-white px-3 text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Or sign up with
                </span>
              </div>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm font-medium text-slate-500">
          Already have an account?
          <Link
            className="ml-1 font-bold text-[#10B981] hover:underline"
            to="/login"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
