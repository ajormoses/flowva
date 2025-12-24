import type { ReactNode } from "react";
import Btn from "./Btn";
import clsx from "clsx";
import { useState } from "react";

interface InputFieldProps {
  label?: string;
  type: string;
  placeholder?: string;
  register?: object;
  showBtn?: ReactNode;
  btnLabel?: string;
  handleBtnClick?: () => void;
  customBtn?: any;
  error?: any;
  required?: boolean;
  prependIcon?: ReactNode;
  value?: string | number;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  label,
  type,
  placeholder,
  showBtn,
  btnLabel,
  handleBtnClick,
  customBtn,
  error,
  required,
  prependIcon,
  value,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  return (
    <>
      <div className="form-group relative w-full">
        <label className={`text-[#545454] text-xs ${error && `error`}`}>
          {label} {required && <span className="required-mark">*</span>}
        </label>
        <div className="relative">
          {/* Password Icon */}
          {type === "password" && (
            <div
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className={clsx(
                "absolute right-4 top-1/2 -translate-y-1/2 inset-y-auto text-primary text-xs cursor-pointer capitalize",
                {
                  "text-red-500": error,
                }
              )}
            >
              {isPasswordVisible ? "show" : "hide"}
            </div>
          )}

          {/* Prepend Icon */}
          {prependIcon && (
            <div
              className={clsx(
                "absolute left-4 top-1/2 -translate-y-1/2 inset-y-auto text-grey",
                { "text-red-500": error }
              )}
            >
              {prependIcon}
            </div>
          )}

          <input
            value={value}
            type={
              type === "password"
                ? isPasswordVisible
                  ? "password"
                  : "text"
                : type
            }
            className={clsx(
              `inputField`,
              { "input-error": error },
              { "!pl-10": prependIcon }
            )}
            placeholder={placeholder}
            {...register}
          />
          {showBtn && (
            <Btn
              onClick={handleBtnClick}
              customClass={clsx(
                `!absolute !right-5 !top-1/2 !transform !-translate-y-1/2 !h-[32px] !p-2 !text-xs !w-[77px] !bg-white !text-primary !border !border-primary`,
                customBtn
              )}
              label={btnLabel || ""}
            />
          )}
        </div>
        <p className="error-message">{error}</p>
      </div>
    </>
  );
};

export default InputField;
