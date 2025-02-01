/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#007bff', // Example blue - adjust to your preference
                'primary-hover': '#0056b3',
                'background': '#f8f9fa',
                'foreground': '#343a40',
                'gray-light': '#f1f3f5',
                'gray-medium': '#ced4da',
                'gray-dark': '#495057',
                'white': '#ffffff',
                'red': '#dc3545',
                'green': '#28a745',
            },
        },
    },
    // .
    plugins: [],
}