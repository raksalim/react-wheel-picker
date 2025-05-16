import "@ncdai/react-wheel-picker/dist/style.css";

import Link from "next/link";

import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { MultiPickerDemo } from "./multi-picker-demo";
import { SimplePickerDemo } from "./simple-picker-demo";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-12 mb-4 flex flex-col items-center gap-4">
        <Mark className="size-10" />
        <h1 className="text-4xl leading-none font-bold">React Wheel Picker</h1>
      </div>

      <p className="mb-6 text-center text-lg leading-snug text-balance">
        iOS-like wheel picker for React
        <span className="block" />
        with smooth inertia scrolling and infinite loop support.
      </p>

      <div className="mx-auto mb-8 grid grid-cols-2 gap-4 sm:w-sm">
        <Button asChild>
          <Link href="/docs/getting-started">Get Started</Link>
        </Button>

        <Button
          variant="outline"
          className="border-zinc-300 dark:border-zinc-700"
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
