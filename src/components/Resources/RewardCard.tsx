import { Icon } from "@iconify/react";

interface RewardCardProps {
  title: string;
  desc: string;
  pointsRequired: number;
  status: string;
}

const RewardCard = ({
  title,
  desc,
  pointsRequired,
  status,
}: RewardCardProps) => {
  const isLocked = status.toLowerCase() === "locked";
  const isComingSoon = status.toLowerCase() === "coming soon";

  return (
    <div className="bg-white rounded-xl px-4 py-6 border flex flex-col items-center justify-center gap-4">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl  bg-purple-100 flex items-center justify-center">
        <Icon
          icon="material-symbols:redeem"
          className="text-purple-600 text-3xl"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>

        {/* Points */}
        {pointsRequired > 0 && (
          <p className="mt-1 text-xs flex items-center gap-2 font-semibold text-primary">
            ⭐ {pointsRequired} pts
          </p>
        )}
      </div>

      {/* Action */}
      <button
        disabled={isLocked || isComingSoon}
        className={`p-3.5 text-xs rounded-md font-medium w-full
          ${
            isComingSoon
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : isLocked
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
      >
        {isComingSoon ? "Coming Soon" : isLocked ? "Locked" : "Redeem"}
      </button>
    </div>
  );
};

export default RewardCard;
