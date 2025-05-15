import "react-wheel-picker/dist/style.css";

import { ThemeSwitcher } from "@/components/theme-switcher";

import { Form } from "./form";

export default function Home() {
  return (
    <div className="p-4">
      <Form />
      <ThemeSwitcher />
    </div>
  );
}
