import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const SidebarItem = ({ icon: Icon, title, href, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="group flex flex-col py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
      {href ? (
        <a href={href} className="flex items-center gap-2 w-full px-3 py-2">
          {Icon && <Icon className="h-4 w-4 text-white" />}
          <span className="text-white text-sm">{title}</span>
        </a>
      ) : (
        <button className="flex items-center gap-2 w-full px-3 py-2" onClick={toggleDropdown}>
          {Icon && <Icon className="h-4 w-4 text-white" />}
          <span className="text-white text-sm">{title}</span>
          {children && (
            <span className="ml-auto transition-all duration-300">
              {isOpen ? (
                <ChevronDownIcon className="w-4 h-4 text-white" />
              ) : (
                <ChevronRightIcon className="w-4 h-4 text-white" />
              )}
            </span>
          )}
        </button>
      )}

      {children && isOpen && (
        <div className="rounded-2xl w-full mt-2 transition-all ease-out duration-300 hover:bg-blue-600 pl-4 border-l border-white/20">
          {children.map((child, index) => (
            <SidebarItem key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = ({ menu }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`h-screen bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 fixed top-0 z-20 overflow-y-auto border-r border-white/20`}>
      <div className="p-4 border-b border-white/20">
        <button onClick={() => setCollapsed(!collapsed)} className="w-full text-left text-white">
          {collapsed ? "☰" : "Close Sidebar"}
        </button>
      </div>

      <nav className="mt-4 flex flex-col gap-6 px-2">
        {menu.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </nav>
    </aside>
  );
};

// Ejemplo de uso:
// const menu = [
//   { icon: HomeIcon, title: "Home", href: "/home" },
//   { icon: UserIcon, title: "Profile", href: "/profile" },
//   { icon: FolderIcon, title: "Projects", children: [
//     { title: "Project 1", href: "/projects/1" },
//     { title: "Project 2", href: "/projects/2" },
//   ]},
// ];
// <Sidebar menu={menu} />
