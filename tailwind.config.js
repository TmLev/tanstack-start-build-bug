/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#197CE5",
        "light-blue": "#2EA8FF",
        "bg-100": "#F2F6FA",
        "outline-base": "#B8C3D9",
        "white-base": "#F7F8FA",
        "grey-base": "#8C9CBD",
        "grey-100": "#B8C3D9",
        "grey-300": "#8C9CBD",
        "grey-700": "#2B3F69",
        "dark-900": "#272A30",
        "blue-grey": {
          50: "oklch(var(--blue-grey-50) / <alpha-value>)",
          100: "oklch(var(--blue-grey-100) / <alpha-value>)",
          200: "oklch(var(--blue-grey-200) / <alpha-value>)",
          300: "oklch(var(--blue-grey-300) / <alpha-value>)",
          400: "oklch(var(--blue-grey-400) / <alpha-value>)",
          500: "oklch(var(--blue-grey-500) / <alpha-value>)",
          600: "oklch(var(--blue-grey-600) / <alpha-value>)",
          700: "oklch(var(--blue-grey-700) / <alpha-value>)",
          800: "oklch(var(--blue-grey-800) / <alpha-value>)",
          900: "oklch(var(--blue-grey-900) / <alpha-value>)",
          950: "oklch(var(--blue-grey-950) / <alpha-value>)",
        },
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        chart: {
          1: "oklch(var(--chart-1) / <alpha-value>)",
          2: "oklch(var(--chart-2) / <alpha-value>)",
          3: "oklch(var(--chart-3) / <alpha-value>)",
          4: "oklch(var(--chart-4) / <alpha-value>)",
          5: "oklch(var(--chart-5) / <alpha-value>)",
        },
      },
      fontSize: {
        "sm-new": ["14px", "20px"],
        "md-new": ["16px", "20px"],
        "body-1": ["16px", "24px"],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: ({ theme }) => ({
        "tab-stripe": `inset 0 -2px 0 ${theme("colors.primary-blue")}`,
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
