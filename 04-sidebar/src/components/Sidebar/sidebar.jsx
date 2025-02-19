import { Sidebar } from "./sidebar.styles";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../Layout/layout-context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/Zustand/authStore";
import logo from "@Assets/img/Logo_BCM _home.png";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export const SidebarWrapper = () => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const menu = useAuthStore((state) => state.menu.grupos);

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`h-screen z-[20] sticky top-0 shadow-lg bg-red transition-all duration-300 ${
        collapsed ? "w-0 overflow-hidden" : "w-64"
      }`}
    >
      <div
        className={`${
          collapsed ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <div className={Sidebar({ collapsed })}>
          <div className={Sidebar.Header()}>
            <div className="flex w-full items-center p-1">
              <div className="mt-5 p-[6px]">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 text-center mx-auto"
                >
                  <Link
                    to="/private/dashboard"
                    className="flex w-full items-center"
                  >
                    
                    <img src={logo} alt="" width={110} height={100} className="mx-7"/>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full flex-nowrap">
            <div className={Sidebar.Body()}>
              <SidebarMenu>
                {menu.map((item) => (
                  <SidebarItem
                    key={item.orderGroup}
                    icon={item.iconGroup}
                    title={formatText(item.nameGroup)}
                    children={item.modules}
                    href={item.pathModule}
                  />
                ))}
              </SidebarMenu>
            </div>
            <div className="text-white cursor-pointer" onClick={handleLogout}>
              <div className="flex hover:bg-white/15 py-3 rounded transition-all duration-300">
                <ArrowRightStartOnRectangleIcon className="w-4 h-4 mt-[2px]" />
                <span className="text-sm mx-3">{t("menu_logout")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {collapsed && (
        <div
          className={Sidebar.Overlay()}
          onClick={() => setCollapsed(false)}
        />
      )}
    </aside>
  );
};
