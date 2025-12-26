import { Icon } from "@iconify/react";
import Btn from "../../Ui/Btn";
const ToolSpotLight = () => {
  return (
    <>
      <div className="rounded-xl overflow-hidden">
        {/* Header */}
        <div className="p-4 rounded-t-xl bg-gradient-to-r from-purple-600 to-blue-300 flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <span className="bg-purple-400 text-white rounded-xl font-medium p-0.5 text-xs w-fit px-2.5">
              Featured
            </span>
            <p className="text-2xl font-semibold text-white">
              Top Tool Spotlight
            </p>
            <span className="text-white font-medium text-xl">Reclaim</span>
          </div>
          <div className="bg-blue-500 h-[60px] w-[60px] flex justify-center items-center rounded-full">
            <div className="grid grid-cols-2">
              <Icon icon="ic:baseline-square" className="text-red-300" />
              <Icon icon="material-symbols:circle" className="text-black" />
              <Icon icon="material-symbols:circle" className="text-white" />
              <Icon icon="mdi:triangle" className="text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex gap-4 p-4 bg-white relative">
          <Icon
            className="text-3xl text-purple-500 absolute "
            icon="ci:calendar"
          />
          <div className="flex flex-col gap-2 ml-10">
            <h1 className="font-bold text-sm">
              Automate and Optimize Your Schedule
            </h1>
            <p className="text-sm leading-6">
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 flex justify-between items-center p-4 bg-white">
          <Btn
            prependIcon={<Icon icon="rivet-icons:user-add-solid" />}
            label="Sign Up"
            customClass="!w-fit !rounded-full !px-4 !text-sm"
          />
          <Btn
            prependIcon={<Icon icon="mdi:gift" />}
            label="Claim 50 pts"
            customClass="!w-fit !rounded-full !px-4 !text-sm !bg-gradient-to-r !from-primary !to-purple-400"
          />
        </div>
      </div>
    </>
  );
};

export default ToolSpotLight;
