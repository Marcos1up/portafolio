import { extendTheme } from "@chakra-ui/react";

//variable de la paleta de colores
const colors = {
  background: {
    100: "#000000", // Principal rgb(0, 0, 0)
    200: "#161616", // rgb(22, 22, 22)
    300: "#2c2c2c", // rgb(44, 44, 44)
  },
  primary: {
    100: "#e03f27", // Principal rgb(224, 63, 39)
    200: "#ffcd33", // rgb(255, 205, 51)
    300: "#ffdab0", // rgb(255, 218, 176)
  },
  accent: {
    100: "#ed981a", // Principal rgb(237, 152, 26)
    200: "#803e00", // rgb(128, 62, 0)
  },
  text: {
    100: "#FFFFFF", // Principal rgb(255, 255, 255)
    200: "#737373", // rgb(115, 115, 115)
  },
};

//estilos específicos para cada componente
const componentStyles = {
  App: {},
  NavBar: {},
  Hero: {},
  About: {},
  CareerProfile: {},
  Projects: {},
  Contact: {},
  SocialFooter: {},
};

//combinar los estilos
const theme = extendTheme({ ...componentStyles, ...colors });

export default theme;
