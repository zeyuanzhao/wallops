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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
            cursus vitae congue mauris rhoncus aenean vel. Donec et odio
            pellentesque diam. Urna porttitor rhoncus dolor purus non enim
            praesent elementum facilisis. Arcu cursus vitae congue mauris. Ut
            diam quam nulla porttitor massa id neque. Metus dictum at tempor
            commodo ullamcorper a. Vel turpis nunc eget lorem dolor sed. Quisque
            sagittis purus sit amet. Semper quis lectus nulla at volutpat diam.
            Elementum sagittis vitae et leo.
          </p>
          <p className="mb-12">
            Id leo in vitae turpis massa sed elementum. Diam vulputate ut
            pharetra sit. Morbi quis commodo odio aenean sed adipiscing diam
            donec. Ut etiam sit amet nisl. Sit amet nisl purus in mollis nunc.
            Viverra justo nec ultrices dui sapien eget. Nec ullamcorper sit amet
            risus nullam. Mattis aliquam faucibus purus in massa tempor. Pretium
            fusce id velit ut tortor. In vitae turpis massa sed elementum tempus
            egestas sed. Quam id leo in vitae turpis massa sed elementum tempus.
            Lectus sit amet est placerat in.
          </p>
          <Link href="/about" underline="hover">
            <h2 className="text-3xl mb-4">About Website</h2>
          </Link>
          <p>
            Click to view credits and tech stack.
          </p>
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
