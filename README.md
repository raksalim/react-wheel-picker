# React Wheel Picker

iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.

Check out the live demo: https://chanhdai.com/blog/react-wheel-picker

## Usage

To start using the library, install it in your project:

```bash
pnpm add @ncdai/react-wheel-picker
# or
yarn add @ncdai/react-wheel-picker
# or
npm install @ncdai/react-wheel-picker
# or
bun add @ncdai/react-wheel-picker
```

Add the core CSS to your app's entry point (e.g., `src/app/layout.tsx`, `src/main.tsx`, or `src/index.tsx`):

```tsx
import "@ncdai/react-wheel-picker/dist/style.css";
```

> This CSS includes only basic layout. Use classNames to customize visuals (see below).

Use the component in your app:

```tsx
import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
  type WheelPickerClassNames,
} from "@ncdai/react-wheel-picker";

const options: WheelPickerOption[] = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
];

const classNames: WheelPickerClassNames = {
  optionItem: "text-zinc-400",
  highlightWrapper: "bg-zinc-100 text-zinc-950",
};

export function WheelPickerDemo() {
  return (
    <WheelPickerWrapper className="max-w-56 rounded-md border border-zinc-200 bg-white shadow-xs">
      <WheelPicker options={options} classNames={classNames} />
    </WheelPickerWrapper>
  );
}
```

## Documentation

Find the full API reference in the [documentation](https://react-wheel-picker.chanhdai.com/docs/getting-started).
