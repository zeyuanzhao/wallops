"use client";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const variants: Variants = {
    hide: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <div className="bg-[url('/sunrise.jpeg')] h-screen pt-24 bg-fixed">
        <div className="object-center flex flex-col	justify-center items-center h-1/2 text-white">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={variants}
          >
            <h1 className="text-center text-6xl">Guide to Wallops Island</h1>
            <h2 className="text-center text-4xl mt-4">April 17-20</h2>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2">
            <div className="bg-blue-500 w-72 h-72 p-4 border-4 border-slate-950 text-3xl">1</div>
            <div className="bg-blue-500 w-72 h-72 p-4 border-4 border-slate-950 text-3xl">2</div>
            <div className="bg-blue-500 w-72 h-72 p-4 border-4 border-slate-950 text-3xl">2</div>
            <div className="bg-blue-500 w-72 h-72 p-4 border-4 border-slate-950 text-3xl">2</div>
            <div className="bg-blue-500 w-72 h-72 p-4 border-4 border-slate-950 text-3xl">2</div>

          </div>
        </div>
      </div>
    </div>
  );
}
