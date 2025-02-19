import React, { useState } from "react";
import { useSidebarContext } from "../Layout/layout-context";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconsMap } from "@/Utils/iconsMap";
import { CircleX } from "lucide-react";

export const SidebarItem = ({
  icon,
  title,
  href,
  children,
  notRef = false,
}) => {
  const { collapsed } = useSidebarContext();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const isActive = pathname === href;

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const IconComponent = IconsMap[icon];
  const content = (
    <div className="flex items-center gap-2 w-full group">
      <span className="h-4 w-4 text-white flex items-center text-sm">
        {IconComponent ? <IconComponent className="w-4 h-4" /> : <CircleX />}
      </span>
      <p className="text-white mx-1 text-sm">{formatText(title)}</p>
      {children && (
        <span className="ml-auto transition-all duration-300">
          {isOpen ? (
            <ChevronDownIcon className="w-4 h-4 text-white" />
          ) : (
            <ChevronRightIcon className="w-[14px] h-[14px] text-white" />
          )}
        </span>
      )}
    </div>
  );

  return (
    <div
      className={`group flex flex-col py-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${
        isActive
          ? "focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10"
          : ""
      }`}
    >
      {notRef ? (
        <button
          className="text-default-900 active:bg-none max-w-full"
          onClick={toggleDropdown}
          type="button"
        >
          {content}
        </button>
      ) : href ? (
        <Link to={href} className="flex gap-2 items-center">
          {content}
        </Link>
      ) : (
        <button
          className="flex gap-2 items-center w-full"
          onClick={toggleDropdown}
        >
          {content}
        </button>
      )}

      {children && isOpen && (
        <div
          className={`rounded-2xl w-full mt-2 transition-all ease-out duration-300 hover:bg-blue-600 pl-2 ${
            isActive ? "bg-blue-700" : ""
          }`}
        >
          {children.map((child) => (
            <SidebarItem
              key={child.orderModules}
              icon={child.iconModule}
              title={child.nameModule}
              href={child.pathModule}
            />
          ))}
        </div>
      )}
    </div>
  );
};
