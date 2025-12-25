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

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signUpNewUser } = userAuth();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    createPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("createPassword")], "Passwords must match")
      .required("Please confirm your password"),
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
      await signUpNewUser(values.email, values.createPassword);
      toast.success("Account created successfully! Please sign in.");
      navigate("/auth/signin");
    } catch (e: any) {
      toast.error(e.message || "Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormAuth title="Create an account" desc="Sign up to manage your tools">
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

          <InputField
            type="password"
            label="Password"
            placeholder="Enter your password"
            register={register("createPassword", {
              required: true,
            })}
            required
            error={errors?.createPassword?.message}
          />

          <InputField
            type="password"
            label="Confirm Password"
            placeholder="Enter your password"
            register={register("confirmPassword", {
              required: true,
            })}
            required
            error={errors?.confirmPassword?.message}
          />

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
            <span
              className="text-primary cursor-pointer"
              onClick={() => navigate("/auth/signin")}
            >
              Log in
            </span>
          </span>
        </form>
      </FormAuth>
    </>
  );
};

export default SignUp;
