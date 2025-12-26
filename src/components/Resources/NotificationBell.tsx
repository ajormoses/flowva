import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { userAuth } from "../../context/AuthContext";

interface NotificationBellProps {
  count?: number;
  notifications?: { title: string; description?: string }[];
}

const NotificationBell = ({
  count = 1,
  notifications,
}: NotificationBellProps) => {
  const { session } = userAuth(); // Remove this duplicate declaration

  notifications = notifications || [
    {
      title: `Welcome, ${session?.user?.user_metadata?.full_name}!`,
      description: "We're thrilled to have you on board! Explore powerf...",
    },
  ];
  const [open, setOpen] = useState(false);
  const bellRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={bellRef}>
      {/* Bell Icon */}
      <button
        className="relative p-2 rounded-full hover:bg-gray-200 bg-gray-300"
        onClick={() => setOpen(!open)}
      >
        <Icon icon="mdi:bell" className="w-6 h-6 text-gray-700" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 right-0 w-[300px] md:w-[360px] rounded-xl shadow-lg z-50 bg-purple-600">
          <div className="p-4 flex justify-between items-center gap-4 bg-gradient-to-r from-purple-600 to-purple-300 rounded-t-xl text-white">
            <span className="font-bold"> Notifications</span>
            <div className="flex items-center gap-2">
              <p className="text-xs">Mark all as read</p>
              <p className="text-xs">Delete All</p>
            </div>
          </div>
          <div className="flex flex-col max-h-60 overflow-auto ml-0.5 bg-gray-100 rounded-b-xl">
            {notifications.length === 0 ? (
              <div className="p-2 text-sm text-gray-500">No notifications</div>
            ) : (
              notifications.map((notif, idx) => (
                <div
                  key={idx}
                  className="p-2 hover:bg-gray-100 cursor-pointer px-4 flex gap-4"
                >
                  <Icon icon="uil:smile" className="w-4 h-4 text-green-600" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-medium">{notif.title}</p>
                    {notif.description && (
                      <p className="text-xs text-gray-500">
                        {notif.description}
                      </p>
                    )}
                  </div>
                  <Icon
                    icon="ph:dots-three"
                    className="w-4 h-4 text-green-600"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
