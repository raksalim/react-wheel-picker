import "@ncdai/react-wheel-picker/style.css";

import {
  InfinityIcon,
  MousePointerClickIcon,
  PointerIcon,
  TriangleDashedIcon,
} from "lucide-react";
import Link from "next/link";

import { MultiPickerDemo } from "@/components/examples/multi-picker-demo";
import { SimplePickerDemo } from "@/components/examples/simple-picker-demo";
import { Icons } from "@/components/icons";
import { InstallationCommand } from "@/components/installation-command";
import { Mark } from "@/components/mark";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    icon: PointerIcon,
    title: "Natural touch scrolling",
  },
  {
    icon: MousePointerClickIcon,
    title: "Mouse drag and scroll support for desktop",
  },
  {
    icon: InfinityIcon,
    title: "Infinite loop scrolling",
  },
  {
    icon: TriangleDashedIcon,
    title: "Unstyled components for complete style customization",
  },
  {
    icon: Icons.shadcn,
    title: "Easy installation via shadcn CLI",
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
        <Button asChild>
          <Link href="/docs/getting-started">Get Started</Link>
        </Button>

        <Button
          className="border-zinc-300 dark:border-zinc-700"
          variant="outline"
          asChild
        >
          <a
            href="https://chanhdai.com/blog/react-wheel-picker#examples"
            target="_blank"
            rel="noopener"
          >
            Examples
          </a>
        </Button>
      </div>

      <div className="mb-12 border-y">
        <div className="mx-auto grid max-w-4xl grid-cols-1 border-dashed sm:grid-cols-2 lg:border-x">
          <InstallationCommand className="order-1 border-b border-dashed sm:col-span-2" />

          <div className="order-2 border-dashed p-6 sm:order-1 sm:border-r">
            <div className="grid gap-4">
              {featuredItems.map((item) => (
                <FeaturedItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="relative z-40 order-1 space-y-6 py-6 max-sm:border-b sm:order-2 sm:dark:bg-black/10">
            <SimplePickerDemo />
            <MultiPickerDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedItem({
  icon: Icon,
  title,
  learnMore,
}: {
  icon: React.ComponentType;
  title: string;
  learnMore?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-black/1 shadow-xs dark:bg-white/5 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:text-muted-foreground"
        aria-hidden="true"
      >
        <Icon />
      </span>

      <p className="text-balance">
        {title}
        {learnMore && (
          <>
            .{" "}
            <a
              className="font-medium underline underline-offset-4"
              href={learnMore}
              target="_blank"
              rel="noopener"
            >
              Learn more
            </a>
          </>
        )}
      </p>
    </div>
  );
}
