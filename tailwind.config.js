module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                'bg-gray-10': '#f0f0f0',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
