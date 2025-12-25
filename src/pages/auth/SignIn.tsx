import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../Ui/InputField";
import Btn from "../../Ui/Btn";
import { FcGoogle } from "react-icons/fc";
import { userAuth } from "../../context/AuthContext";
import FormAuth from "../../components/Resources/FormAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInUser, signUpGoogle } = userAuth();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormData = async (values: any) => {
    try {
      setLoading(true);
      await signInUser(values.email, values.password);
      toast.success("Account successfully logged in");
      navigate("/");
    } catch (e: any) {
      toast.error(e.message || "Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signUpGoogle();
    } catch (e: any) {
      toast.error(e.message || "Google sign-in failed. Please try again.");
    }
  };

  return (
    <>
      <FormAuth
        title="Log in to flowva"
        desc="Log in to receive personalized recommendations"
      >
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(handleFormData)}
        >
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
            onClick={handleGoogleSignIn}
            prependIcon={<FcGoogle />}
            customClass="!bg-white !text-black hover:!bg-purple-100"
            type="button"
            label="Sign in with Google"
          />

          <span className="text-center text-sm">
            Don't have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => navigate("/auth/signup")}
            >
              Sign up
            </span>
          </span>
        </form>
      </FormAuth>
    </>
  );
};

export default SignIn;
