import HubSummary from "./HubSummary";
import TabSwitcher from "./TabSwitcher";
import RewardCard from "./RewardCard";
import clsx from "clsx";

const renderCards = (items: any[]) => {
  if (!items.length) {
    return (
      <p className="text-sm text-gray-400 text-center py-8 col-span-full">
        No rewards available
      </p>
    );
  }

  return items.map((item, index) => <RewardCard key={index} {...item} />);
};

const RedeemPoints = () => {
  const cards = [
    {
      label: "All Rewards",
      content: [
        {
          title: "$5 Bank Transfer",
          desc: "The $5 equivalent will be transferred to your bank account.",
          pointsRequired: 100,
          status: "locked",
        },
        {
          title: "$5 PayPal International",
          desc: "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Virtual Visa Card",
          desc: "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Apple Gift Card",
          desc: "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Google Play Card",
          desc: "TUse this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Amazon Gift Card",
          desc: "Get a $5 digital gift card to spend on your favorite tools or platforms.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$10 Amazon Gift Card",
          desc: "Get a $10 digital gift card to spend on your favorite tools or platforms.",
          pointsRequired: 10000,
          status: "locked",
        },
        {
          title: "Free Udemy Course",
          desc: "Coming Soon",
          pointsRequired: 0,
          status: "Coming Soon",
        },
      ],
      count: 8,
    },
    {
      label: "Unlocked",
      content: [],
      count: 0,
    },
    {
      label: "Locked",
      content: [
        {
          title: "$5 Bank Transfer",
          desc: "The $5 equivalent will be transferred to your bank account.",
          pointsRequired: 100,
          status: "locked",
        },
        {
          title: "$5 PayPal International",
          desc: "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Virtual Visa Card",
          desc: "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Apple Gift Card",
          desc: "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Google Play Card",
          desc: "TUse this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$5 Amazon Gift Card",
          desc: "Get a $5 digital gift card to spend on your favorite tools or platforms.",
          pointsRequired: 5000,
          status: "locked",
        },
        {
          title: "$10 Amazon Gift Card",
          desc: "Get a $10 digital gift card to spend on your favorite tools or platforms.",
          pointsRequired: 10000,
          status: "locked",
        },
        {
          title: "Free Udemy Course",
          desc: "Coming Soon",
          pointsRequired: 0,
          status: "Coming Soon",
        },
      ],
      count: 8,
    },
    {
      label: "Coming Soon",
      content: [
        {
          title: "Free Udemy Course",
          desc: "Coming Soon",
          pointsRequired: 0,
          status: "Coming Soon",
        },
      ],
      count: 1,
    },
  ];

  return (
    <HubSummary title="Redeem Your Points">
      <TabSwitcher
        customHeader="!gap-4"
        tabs={cards.map((tab) => ({
          label: tab.label,
          count: tab.count,
          content: (
            <div
              className={clsx("grid gap-4", tab.count > 0 && "lg:!grid-cols-3")}
            >
              {renderCards(tab.content)}
            </div>
          ),
        }))}
      />
    </HubSummary>
  );
};

export default RedeemPoints;
