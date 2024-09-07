import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavbarComponent({ buttonStart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Mengubah 50 dengan tinggi scroll yang diinginkan
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`fixed top-0 left-0 right-0 z-10 px-0 mx-0 transition-colors duration-300 ${isScrolled ? "bg-white/30 backdrop-blur-lg border-b border-gray-200" : "bg-transparent"
        }`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-x-1">
          {/* <img src="img/logonew.png" alt="" className="w-7 h-7" /> */}
          <p className="text-xl font-medium text-inherit text-hitam font-baskerville">MJTH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to={'/docs'}>
            <h1 className="px-4 py-3 text-sm text-white rounded-md bg-hitam font-poppins">Get Started</h1>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
