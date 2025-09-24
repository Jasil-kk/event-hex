"use client";

import SearchButton from "@/components/SearchButton";
import FilterSortButton from "./components/FilterSortButton";
import Table from "./components/Table";
import sessions from "@/data/sessions.json";
import { useMemo, useState } from "react";

export default function Sessions() {
  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    if (!search.trim()) return sessions;

    return sessions.filter((session) => {
      const searchLower = search.toLowerCase();
      return (
        session.title.toLowerCase().includes(searchLower) ||
        session.date.toLowerCase().includes(searchLower) ||
        session.time.toLowerCase().includes(searchLower) ||
        session.eventName.toLowerCase().includes(searchLower) ||
        session.status.toLowerCase().includes(searchLower)
      );
    });
  }, [search]);

  return (
    <div className="w-full">
      <div className="mt-5 w-full flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-[#0A0D14] font-bold text-lg">
            Assigned Sessions
          </h2>
          <p className="text-[#525866] font-normal text-sm">
            Manage and monitor your active recording sessions.
          </p>
        </div>

        <div className="ml-auto flex items-center gap-3 flex-wrap">
          <SearchButton
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterSortButton />
        </div>
        <Table data={filteredSessions ?? []} />
      </div>
    </div>
  );
}
