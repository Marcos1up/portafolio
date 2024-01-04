//importaciones externas
import { Box, VStack, HStack, Flex, Divider } from "@chakra-ui/react";
//import { Route } from "wouter";

//importar components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

//importar assets
import bgImg from "./assets/images/bg-desktop.jpeg";

function App() {
  return (
    <Flex direction="column" align="center" justify="center" overflow="hidden">
      <HStack className="background" {...backgroundProps}>
        <VStack id="sidebar" className="sideBar" as="header" {...sidebarProps}>
          <Header />
        </VStack>

        <VStack as="main" className="content" {...mainContentProps}>
          {renderSection(Home)}
          {renderSection(About)}
          {renderSection(Skills)}
          {renderSection(Projects)}
          {renderSection(Contact)}
        </VStack>

        <VStack className="navbar" as="nav" {...navbarProps}>
          <VStack className="navBar" {...navBarProps}>
            <Navbar />
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

function renderSection(Component) {
  return (
    <>
      <Box>
        <Component />
      </Box>
      <Divider w="900px" borderWidth="2px" />
    </>
  );
}

const backgroundProps = {
  d: "flex",
  bg: "#242424",
  bgImage: bgImg,
  bgRepeat: "no-repeat",
  bgSize: "cover",
  minH: "100vh",
  px: "5%",
};

const sidebarProps = {
  bg: "#523B39",
  minW: "300px",
  maxW: "300px",
  w: "300px",
  h: "80vh",
  p: "5",
  align: "center",
  boxShadow: "md",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
};

const mainContentProps = {
  flex: "1",
  h: "80vh", // Ajustar a la altura de la ventana del navegador
  overflowY: "auto", // Habilitar desplazamiento vertical
  bg: "white",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  boxShadow: "md",
  sx: {
    "&::-webkit-scrollbar": {
      width: "16px",
      backgroundColor: `rgba(0, 0, 0, 0)`, //color de fondo
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#523B39", //color principal
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#2F1B1A", //color onSelect
    },
  },
};

const navbarProps = {
  align: "start",
  justify: "space-between",
  h: "80vh",
  spacing: "140px",
  ml: "4",
};

const navBarProps = {
  bg: "#FAFFDC",
  borderRadius: "full",
  boxShadow: "md",
  p: "10px",
};

export default App;

/* 
@font-face {
  font-family: "Cooper Hewitt";
  src: url("../assets/fonts/CooperHewitt-Light.woff") format("woff"),
    url("../assets/fonts/CooperHewitt-Thin.woff") format("woff");
}

Tema Claro (con la opción de cambiar a modo oscuro en el futuro)
  Fondo principal: --z-light-grey (rgb(248, 248, 248))
  Elementos destacados y botones: --beaver (#A78976)
  Texto: --black (#141414)
  Divisores y bordes: --light-grey (#D9D9D9)
  Fondo del navbar y scrollbar: --dark-red (#523B39)
  Fondo para hover en elementos interactivos: --eerie-black (#1F1F1F)

Tema Oscuro
  Fondo principal: --jet (#292929)
  Elementos destacados y botones: --z-yellow (rgb(250, 247, 220))
  Texto: --z-white (rgb(255, 255, 255))
  Divisores y bordes: --z-trasparent-black (rgba(0, 0, 0, 0.6))
  Fondo del navbar y scrollbar: --eerie-black (#1F1F1F)
  Fondo para hover en elementos interactivos: --z-black (rgb(36, 36, 36))
*/
