module.exports = {
  // mode: 'jit',
  content: [
    './apps/angularnx/src/**/*.{html,js}',
    './libs/ui/src/**/*.{html,js}',
    './libs/icons/src/**/*.{html,js}',
  ],

  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.{html,ts}'],
  // },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
