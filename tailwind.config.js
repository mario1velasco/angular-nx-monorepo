// ! https://www.cloudhadoop.com/angular-tailwind-tutorial/
// ! Follow that tutorial and after add the content

module.exports = {
  // mode: 'jit',
  content: [
    './apps/angularnx/src/**/*.{html,js}',
    './libs/shared/ui/src/**/*.{html,js}',
    './libs/shared/icons/src/**/*.{html,js}',
    './libs/shared/util/src/**/*.{html,js}',
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
