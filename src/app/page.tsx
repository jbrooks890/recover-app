import { LocationIcon, HeartIcon, StarIcon } from "@crymson-core/web/svg";
import { Button } from "@crymson-core/web/ui";
import Image from "next/image";
import Link from "next/link";
import RecoverLogo from "$svg/recover-logo.svg";
import FirstAid from "$svg/first-aid-icon.svg";

export default function Home() {
  const subNav = {
    Care: { href: "/", Icon: HeartIcon },
    Vendor: { href: "/", Icon: StarIcon },
    Find: {
      href: "/",
      Icon: LocationIcon,
    } as const,
  };

  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      <Link
        href="/"
        className="self-center grow  flex gap-8 flex-col justify-center"
      >
        <div className="grid place-items-center h-96 aspect-square bg-red-500 rounded-full p-16">
          <FirstAid />
        </div>
        <h1 className="leading-none text-center">HELP</h1>
      </Link>

      <div className="grid gap-4 grid-cols-3 self-center  overflow-hidden">
        {/* <div>Care</div>
        <div>Org</div>
        <div className="grid aspect-square place-items-center ">
          <h3>Find</h3>
        </div> */}
        {Object.entries(subNav).map(([display, { href, Icon }]) => {
          return (
            <div key={display} className="grid gap-4 justify-center">
              <div className="aspect-square rounded-full h-24 place-items-center p-4 bg-blue-600">
                <Icon className="aspect-square" />
              </div>
              <h3 className="text-center leading-none">{display}</h3>
            </div>
          );
        })}
      </div>
      <RecoverLogo className="h-12 mt-auto" />
    </div>
  );
}
