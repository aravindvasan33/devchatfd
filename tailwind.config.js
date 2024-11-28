// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Make sure your files are included here
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Make sure to include DaisyUI as a plugin
  ],
  daisyui: {
    themes: [
      'light',
      'dark','synthwave'
      // Add other themes as needed
    ],
  },
};
