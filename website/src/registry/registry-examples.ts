import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "wheel-picker-demo",
    type: "registry:example",
    registryDependencies: ["https://chanhdai.com/r/wheel-picker.json"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-form-demo",
    type: "registry:example",
    registryDependencies: ["https://chanhdai.com/r/wheel-picker.json", "form"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
