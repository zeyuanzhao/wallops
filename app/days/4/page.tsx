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
            src="../../orglab.jpg"
          />
          <div className="p-2">
            <h3 className="text-sm">
              Students examining the microorganisms we collected via a microscope.
            </h3>
          </div>
        </div>
        
        <div className="col-span-3">
          <h2 className="text-3xl mb-4">Organism Lab</h2>
          <p>
            We finished off our Wallops trip by conducting an organism lab with all of the organisms we had collected throughout our days. 
            First, we looked at micro organisms like plankton under a microscope. We were able to record specific characteristics about them, such as their shape, size, and moving patterns. One of them looked like a centipede, while another looked like a jellyfish.
            We also looked at the larger organisms we had collected, such as fish, shrimp, and turtles. Using species books detailing different types of organisms in the Atlantic Ocean area, we were able to identify the specie and scientific name of each of the organisms we had collected.
          </p>
        </div>
      </div>
    </div>
  );
}
