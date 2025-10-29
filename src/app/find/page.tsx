"use client";
import { Button } from "@crymson-core/web/ui";
import { users } from "../../../lib/users";
import { LocationIcon, SearchIcon } from "@crymson-core/web/svg";
import { Input } from "@crymson-core/forms";
import { useMemo, useState } from "react";
import { places } from "../../../lib/places";

type Props = {};
export default function page({}: Props) {
  const [nameSearch, setNameSearch] = useState("");
  const [distance, setDistance] = useState("50");
  const distanceFrom = useMemo(
    () => [...new Set(users.map(({ location }) => location))],
    []
  );
  return (
    <main className="grow flex flex-col items-center overflow-hidden gap-4">
      <h1>Find</h1>
      <div className="w-[100vmin] flex gap-4">
        {/* Search bar */}
        <div className="flex border-4 border-cyan-500 px-4 py-2 text-lg items-center rounded-full gap-4 grow">
          <SearchIcon className="h-[1.25em] stroke-cyan-500 fill-none [stroke-linecap:round]" />
          <Input
            value={nameSearch}
            handleChange={(v = "") => setNameSearch(v)}
            placeholder="Search"
            className="font-key font-medium"
          />
        </div>
        {/* Location */}
        <div className="grid grid-rows-2 gap-x-2 self-center">
          <LocationIcon className="h-6 row-span-2 col-start-1" />
          <span className="col-start-2">Panama City Beach, FL</span>
          <span className="col-start-2">{distance} mi</span>
        </div>
      </div>
      {/* Victim list */}
      <div className="w-[100vmin] border-4 border-cyan-500 rounded-lg p-8 overflow-hidden flex flex-col gap-4">
        <div>
          <div className="text-left font-key font-medium text-xl">
            <b className="text-cyan-400">{users.length}</b> People Found
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto grow">
          {users
            .filter(({ name }) =>
              name.toLowerCase().includes(nameSearch.toLowerCase())
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ uuid, name, age, location }) => {
              const milesfrom = 50 % (distanceFrom.indexOf(location) + 25);
              return (
                <div
                  key={uuid}
                  className="text-lg bg-cyan-700 rounded text-left px-4 hover:bg-cyan-600 duration-100 ease-out py-1 flex gap-4 justify-between"
                >
                  <span>
                    {name} ({age})
                  </span>
                  <div className="flex gap-1 text-base self-center">
                    <LocationIcon className="h-[.9em] self-center relative" />
                    <span>
                      Near {location} • <i>{milesfrom || 11} mi</i>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
