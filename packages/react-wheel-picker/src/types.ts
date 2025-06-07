/**
 * Represents a single option in the wheel picker
 */
export type WheelPickerOption = {
  /** The value that will be returned when this option is selected */
  value: string;
  /** The text label displayed for this option */
  label: string | JSX.Element;
};

/**
 * Custom class names for styling different parts of the wheel picker
 */
export type WheelPickerClassNames = {
  /** Class name for individual option items */
  optionItem?: string;
  /** Class name for the wrapper of the highlighted area */
  highlightWrapper?: string;
  /** Class name for the highlighted item */
  highlightItem?: string;
};

/**
 * Props for the WheelPicker component
 */
export type WheelPickerProps = {
  /** Initial value of the picker when uncontrolled */
  defaultValue?: string;
  /** Current value of the picker when controlled */
  value?: string;
  /** Callback fired when the selected value changes */
  onValueChange?: (value: string) => void;

  /** Array of options to display in the wheel */
  options: WheelPickerOption[];
  /** Whether the wheel should loop infinitely */
  infinite?: boolean;
  /** The number of options visible on the circular ring, must be a multiple of 4 */
  visibleCount?: number;
  /** Sensitivity of the drag interaction (higher = more sensitive) */
  dragSensitivity?: number;
  /** Custom class names for styling different parts of the wheel */
  classNames?: WheelPickerClassNames;
};

/**
 * Props for the WheelPicker wrapper component
 */
export type WheelPickerWrapperProps = {
  /** Additional CSS class name for the wrapper */
  className?: string;
  /** Child elements to be rendered inside the wrapper */
  children: React.ReactNode;
};
