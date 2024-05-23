/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    backgroundImage: {
      hero: "url('/assets/resources/bg/hero.jpg')",
      hands: "url('/assets/resources/hands.jpeg')",
      about: "url('/assets/resources/hero-about.jpg')",
      contact: "url('/assets/resources/hero-contact.jpg')",

    },
    colors: {
      merino: {
        '50': '#faf7f2',
        '100': '#f4f0e5',
        '200': '#e5dbc3',
        '300': '#d4c29d',
        '400': '#c2a475',
        '500': '#b68e59',
        '600': '#a87c4e',
        '700': '#8c6442',
        '800': '#72513a',
        '900': '#5c4332',
        '950': '#312219',
      },
    }
  },
};
export const plugins = [
  plugin(function ({ addVariant, e, postcss }) {
    addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
          `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
    });
  }),
];

