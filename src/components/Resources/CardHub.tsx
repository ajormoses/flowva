import { Icon } from "@iconify/react";
import clsx from "clsx";

interface Props {
  title: any;
  desc?: string;
  children: React.ReactNode;
  icon?: string;
  iconColor?: string;
  customHeader?: string;
  customContent?: string;
  customClass?: string;
}
const CardHub: React.FC<Props> = ({
  title,
  desc,
  children,
  icon,
  iconColor,
  customHeader,
  customContent,
  customClass,
}) => {
  return (
    <div
      className={clsx(
        customClass,
        "rounded-md bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg overflow-hidden"
      )}
    >
      {/* Card header content goes here */}
      <div className={clsx(customHeader, "rounded-t-md bg-purple-50 p-4")}>
        <div className="flex gap-2.5 items-center text-lg">
          {icon && <Icon icon={icon} className={iconColor || "text-primary"} />}
          <div>
            <h2 className="font-semibold">{title}</h2>
            <span className="text-sm">{desc}</span>
          </div>
        </div>
      </div>

      {/* Card body content goes here */}
      <div className={clsx(customContent, "px-4 pt-4 pb-10")}>
        {/* Body content can be added here */}
        {children}
      </div>
    </div>
  );
};

export default CardHub;
