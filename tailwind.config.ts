/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                krea: {
                    50: '#f4f7fb',
                    100: '#eef4fb',
                    400: '#6b7280',
                    500: '#374151'
                }
            },
            borderRadius: {
                xl: '1rem'
            }
        },
    },
    plugins: [],
}