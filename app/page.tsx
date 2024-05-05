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
      <div className="px-12 py-12 min-h-screen">
        <div className="w-5/6 mx-auto">
          <h1 className="text-5xl mb-12">About Wallops</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            nullam non nisi est sit amet facilisis magna. Pellentesque diam
            volutpat commodo sed. Dictumst quisque sagittis purus sit amet.
            Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
            Laoreet non curabitur gravida arcu. Nec ultrices dui sapien eget mi
            proin sed libero enim. Nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper sit amet. Cum sociis natoque penatibus et magnis dis.
            Egestas purus viverra accumsan in. In hendrerit gravida rutrum
            quisque non tellus orci ac auctor. In ornare quam viverra orci
            sagittis eu volutpat. Nullam vehicula ipsum a arcu cursus vitae
            congue mauris rhoncus. Sapien eget mi proin sed libero enim sed
            faucibus turpis. Eget felis eget nunc lobortis mattis aliquam
            faucibus purus in. Turpis cursus in hac habitasse platea dictumst
            quisque. Duis ultricies lacus sed turpis tincidunt id aliquet risus
            feugiat. Morbi tristique senectus et netus et. Mauris pharetra et
            ultrices neque ornare aenean. Senectus et netus et malesuada. Tellus
            pellentesque eu tincidunt tortor aliquam. Lorem mollis aliquam ut
            porttitor. Blandit turpis cursus in hac habitasse platea dictumst.
            Cursus euismod quis viverra nibh cras. Pharetra convallis posuere
            morbi leo urna molestie. Habitant morbi tristique senectus et netus
            et malesuada. Ut lectus arcu bibendum at varius. Cursus mattis
            molestie a iaculis at erat. Euismod nisi porta lorem mollis aliquam.
            Non tellus orci ac auctor augue mauris augue neque. Elementum nisi
            quis eleifend quam adipiscing. A erat nam at lectus urna duis
            convallis. Condimentum lacinia quis vel eros donec ac odio tempor
            orci. Massa placerat duis ultricies lacus sed turpis. Sit amet
            consectetur adipiscing elit ut aliquam purus sit. Velit ut tortor
            pretium viverra. Imperdiet massa tincidunt nunc pulvinar sapien et
            ligula ullamcorper. Nisi scelerisque eu ultrices vitae auctor. Eget
            dolor morbi non arcu. At elementum eu facilisis sed odio morbi quis.
            Diam ut venenatis tellus in. Tortor vitae purus faucibus ornare
            suspendisse sed nisi. Mauris a diam maecenas sed enim ut sem viverra
            aliquet. Diam sit amet nisl suscipit adipiscing bibendum est
            ultricies. Elit eget gravida cum sociis natoque. Non nisi est sit
            amet facilisis magna etiam tempor. Eu lobortis elementum nibh tellus
            molestie nunc non blandit massa. Tellus in hac habitasse platea
            dictumst vestibulum rhoncus est. Nibh sed pulvinar proin gravida
            hendrerit lectus a. Aliquam vestibulum morbi blandit cursus risus at
            ultrices mi. Elit scelerisque mauris pellentesque pulvinar. Quam
            quisque id diam vel quam elementum pulvinar. Maecenas sed enim ut
            sem. Nulla pellentesque dignissim enim sit amet venenatis urna. Quis
            ipsum suspendisse ultrices gravida dictum fusce. Bibendum est
            ultricies integer quis auctor elit sed vulputate. Imperdiet dui
            accumsan sit amet nulla facilisi morbi tempus. Volutpat maecenas
            volutpat blandit aliquam. Morbi tempus iaculis urna id volutpat
            lacus laoreet. Etiam erat velit scelerisque in dictum non
            consectetur a. Vulputate enim nulla aliquet porttitor lacus luctus
            accumsan tortor. Risus feugiat in ante metus. Et malesuada fames ac
            turpis egestas maecenas pharetra. Congue nisi vitae suscipit tellus
            mauris a diam maecenas sed. Eu tincidunt tortor aliquam nulla
            facilisi cras fermentum odio eu. Ac odio tempor orci dapibus
            ultrices in iaculis. Sem integer vitae justo eget magna fermentum
            iaculis. Diam ut venenatis tellus in. At ultrices mi tempus
            imperdiet nulla malesuada. Velit sed ullamcorper morbi tincidunt
            ornare massa eget egestas purus. Parturient montes nascetur
            ridiculus mus. Pulvinar mattis nunc sed blandit libero volutpat.
            Lectus sit amet est placerat. Sodales ut etiam sit amet nisl purus
            in mollis. Sed sed risus pretium quam vulputate. In fermentum
            posuere urna nec tincidunt praesent semper feugiat. Turpis massa sed
            elementum tempus egestas. Enim eu turpis egestas pretium aenean.
            Aenean et tortor at risus viverra adipiscing at in. At lectus urna
            duis convallis convallis tellus. Ut eu sem integer vitae justo.
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
