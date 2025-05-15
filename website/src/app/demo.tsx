"use client";

import {
  WheelPicker,
  WheelPickerClassNames,
  WheelPickerOption,
  WheelPickerWrapper,
} from "@ncdai/react-wheel-picker";
import { useState } from "react";

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
  optionItem: "text-muted-foreground",
  highlightWrapper: "bg-accent text-accent-foreground",
};

export function Demo() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("30");
  const [meridiem, setMeridiem] = useState("PM");

  return (
    <div className="container mx-auto space-y-4 p-4">
      <p className="text-center text-balance">
        iOS-like wheel picker for React with smooth inertia scrolling and
        infinite loop support.
      </p>

      <div className="mx-auto flex h-8 max-w-56 items-center justify-center text-lg font-semibold">
        {hour.padStart(2, "0")}:{minute.padStart(2, "0")} {meridiem}
      </div>

      <WheelPickerWrapper className="mx-auto max-w-56 rounded-xl border bg-background">
        <WheelPicker
          options={hourOptions}
          value={hour}
          onValueChange={setHour}
          infinite
          classNames={classNames}
        />
        <WheelPicker
          options={minuteOptions}
          value={minute}
          onValueChange={setMinute}
          infinite
          classNames={classNames}
        />
        <WheelPicker
          options={meridiemOptions}
          value={meridiem}
          onValueChange={setMeridiem}
          classNames={classNames}
        />
      </WheelPickerWrapper>
    </div>
  );
}
