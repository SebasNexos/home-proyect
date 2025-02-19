import { tv } from "@nextui-org/react";

export const SidebarWrapper = tv({
  base: "sidebar-wrapper transition-transform bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 dark:bg-transparent h-full fixed top-0 w-64 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen",

  variants: {
    collapsed: {
      true: "translate-x-[-100%] md:translate-x-0",
      false: "translate-x-0 fle",
    },
  },
});

export const Overlay = tv({
  base: "bg-[rgb(15_23_42/0.3)] fixed z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100",
});

export const Header = tv({
  base: "flex gap-8 items-center  mt-[-43px] px-3 text-center border-b",
});

export const Body = tv({
  base: "flex flex-col gap-6 mt-5 px-2 hover:text-white",
});

export const Footer = tv({
  base: "flex hover:text-white ",
});

export const Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
  Overlay,
  Footer,
});
