"use client";
import HealthDummy from "@/components/HealthDummy";
import PainButton from "@/components/kit/PainButton";
import Profile from "@/components/kit/Profile";
import { Button } from "@crymson-core/web/ui";
import { useState } from "react";

type Props = {};
export default function page({}: Props) {
  const [facing, setFacing] = useState(true);
  const [pain, setPain] = useState(2);
  return (
    <main className="grid h-screen overflow-hidden place-content-center grow">
      <div className="grid grid-flow-col gap-x-8">
        <div className="flex flex-col gap-4 relative justify-self-center aspect-square items-center">
          <h1 className="pl-[0.1em] leading-none">Hurt</h1>
          <HealthDummy />
          <Button
            handleClick={() => setFacing(prev => !prev)}
            className="font-key text-4xl tracking-widest uppercase border-4 rounded-lg leading-none py-2 grid place-items-center self-center px-8"
          >
            {facing ? "Front" : "Back"}
          </Button>
          <PainButton
            value={pain}
            handleChange={(v = 0) => setPain(v)}
            className="absolute top-1/2 left-20"
          />
        </div>
        <Profile />
      </div>
    </main>
  );
}
