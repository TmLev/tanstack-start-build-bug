import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return extendedTwMerge(clsx(inputs));
}

const extendedTwMerge = extendTailwindMerge({
  extend: {
    // Should be synced with tailwind.config.js
    theme: {
      colors: [
        "primary-blue",
        "light-blue",
        "bg-100",
        "outline-base",
        "grey-base",
        "grey-700",
        "dark-900",
      ],
    },

    classGroups: {
      "font-size": [
        {
          text: ["md-new", "body-1"],
        },
      ],
    },
  },
});
