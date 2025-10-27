import { LocationIcon, HeartIcon, StarIcon } from "@crymson-core/web/svg";
import { Button } from "@crymson-core/web/ui";
import Image from "next/image";
import Link from "next/link";
import FirstAid from "$svg/first-aid-icon.svg";

export default function Home() {
  const subNav = {
    Care: { href: "/", Icon: HeartIcon },
    Vend: { href: "/", Icon: StarIcon },
    Find: {
      href: "/",
      Icon: LocationIcon,
    } as const,
  };

  return (
    <main className="flex flex-col gap-4 grow">
      <Link
        href="/help"
        className="self-center grow  flex gap-8 flex-col justify-center"
      >
        <div className="grid place-items-center h-96 aspect-square bg-red-500 rounded-full p-16">
          <FirstAid />
        </div>
        <h1 className="leading-none text-center">HELP</h1>
      </Link>

      <div className="grid gap-8 grid-cols-3 self-center  overflow-hidden">
        {/* <div>Care</div>
        <div>Org</div>
        <div className="grid aspect-square place-items-center ">
          <h3>Find</h3>
        </div> */}
        {Object.entries(subNav).map(([display, { href, Icon }]) => {
          return (
            <div key={display} className="group grid gap-4 justify-center">
              <div className="aspect-square rounded-full h-24 place-items-center p-4 bg-cyan-600">
                <Icon className="aspect-square" />
              </div>
              <h3 className="text-center leading-none opacity-0 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out">
                {display}
              </h3>
            </div>
          );
        })}
      </div>
    </main>
  );
}
