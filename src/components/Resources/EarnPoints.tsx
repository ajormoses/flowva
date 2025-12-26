import HubSummary from "./HubSummary";
import CardHub from "./CardHub";
import Btn from "../../Ui/Btn";
import ToolSpotLight from "./ToolSpotLight";
import ReferralLink from "./ReferralLink";
import SocialMediaLinks from "./SocialMediaLinks";
import { Icon } from "@iconify/react";

const EarnPoints = () => {
  // JS: 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const todayIndex = new Date().getDay();

  // Map Sunday (0) to last index
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  // Converts JS day → our array index

  const activeIndex = dayMap[todayIndex];

  // Earn More Points
  const earnMorePoints: {
    title: string;
    desc?: string;
    icon: string;
    content: string;
  }[] = [
    {
      title: "Refer and win 10,000 points!",
      icon: "mingcute:star-line",
      content:
        "Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of <strong>10,000 points.</strong> Friends must complete onboarding to qualify.",
    },

    {
      title: "Share Your Stack",
      desc: "Earn +25 pts",
      icon: "ic:outline-share",
      content: "Share your tool stack",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5">
        <HubSummary title="Your Rewards Journey">
          <div className="grid xl:grid-cols-3 gap-5">
            <CardHub title="Points Balance" icon="fa6-solid:award">
              <div className="flex justify-between items-center py-5">
                <span className="text-3xl font-bold text-purple-600">5</span>
                <Icon className="text-3xl" icon="noto:coin" />
              </div>

              <div className="flex flex-col gap-1.5 pt-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Progress to $5 Gift Card
                  </span>
                  <span className="text-sm text-gray-500">5/50000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5"></div>
                <span className="text-xs text-gray-500">
                  🚀 Just getting started — keep earning points!
                </span>
              </div>
            </CardHub>

            <CardHub
              title="Daily Streak"
              icon="majesticons:calendar"
              iconColor="text-blue-500"
            >
              <p className="text-3xl font-bold text-purple-600 py-5">0 day</p>
              <div className="flex items-center gap-2 rounded-lg w-full overflow-x-auto overflow-y-hidden no-scrollbar">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`min-w-[40px] h-10 flex items-center justify-center rounded-full text-xs font-medium flex-shrink-0
                    ${
                      index === activeIndex
                        ? "border-2 border-primary text-primary bg-white"
                        : "border border-gray-300 text-gray-500 bg-gray-100"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <p className="text-sm text-center mt-8">
                Check in daily to to earn +5 points
              </p>
              <Btn
                prependIcon={<Icon icon="bi:lightning-charge" />}
                label="Claim Today's Points"
                customClass="!rounded-2xl mt-2 w-full"
              />
            </CardHub>

            <ToolSpotLight />
          </div>
        </HubSummary>

        <HubSummary title="Earn More Points">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {earnMorePoints.map((item, idx) => (
              <CardHub
                key={idx}
                title={item.title}
                icon={item.icon}
                iconColor="!text-3xl !text-primary !bg-purple-100 rounded-md p-1"
                customHeader="!bg-white !text-base"
                customClass="!bg-gray-50 !relative"
                customContent="!pt-4 !p-2.5"
              >
                <div className="flex flex-col gap-4">
                  <p
                    className="text-sm leading-6 [&_strong]:text-purple-600 [&_strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
                {idx === 1 && (
                  <Btn
                    prependIcon={<Icon icon="ic:outline-share" />}
                    customIcon="!text-xl"
                    label="Share Now"
                    customClass="!rounded-full !bg-gray-100 !mt-1.5 !font-medium !p-2.5 !text-purple-500 w-fit !absolute !right-4 !top-16"
                  />
                )}
              </CardHub>
            ))}
          </div>
        </HubSummary>

        <HubSummary title="Refer & Earn">
          <CardHub
            customHeader="!bg-gray-100"
            customContent="!bg-gray-50"
            title="Share Your Link"
            desc="Invite friends and earn 25 points when they join!"
            icon="stash:user-group-duotone"
            iconColor="!text-3xl !text-primary"
          >
            <div className="grid grid-cols-2 place-content-center place-items-center mb-4">
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-primary text-3xl">0</span>
                <p className="text-sm">Referrals</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-primary text-3xl">0</span>
                <p className="text-sm">Referrals</p>
              </div>
            </div>

            <ReferralLink link="https://yourapp.com/referral/yourcode123" />
            <SocialMediaLinks />
          </CardHub>
        </HubSummary>
      </div>
    </>
  );
};

export default EarnPoints;
