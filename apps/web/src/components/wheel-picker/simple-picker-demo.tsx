import type {
  WheelPickerClassNames,
  WheelPickerOption,
} from "@ncdai/react-wheel-picker";
import { WheelPicker, WheelPickerWrapper } from "@ncdai/react-wheel-picker";

import { cn } from "@/lib/cn";

const options: WheelPickerOption[] = [
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "Vite",
    value: "vite",
  },
  {
    label: "Laravel",
    value: "laravel",
  },
  {
    label: "React Router",
    value: "react-router",
  },
  {
    label: "Astro",
    value: "astro",
  },
  {
    label: "TanStack Start",
    value: "tanstack-start",
  },
  {
    label: "TanStack Router",
    value: "tanstack-router",
  },
  {
    label: "Gatsby",
    value: "gatsby",
  },
];

const classNames: WheelPickerClassNames = {
  optionItem: "text-zinc-400 dark:text-zinc-500",
  highlightWrapper:
    "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50",
};

export function SimplePickerDemo() {
  return (
    <WheelPickerWrapper
      className={cn(
        "mx-auto max-w-56 rounded-lg bg-white px-1 shadow-sm ring ring-black/5 dark:bg-zinc-900 dark:ring-white/15",
        "[&>[data-rwp]]:first:[&>[data-rwp-highlight-wrapper]]:rounded-s-md",
        "[&>[data-rwp]]:last:[&>[data-rwp-highlight-wrapper]]:rounded-e-md",
      )}
    >
      <WheelPicker
        options={options}
        defaultValue="react-router"
        classNames={classNames}
      />
    </WheelPickerWrapper>
  );
}
