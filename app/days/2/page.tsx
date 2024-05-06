import { Image } from "@nextui-org/react";
import React from "react"; // Add the missing import statement for React

export default function DayTwo() {
  return (
    <div className="px-12 pt-24 pb-12">
      <h1 className="text-center text-5xl">Thursday</h1>

      <div className="grid grid-cols-5 mt-8">
        <div className="pr-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../intertidal.jpg"
          />

          <div className="p-2">
            <h3 className="text-sm">
              Collecting organisms in the intertidal zone. <br />
              Picture credit: Mr. Ostrander
            </h3>
          </div>
        </div>
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Intertidal</h2>
          <p>
            In the intertidal zone, the water level changes with the tides. 
            This area is home to a variety of organisms that have adapted to the changing conditions. 
            Some of the organisms that live in the intertidal zone include barnacles, mussels, and seaweed. 
            These organisms have developed different strategies to survive in this harsh environment. 
            The intertidal zone is an important habitat for many marine species and plays a key role in the marine ecosystem.
            In our exploration of the intertidal zone, we utilized various techniques to examine the different types of life that inhabit this area.
            We explored the animals and plants in the supralittoral, littoral, and sublitoral zones using a quadrat. To further examine the vegetation and animals in the sublitoral zone, we used the box to collect organisms, which we would later use in our organism lab.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8 text-lg">
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Marine Invertebrates</h2>
          <p>
            In the afternoon, we arrived at a dock to collect marine invertebrates. We utilized nets to collect the organisms and plants near the dock. 
            Through this, we were able to collect a variety of marine organisms, including sea sponge, shrimp, barnacles, and sea squirts, to name a few.
            This process of collecting and identifying the marine invertebrates was a great way to learn about the different types of life that inhabit the marine environment, and prepared us for the later lab we would conduct.
          </p>
          
        </div>
        <div className="pl-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../invertebrate.jpg"
          />

          <div className="p-2">
            <h3 className="text-sm">
              The dock where we collected marine invertebrates. 
            </h3>
          </div>

          
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8">
        <div className="pr-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../dissection.jpg"
          />
          <div className="p-2">
            <h3 className="text-sm">
              In the middle of dissecting a squid.
            </h3>
          </div>

        </div>
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Organism Dissection</h2>
          <p>
            In the night, we conducted a lab where we were able to dissect a squid. By utilizing a variety of tools including scissors, scalpel, and others, were we able to extract and open up the squid.
            We were able to take out the squids beak, and creating incisions to examine the squids internal organs. This lab was a great way to learn about the anatomy of a squid and how it functions.
            We saw the squids ink sac, gills, siphon, liver, stomach, gonad, and other organs.
          </p>
        </div>
      </div>

    </div>
  );
}
