import type {
  WheelPickerClassNames,
  WheelPickerOption,
} from "@ncdai/react-wheel-picker";
import { WheelPicker, WheelPickerWrapper } from "@ncdai/react-wheel-picker";

const createArray = (length: number, add = 0): WheelPickerOption[] =>
  Array.from({ length }, (_, i) => {
    const value = i + add;
    return {
      label: value.toString().padStart(2, "0"),
      value: value.toString(),
    };
  });

const hourOptions = createArray(12, 1);
const minuteOptions = createArray(60);
const meridiemOptions: WheelPickerOption[] = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const classNames: WheelPickerClassNames = {
  optionItem: "text-zinc-400 dark:text-zinc-500",
  highlightWrapper:
    "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50",
};

export function MultiPickerDemo() {
  return (
    <WheelPickerWrapper className="mx-auto max-w-56 rounded-md border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
      <WheelPicker options={hourOptions} infinite classNames={classNames} />
      <WheelPicker options={minuteOptions} infinite classNames={classNames} />
      <WheelPicker options={meridiemOptions} classNames={classNames} />
    </WheelPickerWrapper>
  );
}
