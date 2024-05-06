import { Image } from "@nextui-org/react";
import React from "react"; // Add the missing import statement for React

export default function DayOne() {
  return (
    <div className="px-12 pt-24 pb-12">
      <h1 className="text-center text-5xl">Wednesday</h1>

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
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Bus Ride</h2>
          <p>
            We left Blair on Wednesday at 12:30. Before, that we loaded the
            busses with our luggage and supplies. The bus ride lasted 3 and a
            half hours. On the way, we passed by a lot of different landscapes
            and bridges. One of the long bridges we drove on was the William
            Preston Lane Jr. Memorial Bay Bridge, which went over the Chespeake
            Bay.
          </p>
          <p>
            After a long ride full of Schwartzs Math Packet and splling Pepsi,
            we arrived at Wallops Island, Virginia, which is located on the
            Delmarva Peninsula. Everyone was assigned a dorm room and teacher
            chaperone on the bus. All the luggage was unloaded into the common
            room, which we then carried to our rooms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8">
        <div className="col-span-3 text-lg">
          <h2 className="text-3xl mb-4">Dinner and Night Hike</h2>
          <p>
            Unluckily, some of us had to go to our first class on Coastal
            Ecology and Boat Safety before dinner. We learned about water
            measurements like pH, salinity, turbidity. One of the safety rules
            we learned was Water-Line-You, which meant to stay behind the line
            on the boat.
          </p>
          <p>
            Our dinner was chicken and mashed potatos. We had to get our
            temperature measured beforehand though to make sure none of us were
            sick. Dinner was OK tbh. Aiden kept getting seconds and thirds.
          </p>
          <p>
            The first field activity we did was a night hike. We boarded the
            buses, which were basically green refurbished school buses. We drove
            onto the Chincoteague Island, where the sun had just started
            setting, creating a really nice sunset. Our photos were really
            blurry because of all the fog on the windows.
          </p>
          <p>
            The sun really began setting a few minutes into the hike. We were
            soon surrounded in pitch black. Our guide explained the different
            adaptations that animals developed to live nocturnally. After
            learning about the hearing in animals like owls, we played a
            blindfolded game to simulate how animals depend on hearing to
            navigate.
          </p>
          <p>
            Our tour guide also passed around different scents so that we could
            learn about smell. Another game we played taught us about touch. We
            were each given a type of shell and had to find the other person
            with the same type, using only descriptions of touch.
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
