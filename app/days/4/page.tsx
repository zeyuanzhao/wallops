import { Image } from "@nextui-org/react";
import React from "react"; // Add the missing import statement for React

export default function DayFour() {
  return (
    <div className="px-12 pt-24 pb-12">
      <h1 className="text-center text-5xl">Saturday</h1>

      <div className="grid grid-cols-5 mt-8">
        <div className="pr-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../group.jpg"
          />

          <div className="p-2">
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-3xl mb-4">Activity</h2>
          <p>
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
          <p>
            Id leo in vitae turpis massa sed elementum. Diam vulputate ut
            pharetra sit. Morbi quis commodo odio aenean sed adipiscing diam
            donec. Ut etiam sit amet nisl. Sit amet nisl purus in mollis nunc.
            Viverra justo nec ultrices dui sapien eget. Nec ullamcorper sit amet
            risus nullam. Mattis aliquam faucibus purus in massa tempor. Pretium
            fusce id velit ut tortor. In vitae turpis massa sed elementum tempus
            egestas sed. Quam id leo in vitae turpis massa sed elementum tempus.
            Lectus sit amet est placerat in.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8">
        <div className="col-span-3">
          <h2 className="text-3xl mb-4">Activity</h2>
          <p>
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
          <p>
            Id leo in vitae turpis massa sed elementum. Diam vulputate ut
            pharetra sit. Morbi quis commodo odio aenean sed adipiscing diam
            donec. Ut etiam sit amet nisl. Sit amet nisl purus in mollis nunc.
            Viverra justo nec ultrices dui sapien eget. Nec ullamcorper sit amet
            risus nullam. Mattis aliquam faucibus purus in massa tempor. Pretium
            fusce id velit ut tortor. In vitae turpis massa sed elementum tempus
            egestas sed. Quam id leo in vitae turpis massa sed elementum tempus.
            Lectus sit amet est placerat in.
          </p>
        </div>
        <div className="pl-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../group.jpg"
          />

          <div className="p-2">
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
