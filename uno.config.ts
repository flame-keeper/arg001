import { defineConfig } from "unocss";
import presetWind3 from "unocss/preset-wind3";

export default defineConfig({
  presets: [presetWind3()],
  theme: {
    colors: {
      canvas: "#F3F0EE",
      "canvas-lifted": "#FCFBFA",
      ink: "#141413",
      charcoal: "#262627",
      slate: "#696969",
      granite: "#555555",
      graphite: "#565656",
      "dust-taupe": "#D1CDC7",
      "signal-orange": "#CF4500",
      "signal-orange-light": "#F37338",
      "clay-brown": "#9A3A0A",
      "ghost-watermark": "#E8E2DA",
      "link-blue": "#3860BE",
      "soft-bone": "#F4F4F4",
    },
    fontFamily: {
      sans: '"Sofia Sans", "Arial", "sans-serif"',
    },
    borderRadius: {
      btn: "20px",
      hero: "40px",
      pill: "999px",
    },
    boxShadow: {
      nav: "rgba(0, 0, 0, 0.04) 0px 4px 24px 0px",
      elevated: "rgba(0, 0, 0, 0.08) 0px 24px 48px 0px",
    },
  },
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
    "btn-primary":
      "inline-flex items-center justify-center bg-ink text-canvas border-1.5 border-ink rounded-btn px-6 py-1.5 text-base font-medium tracking-[-0.02em] cursor-pointer transition-transform active:scale-[0.98]",
    "btn-secondary":
      "inline-flex items-center justify-center bg-white text-ink border-1.5 border-ink rounded-btn px-6 py-1.5 text-base font-normal tracking-[-0.02em] cursor-pointer transition-transform active:scale-[0.98]",
    "nav-link":
      "text-ink text-base font-medium tracking-[-0.03em] no-underline hover:opacity-70 transition-opacity",
    eyebrow:
      "text-sm font-bold uppercase tracking-[0.04em] text-ink flex items-center gap-2",
    "eyebrow-dot": "inline-block w-1.5 h-1.5 rounded-full bg-signal-orange-light shrink-0",
    "body-text": "text-base text-ink font-[450] leading-[1.4]",
    "heading-hero": "text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-medium leading-none tracking-[-0.02em] text-ink",
    "heading-section": "text-4xl font-medium leading-[1.22] tracking-[-0.02em] text-ink",
    "heading-card": "text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-ink",
  },
});
