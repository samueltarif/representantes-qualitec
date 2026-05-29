/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./utils/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#d7e3ff",
        "link-blue": "#0066CC",
        "surface": "#f9f9f9",
        "on-secondary-fixed-variant": "#454749",
        "primary-container": "#1b1b1b",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#aac7ff",
        "on-background": "#1a1c1c",
        "surface-off-white": "#F5F5F7",
        "inverse-on-surface": "#f0f1f1",
        "surface-dim": "#dadada",
        "surface-container": "#eeeeee",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#2f3131",
        "surface-bright": "#f9f9f9",
        "on-surface": "#1a1c1c",
        "text-secondary": "#6E6E73",
        "surface-tint": "#5e5e5e",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#3a83ea",
        "secondary-fixed": "#e2e2e4",
        "tertiary": "#000000",
        "surface-variant": "#e2e2e2",
        "on-secondary": "#ffffff",
        "background": "#ffffff",
        "primary": "#000000",
        "on-primary-container": "#848484",
        "on-tertiary-fixed": "#001b3e",
        "on-primary-fixed-variant": "#474747",
        "on-secondary-fixed": "#1a1c1d",
        "outline": "#7e7576",
        "inverse-primary": "#c6c6c6",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "surface-container-high": "#e8e8e8",
        "on-surface-variant": "#4c4546",
        "on-tertiary-fixed-variant": "#00458e",
        "text-primary": "#1D1D1F",
        "on-primary": "#ffffff",
        "primary-fixed": "#e2e2e2",
        "on-primary-fixed": "#1b1b1b",
        "outline-variant": "#cfc4c5",
        "tertiary-container": "#001b3e",
        "on-secondary-container": "#616365",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#c6c6c6",
        "secondary-container": "#dfdfe1",
        "secondary": "#5d5e60",
        "secondary-fixed-dim": "#c6c6c8",
        "surface-container-low": "#f3f3f4",
        "surface-container-highest": "#e2e2e2"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "container-max": "1200px",
        "gutter": "24px",
        "section-gap": "120px",
        "margin-desktop": "64px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "label-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-sm": [
          "12px",
          {
            lineHeight: "1.3",
            letterSpacing: "0.02em",
            fontWeight: "600"
          }
        ],
        "body-md": [
          "17px",
          {
            lineHeight: "1.47",
            letterSpacing: "-0.022em",
            fontWeight: "400"
          }
        ],
        "display-lg": [
          "64px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],
        "display-lg-mobile": [
          "40px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
            fontWeight: "700"
          }
        ],
        "headline-xl": [
          "48px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.015em",
            fontWeight: "600"
          }
        ],
        "body-lg": [
          "21px",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.011em",
            fontWeight: "400"
          }
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.01em",
            fontWeight: "600"
          }
        ]
      }
    }
  },
  plugins: []
}
