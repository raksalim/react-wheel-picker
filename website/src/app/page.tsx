import "@ncdai/react-wheel-picker/dist/style.css";

import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";

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

      <div className="mb-8 flex justify-center">
        <Button asChild>
          <a
            href="https://chanhdai.com/blog/react-wheel-picker"
            target="_blank"
            rel="noopener"
          >
            Get Started
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
