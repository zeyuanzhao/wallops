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
      <div className="px-12 py-12 h-screen">
        <div className="w-5/6 mx-auto">
          <h1 className="text-5xl mb-12">Days at Wallops</h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[512px]">
            <Card className="">
              <a href="/days/1" className="">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 1
                  </p>
                  <h4 className="text-white font-medium text-3xl">Wednesday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </a>
            </Card>
            <Card className="">
              <a href="days/2">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 2
                  </p>
                  <h4 className="text-white font-medium text-3xl">Thursday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </a>
            </Card>
            <Card className="col-span-2 col-start-1 row-start-2">
              <a href="days/3">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 3
                  </p>
                  <h4 className="text-white font-medium text-3xl">Friday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </a>
            </Card>
            <Card className="row-span-2 col-start-3 row-start-1">
              <a href="days/4">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-md text-white/60 uppercase font-bold">
                    Day 4
                  </p>
                  <h4 className="text-white font-medium text-3xl">Saturday</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
