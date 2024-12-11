"use client";
import { MdDashboard, MdManagerAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Sidebar } from "@/components/admin-panel/Sidebar";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard"
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products"
  },
  {
    title: "Accounts",
    icon: <MdManagerAccounts />,
    href: "#"
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    href: "#"
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    href: "#"
  }
];

const Sidebar = () => {
  return (
    <div className="bg-white w-[300px] in-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <img className="size-12 rounded-1g" src="logo.jpg" alt="logo" />
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link key={menu.title} href={menu.href} className=""></Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
