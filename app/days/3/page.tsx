import { Image } from "@nextui-org/react";
import React from "react"; // Add the missing import statement for React

export default function DayThree() {
  return (
    <div className="px-12 pt-24 pb-12">
      <h1 className="text-center text-5xl">Friday</h1>

      <div className="grid grid-cols-5 mt-8">
        <div className="pr-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../cruise.jpg"
          />

        </div>
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Organism Research Cruise</h2>
          <p>
            During the organism research cruise, we were able to collect data about water and organisms from the ocean.
            We collected water using a Van Dorn bottle to collect water samples from different depths. Using this collected water, we ran multiple tests to examine different properties about the water to evaluate the water health.
            We looked at it's salinity, temperature, dissolved oxygen levels, and chemical levels. We also used a Secchi disk to measure the water's clarity. We recorded this data to analyze the health of the water and the organisms that live in it and contrast it with the other groups.
            Lastly, with the instruction of our teacher we were able to collect a variety of organisms from the ocean using a trawl net. We collected a variety of organisms, including fish, shrimp, and turtles, to name a few.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8">
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Barrier Island and Dune Ecology</h2>
          <p>
            A large part of Wallops is the fact that the surrounding area is built on a barrier island. Barrier islands are long, narrow islands that run parallel to the coast. These islands are constantly changing due to the forces of wind, waves, and currents. The barrier island at Wallops is home to a variety of plants and animals that have adapted to the harsh conditions of the island. Some of the plants that can be found on the island include beach grass and sea oats. These plants help to stabilize the sand and prevent erosion. Additionally, small and large dunes provide a barrier for wind and a division between the wetter and drier parts of the area. 
          </p>
        </div>
        <div className="pl-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../dune.jpg"
          />

        </div>
      </div>

      <div className="grid grid-cols-5 mt-8">
        <div className="pr-8 pt-16 flex flex-col gap-4 col-span-2">
          <Image
            isZoomed
            shadow="lg"
            alt=""
            className="z-1 w-full h-full object-cover"
            src="../../fun.jpg"
          />

        </div>
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Survival with Schwartz</h2>
          <p>
            One of the mandatory optional activities was the survival with Schwartz. This activity was a great way to learn about the different ways to survive in the wilderness. We were introduced to it with a mini activity about navigating with trailblazers, leading into the larger group meeting with Schwartz. He told stories, discussed some safety and hiking tips, and we performed skits! He finished off the night by showing us how to effectively spit out our toothpaste when hiking.
          </p>
        </div>
      </div>
    </div>
  );
}
