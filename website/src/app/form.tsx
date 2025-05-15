"use client";

import { useState } from "react";
import {
  WheelPicker,
  WheelPickerClassNames,
  WheelPickerOption,
  WheelPickerWrapper,
} from "react-wheel-picker";

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

export function Form() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("30");
  const [meridiem, setMeridiem] = useState("PM");

  const classNames: WheelPickerClassNames = {
    optionItem: "text-muted-foreground",
    highlightWrapper: "bg-accent text-accent-foreground",
  };

  return (
    <div className="p-4">
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

      <div>
        {hour}:{minute} {meridiem}
      </div>
    </div>
  );
}
