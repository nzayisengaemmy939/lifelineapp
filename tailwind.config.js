/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "cdbd8e#",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F1F2F3",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#cdbd8e",
          foreground: "hsl(var(--primary-foreground))",
          white:"#F2F3F4"
        },
        secondary: {
          DEFAULT: "rgba(205, 189, 142, 0.8)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        third: {
          DEFAULT: "rgba(205, 189, 142, 0.4)",
          foreground: "hsl(var(--third-foreground))",
        },
        fourth: {
          DEFAULT: "rgba(205, 189, 142, 0.2)",
          foreground: "hsl(var(--fourth-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        "dashboard-screen": "calc(100vh - 64px)",
      }
    },
  },
  plugins: [],
}

