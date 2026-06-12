import { defineConfig } from "unocss";
import presetWind3 from "unocss/preset-wind3";

export default defineConfig({
  presets: [presetWind3()],
  shortcuts: {
    "flex-justify-between": "flex justify-between",
    "position-absolute": "absolute",
    "position-relative": "relative",
    "position-right-0": "right-0",
    "border-rounded-lg": "rounded-lg",
    "font-size-4": "text-xl",
    "border-b-1": "border-b",
    "color-inherit": "text-inherit",
    "decoration-none": "no-underline",
  },
});
