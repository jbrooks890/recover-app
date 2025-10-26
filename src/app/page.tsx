import { Button } from "@crymson-core/web/ui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/">
        <div>+</div>
        <h2>HELP</h2>
      </Link>

      <div>Care</div>
      <div>Org</div>
      <div>Looking</div>
    </div>
  );
}
