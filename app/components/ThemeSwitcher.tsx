// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} isIconOnly className="bg-background/10">
          <CiLight size="2rem" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} isIconOnly className="bg-background/10">
          <CiDark size="2rem" />
        </Button>
      )}
    </span>
  );
}
