"use client";
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
import { motion, Variants } from "framer-motion";

const AppNavbar = () => {
  const variants: Variants = {
    hide: {
      opacity: 0,
      y: -15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const MotionNavbar = motion(Navbar);
  return (
    <MotionNavbar
      className="bg-transparent fixed"
      shouldHideOnScroll
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={variants}
    >
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
        <Link color="foreground" href="/about">
          About
        </Link>
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
    </MotionNavbar>
  );
};

export default AppNavbar;
