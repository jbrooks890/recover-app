"use client";
import { TFieldInput, TFieldInputOfType } from "@crymson-core/forms/types";
import { MinusIcon } from "@crymson-core/web/svg";
import { Button } from "@crymson-core/web/ui";
import { useState } from "react";
import BleedingIcon from "$svg/bleeding-icon.svg";
import BrokenIcon from "$svg/broken-icon.svg";

type PainScale = 0 | 1 | 2 | 3;
type Props = TFieldInputOfType<"number"> & Passthrough<HTMLButtonElement>;
export default function PainButton({
  value = 0,
  range = [0, 3],
  handleChange,
  className,
}: Props) {
  const [bleeding, setBleeding] = useState(false);
  const [broken, setBroken] = useState(false);
  return (
    <div className={`grid grid-cols-2 gap-y-6 gap-x-2 ${className || ""}`}>
      <div
        className={`font-key uppercase mix-blend-lighten col-span-full relative place-self-center`}
      >
        <Button
          handleClick={() => value < 3 && handleChange(value + 1)}
          className={`grid place-content-center rounded-full text-4xl leading-none aspect-square h-[1.75em] duration-150 ease-in ${
            value === 3
              ? "bg-red-500"
              : value === 2
              ? "bg-amber-500"
              : value === 1
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {value}
        </Button>
        <Button
          handleClick={() => {
            value > 0 && handleChange(value - 1);
          }}
          disabled={value === 0}
          className={`grid place-items-center rounded-full leading-none text-xl h-[1.5em] aspect-square border-4 border-black box-content absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 disabled:opacity-0 ${
            value === 3
              ? "bg-red-500"
              : value === 2
              ? "bg-amber-500"
              : value === 1
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          <MinusIcon />
        </Button>
      </div>
      <div className="grid grid-cols-subgrid col-span-full *:place-items-center *:aspect-square *:grid *:bg-black *:rounded-full *:p-2 *:border-red-500 *:border-2">
        <Button className="grid" handleClick={() => setBleeding(prev => !prev)}>
          <BleedingIcon className="text-red-500 aspect-square h-8" />
        </Button>
        <Button className="grid" handleClick={() => setBroken(prev => !prev)}>
          <BrokenIcon className="aspect-square" />
        </Button>
      </div>
    </div>
  );
}
