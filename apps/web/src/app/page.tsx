import "@ncdai/react-wheel-picker/style.css";

import Link from "next/link";

import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { MultiPickerDemo } from "@/components/wheel-picker/multi-picker-demo";
import { SimplePickerDemo } from "@/components/wheel-picker/simple-picker-demo";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export default function Home() {
  return (
    <div className="px-4">
      <Mark className="mx-auto mt-12 mb-6 size-14" />

      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        iOS-like Wheel Picker <span className="block sm:inline" />
        for React
      </h1>

      <p className="mb-6 text-center text-lg text-balance sm:text-xl">
        Smooth inertia scrolling and infinite loop support.
      </p>

      <div className="mx-auto mb-12 grid grid-cols-2 gap-4 sm:w-sm">
        <Button size="lg" asChild>
          <Link href="/docs/getting-started">Get Started</Link>
        </Button>

        <Button
          className="border-zinc-300 dark:border-zinc-700"
          variant="outline"
          size="lg"
          asChild
        >
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            GitHub
          </a>
        </Button>
      </div>

      <div className="mb-12 space-y-4">
        <SimplePickerDemo />
        <MultiPickerDemo />
      </div>
    </div>
  );
}
