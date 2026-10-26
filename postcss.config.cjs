// Tailwind 3 via PostCSS. @astrojs/tailwind (which did this before) doesn't support astro 6+.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
