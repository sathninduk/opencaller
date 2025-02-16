import type { Config } from 'tailwindcss'

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'gray-900': '#0a0a0a',
                'gray-800': '#1a1a1a',
                'gray-700': '#2a2a2a',
            },
        },
    },
    plugins: [],
};

export default config;