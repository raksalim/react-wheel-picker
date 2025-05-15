# react-wheel-picker

iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.

## Installation

```bash
npm install @ncdai/react-wheel-picker
# or
yarn add @ncdai/react-wheel-picker
# or
pnpm add @ncdai/react-wheel-picker
```

## Anatomy

The wheel picker consists of two main components:

### WheelPickerWrapper

The wrapper component that contains one or more wheel pickers. It provides the container structure and handles the layout of multiple wheels.

```tsx
<WheelPickerWrapper>
  <WheelPicker />
  <WheelPicker />
  <WheelPicker />
</WheelPickerWrapper>
```

### WheelPicker

The core component that renders a single wheel of options. Each wheel picker consists of:

- A container with a 3D perspective
- A scrollable list of options
- A highlight area that indicates the selected option
- A mask that creates the fade effect at the top and bottom

```tsx
<WheelPicker
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
  value="1"
  onValueChange={(value) => {}}
/>
```

> **Styling:** The component is unstyled by default. You can customize the appearance using the `classNames` prop to style:
>
> - Individual options (`optionItem`)
> - The highlight area (`highlightWrapper`)
> - The highlighted option (`highlightItem`)
>
> Check out the TailwindCSS example below to see how to style the component.

## Usage

1. Import CSS:

```tsx
import "@ncdai/react-wheel-picker/dist/style.css";
```

2. Import components:

```tsx
import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
  type WheelPickerClassNames,
} from "@ncdai/react-wheel-picker";
```

3. Example with TailwindCSS:

```tsx
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

export function TimePicker() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("30");
  const [meridiem, setMeridiem] = useState("PM");

  return (
    <div className="container mx-auto space-y-4 p-4">
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
```

> View the complete source code at [https://github.com/ncdai/react-wheel-picker/tree/main/website](https://github.com/ncdai/react-wheel-picker/tree/main/website)

## API

### WheelPicker

Props for the WheelPicker component:

| Prop              | Type                      | Default    | Description                                                    |
| ----------------- | ------------------------- | ---------- | -------------------------------------------------------------- |
| `options`         | `WheelPickerOption[]`     | (required) | Array of options to display in the wheel                       |
| `value`           | `string`                  | -          | Current value of the picker (controlled mode)                  |
| `defaultValue`    | `string`                  | -          | Default value of the picker (uncontrolled mode)                |
| `onValueChange`   | `(value: string) => void` | -          | Callback fired when the selected value changes                 |
| `infinite`        | `boolean`                 | `false`    | Enable infinite scrolling                                      |
| `visibleCount`    | `number`                  | `20`       | Number of options visible on the wheel (must be multiple of 4) |
| `dragSensitivity` | `number`                  | `3`        | Sensitivity of the drag interaction (higher = more sensitive)  |
| `classNames`      | `WheelPickerClassNames`   | -          | Custom class names for styling                                 |

### WheelPickerWrapper

Props for the WheelPickerWrapper component:

| Prop        | Type              | Default    | Description                |
| ----------- | ----------------- | ---------- | -------------------------- |
| `className` | `string`          | -          | CSS class name for wrapper |
| `children`  | `React.ReactNode` | (required) | WheelPicker components     |

### Types

```tsx
type WheelPickerOption = {
  /** Value that will be returned when this option is selected */
  value: string;
  /** Text label displayed for this option */
  label: string;
};

type WheelPickerClassNames = {
  /** Class name for individual option items */
  optionItem?: string;
  /** Class name for the wrapper of the highlighted area */
  highlightWrapper?: string;
  /** Class name for the highlighted item */
  highlightItem?: string;
};
```
