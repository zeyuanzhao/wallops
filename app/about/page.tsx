import { Chip } from "@nextui-org/react";

export default function About() {
  return (
    <div className="px-12 pt-24 pb-12">
      <div className="pl-8">
        <h1 className="text-center text-5xl mb-12">About</h1>
        <p>
          This website is a guide and recap of the Blair Magnet Class of &apos;26
          Wallops Trip.
        </p>
        <h2 className="mt-4 mb-2 text-2xl">Credits: </h2>
        <p>Alex Zhao</p>
        <p>Arjun Samavedam</p>
        <p>Mr. Ostrander - Intertidal Photo</p>
        <p>Other Students - Various Photos</p>
        <h2 className="mt-4 mb-2 text-2xl">Tech Stack: </h2>
        <div className="flex gap-2">
          <Chip color="primary">Typescript</Chip>
          <Chip color="primary">Next.js</Chip>
          <Chip color="primary">React</Chip>
          <Chip color="primary">TailwindCSS</Chip>
          <Chip color="primary">NextUI</Chip>
          <Chip color="primary">Framer Motion</Chip>
          <Chip color="primary">react-icons</Chip>
          <Chip color="primary">Cloudflare</Chip>
        </div>
      </div>
    </div>
  );
}
