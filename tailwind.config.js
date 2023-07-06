/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,svelte}"],
  theme: {
      extend: {
          colors: {
              primary: "#fefeff",
              secondary: "#f5f7fa",
              tertiary: "#E53947",
              danger: "#DC2626",
              success: "#16A34A",
              warning: "#CA8A04",
              off: "#6B7280",
              "primary-text": "#0a1c4c",
              "secondary-text": "#0b51b9",
          },
      },
  },
};