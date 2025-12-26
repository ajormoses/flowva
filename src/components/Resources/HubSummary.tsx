import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const HubSummary: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* header */}
        <div className="border-l-4 border-primary">
          <span className="ml-4 font-bold text-xl">{title}</span>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default HubSummary;
