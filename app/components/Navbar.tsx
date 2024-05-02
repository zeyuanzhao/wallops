import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const AppNavbar = () => {
  return (
    <Navbar className="dark:bg-gray-800">
      <NavbarBrand>
        <p className="font-bold text-inherit dark:text-white">Wallops</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default AppNavbar;