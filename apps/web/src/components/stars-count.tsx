"use client";

import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type StarsCountResponse = {
  stargazers_count: number;
};

export function StarsCount() {
  const { data } = useSWR<StarsCountResponse>(`/api/stargazers_count`, fetcher);

  if (!data) {
    return <span className="h-3 w-6 rounded-full bg-muted" />;
  }

  if (data.stargazers_count < 0) {
    return <span className="h-3 w-6 rounded-full bg-muted" />;
  }

  return (
    <span className="mt-px w-6 text-center font-mono text-xs/none font-medium text-muted-foreground tabular-nums">
      {data.stargazers_count.toLocaleString()}
    </span>
  );
}
