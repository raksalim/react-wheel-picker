import type { Registry } from "shadcn/registry";

export const components: Registry["items"] = [
  {
    name: "wheel-picker",
    type: "registry:component",
    dependencies: ["@ncdai/react-wheel-picker"],
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
    files: [
      {
        path: "wheel-picker/wheel-picker.tsx",
        type: "registry:component",
      },
    ],
  },
];
