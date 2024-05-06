"use client";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export default function Home() {
  const variants: Variants = {
    hide: {
      opacity: 0,
      y: -25,
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
    <div className="">
      <div className="bg-[url('/sunrise.jpeg')] h-screen pt-24 bg-fixed">
        <div className="object-center flex flex-col	justify-center items-center h-3/5 text-white">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={variants}
          >
            <h1 className="text-center text-6xl text-background">
              Guide to Wallops Island
            </h1>
            <h2 className="text-center text-4xl mt-4 text-background">
              April 17-20, 2024
            </h2>
            <h2 className="text-center text-4xl mt-4 text-background">
              Montgomery Blair HS Magnet Class of 2026
            </h2>
          </motion.div>
        </div>
        <motion.div className="mt-12 flex justify-center ">
          <IoChevronDownCircleOutline className="size-16 opacity-90 text-white" />
        </motion.div>
      </div>
      <div className="px-12 py-12">
        <div className="w-5/6 mx-auto">
          <h2 className="text-5xl mb-12">About Wallops</h2>
          <p className="mb-6">
            Wallops Island is an annual Blair Magnet field trip to learn about
            biology and marine ecosystems. The field trip is a 4-day trip to the
            Chincoteague Bay Field Station in Wallops Island, Virginia.
          </p>
          <p className="mb-6">
            Over the 4 days, we were able to go on excursions into the field,
            including the intertidal trip and the research cruise ship. We also
            had different labs where we disected squids, identified marine
            invertebrates, and more.
          </p>
          <p className="mb-12">
            This website contains information for each of the days at Wallops.
            Scroll below to learn more.
          </p>
          <Link href="/about" underline="hover">
            <h2 className="text-3xl mb-4">About Website</h2>
          </Link>
          <p>Click to view credits and tech stack.</p>
        </div>
      </div>
      <div className="px-12 py-12 h-screen bg-[url('/lake.jpg')] bg-fixed">
        <div className="w-5/6 mx-auto">
          <h1 className="text-5xl mb-12 text-background">Days at Wallops</h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[512px]">
            <Link href="days/1" className="flex flex-col">
              <Card className="w-full h-full shadow-2xl shadow-slate-700">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 1
                  </p>
                  <h4 className="text-white font-medium text-3xl">Wednesday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  isZoomed
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="day1.jpg"
                />
              </Card>
            </Link>
            <Link href="days/2" className="flex flex-col">
              <Card className="w-full h-full shadow-2xl shadow-slate-700">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 2
                  </p>
                  <h4 className="text-white font-medium text-3xl">Thursday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  isZoomed
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="day2.jpg"
                />
              </Card>
            </Link>
            <Link
              href="days/3"
              className="flex flex-col col-span-2 col-start-1 row-start-2"
            >
              <Card className="w-full h-full shadow-2xl shadow-slate-700">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 3
                  </p>
                  <h4 className="text-white font-medium text-3xl">Friday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  isZoomed
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="day3.jpg"
                />
              </Card>
            </Link>
            <Link
              href="days/4"
              className="flex flex-col row-span-2 col-start-3 row-start-1"
            >
              <Card className="w-full h-full shadow-2xl shadow-slate-700">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 4
                  </p>
                  <h4 className="text-white font-medium text-3xl">Saturday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  isZoomed
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="day4.jpg"
                />
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
