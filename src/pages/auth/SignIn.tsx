import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "../../Ui/InputField";
import Btn from "../../Ui/Btn";
import { FcGoogle } from "react-icons/fc";
import { userAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { session } = userAuth();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormData = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div className="h-screen flex justify-center items-center">
          <form
            className="flex flex-col items-center gap-4 w-full max-w-[420px] rounded-lg bg-white p-10"
            onSubmit={handleSubmit(handleFormData)}
          >
            <div className="text-center flex flex-col gap-2.5 mb-3">
              <h1 className="text-2xl font-semibold text-primary">
                Log in to flowva
              </h1>
              <p className="text-grey text-sm">
                Log in to receive personalized recommendations
              </p>
            </div>

            <InputField
              type="text"
              label="Email"
              placeholder="user@example.com"
              register={register("email", {
                required: true,
              })}
              error={errors.email?.message}
              required
            />

            <div className="flex flex-col gap-1.5 w-full">
              <InputField
                type="password"
                label="Password"
                placeholder="Enter your password"
                register={register("password", {
                  required: true,
                })}
                required
                error={errors?.password?.message}
              />
              <span className="text-sm ml-auto text-primary ">
                Forget Password?
              </span>
            </div>
            <Btn
              customClass="!rounded-3xl"
              isLoading={loading}
              type="submit"
              label="Sign In"
            />

            <div className="flex items-center gap-4 justify-center w-full">
              <span className="border border-gray-100 w-full"></span>
              <span className="text-sm">or</span>
              <span className="border border-gray-100 w-full"></span>
            </div>

            <Btn
              onClick={() => {}}
              prependIcon={<FcGoogle />}
              customClass="!bg-white !text-black hover:!bg-purple-100"
              type="button"
              label="Sign in with Google"
            />

            <span className="text-center text-sm">
              Don't have an account?{" "}
              <span className="text-primary cursor-pointer">Sign up</span>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
