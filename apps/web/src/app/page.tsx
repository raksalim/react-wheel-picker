import "@ncdai/react-wheel-picker/style.css";

import {
  InfinityIcon,
  MouseIcon,
  PaletteIcon,
  SquareTerminalIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import Link from "next/link";

import { Mark } from "@/components/mark";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";
import { MultiPickerDemo } from "@/components/wheel-picker/multi-picker-demo";
import { SimplePickerDemo } from "@/components/wheel-picker/simple-picker-demo";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

const featuredItems = [
  {
    icon: TabletSmartphoneIcon,
    title: "Natural touch scrolling",
  },
  {
    icon: MouseIcon,
    title: "Mouse drag and scroll support for desktop",
  },
  {
    icon: InfinityIcon,
    title: "Infinite loop scrolling",
  },
  {
    icon: PaletteIcon,
    title: "Unstyled components for complete style customization",
  },
  {
    icon: SquareTerminalIcon,
    title: "Easy installation via shadcn CLI",
    learnMore: "https://chanhdai.com/blog/react-wheel-picker",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />

      <Mark className="mx-auto mt-12 mb-6 size-14" />

      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        iOS-like Wheel Picker <span className="block sm:inline" />
        for React
      </h1>

      <p className="mb-6 text-center text-lg text-balance sm:text-xl">
        Smooth inertia scrolling and infinite loop support.
      </p>

      <div className="mx-auto mb-12 grid grid-cols-2 gap-4 px-4 sm:w-sm">
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

      <div className="mb-12 sm:border-y">
        <div className="mx-auto grid max-w-4xl gap-12 divide-dashed border-dashed sm:grid-cols-2 sm:gap-0 sm:divide-x lg:border-x">
          <div className="order-2 px-4 sm:order-1 sm:p-6">
            <div className="grid gap-4">
              {featuredItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-black/1 shadow-xs dark:bg-white/5 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:text-muted-foreground"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <p className="text-balance">
                      {item.title}
                      {item.learnMore && (
                        <>
                          .{" "}
                          <a
                            className="font-medium underline underline-offset-4"
                            href={item.learnMore}
                            target="_blank"
                          >
                            Learn more
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-40 order-1 space-y-4 sm:order-2 sm:py-6 sm:dark:bg-black/10">
            <SimplePickerDemo />
            <MultiPickerDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
