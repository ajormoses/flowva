import { useState, useRef, useEffect } from "react";
import { userAuth } from "../../context/AuthContext";

interface UserInfoProps {
  items?: { label: string; action: () => void }[];
}

const UserInfo = ({ items }: UserInfoProps) => {
  const { session, signOutUser } = userAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const defaultItems = [
    { label: "Feedback", action: () => console.log("Go to profile") },
    { label: "Support", action: () => console.log("Go to settings") },
    { label: "Log Out", action: async () => await signOutUser() },
  ];

  const menuItems = items || defaultItems;

  return (
    <div className="absolute bottom-0 w-full" ref={dropdownRef}>
      {/* User Info */}
      <div
        className="border-t border-black flex items-center gap-2 px-4 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          className="rounded-full h-10 w-10"
          src={session?.user?.user_metadata?.avatar_url}
          alt="User avatar"
        />
        <div className="flex flex-col gap-0.5">
          <p className="font-bold text-sm">
            {session?.user?.user_metadata?.full_name}
          </p>
          <p className="text-xs">{session?.user?.email}</p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute bottom-full mb-2 right-4 w-[210px] bg-white border border-primary rounded-md shadow-lg z-50 px-4 py-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-purple-200 text-sm rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
