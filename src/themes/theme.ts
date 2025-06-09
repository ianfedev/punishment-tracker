import {definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#aee69f',
      100: '#98df87',
      200: '#81d86f',
      300: '#67d155',
      400: '#48ca39',
      500: '#0ec20e',
      contrastColor: '{white}'
    },
    colorScheme: {
      dark: {
        "50": "#f4f4f4",
        "100": "#cbcbcb",
        "200": "#a3a3a3",
        "300": "#7a7a7a",
        "400": "#515151",
        "500": "#282828",
        "600": "#222222",
        "700": "#1c1c1c",
        "800": "#161616",
        "900": "#101010",
        "950": "#0a0a0a"
      },
      light: {
        "50": "#ffffff",
        "100": "#fdfdfd",
        "200": "#fcfcfc",
        "300": "#fafafa",
        "400": "#f9f9f9",
        "500": "#f7f7f7",
        "600": "#d2d2d2",
        "700": "#adadad",
        "800": "#888888",
        "900": "#636363",
        "950": "#3e3e3e"
      }
    }
  }
});
