import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

const AppNavbar = () => {
  return (
    <Navbar className="bg-transparent fixed" shouldHideOnScroll>
      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit dark:text-white">Wallops</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/days/1">
            Wednesday
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/days/2">
            Thursday
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/days/3">
            Friday
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/days/4">
            Saturday
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
};

export default AppNavbar;
