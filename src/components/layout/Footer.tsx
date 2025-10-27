"use client";
import Link from "next/link";
import RecoverLogo from "$svg/recover-logo.svg";

type Props = {};
export default function Footer({}: Props) {
  return (
    <footer className="p-4 grid place-content-center">
      <Link href="/">
        <RecoverLogo className="h-12 mt-auto" />
      </Link>
    </footer>
  );
}
