import { useState } from "react";
import { Icon } from "@iconify/react";

interface ReferralLinkProps {
  link: string;
}

const ReferralLink = ({ link }: ReferralLinkProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 bg-purple-50 p-4 rounded-xl">
      <p className="text-sm font-semibold">Your personal referral link:</p>

      <div className="flex items-center justify-between gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3">
        <span className="text-sm text-gray-700">{link}</span>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
        >
          {copied ? (
            <Icon
              icon="fluent-mdl2:check-mark"
              className="w-5 h-5 text-green-500"
            />
          ) : (
            <Icon icon="mdi:content-copy" className="w-5 h-5 text-purple-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ReferralLink;
