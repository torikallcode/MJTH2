import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function NavbarComponent({ buttonStart }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-10 mx-0 px-0"
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-x-1">
          {/* <img
            src="img/logonew.png"
            alt=""
            className="w-7 h-7" /> */}
          <p className="font-bold text-inherit text-hitam text-xl">Torikal</p>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            to={'/docs'}
            className="text-hitam text-base font-poppins font-medium cursor-pointer bg-gray-200 p-2 rounded-md">Get Started</Link>
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
