import {
  WheelPicker,
  type WheelPickerClassNames,
  type WheelPickerOption,
  WheelPickerWrapper,
} from "@ncdai/react-wheel-picker";

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
    "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50",
};

export function SimplePickerDemo() {
  return (
    <WheelPickerWrapper className="mx-auto max-w-56 rounded-md border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
      <WheelPicker
        options={options}
        defaultValue="react-router"
        classNames={classNames}
      />
    </WheelPickerWrapper>
  );
}
