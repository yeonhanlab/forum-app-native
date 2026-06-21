import { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/present")],
    plugins: [],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-default)",
                paper: "var(--bg-paper)",
            },
            text: {
                default: "var(--text-default)",
                paper: "var(--text-secondary)",
            },
            divider: "var(--divider)",
            primary: {
                main: "var(--primary-main)",
                contrast: "var(--primary-contrast)",
            },
            secondary: {
                main: "var(--secondary-main)",
                contrast: "var(--secondary-contrast)",
            },
            error: {
                main: "var(--error-main)",
                contrast: "var(--error-contrast)",
            },
            success: {
                main: "var(--success-main)",
                contrast: "var(--success-contrast)",
            },
        },
    },
} satisfies Config;
