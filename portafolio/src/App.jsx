//importaciones externas
import { VStack, HStack, Divider } from "@chakra-ui/react";
//import { Route } from "wouter";

//importar components
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Sidebar from "./components/SideBar/SideBar";

//importar assets
//import bgImg from "./assets/images/bg-desktop.jpeg";

//funcion de renderizado
function renderSection(Component) {
  return (
    <>
      <HStack>
        <Component />
      </HStack>
      <Divider w="900px" />
    </>
  );
}

function App() {
  return (
    <HStack className="background" {...backgroundProps}>
      <VStack as="main" className="content" {...mainContentProps}>
        <Sidebar />
        {renderSection(Home)}
        {/* {renderSection(About)}
          {renderSection(Skills)}
          {renderSection(Projects)}
          {renderSection(Contact)} */}
      </VStack>
    </HStack>
  );
}

//estilos de la App
const backgroundProps = {
  direction: "column",
  align: "center",
  justify: "center",
  overflow: "hidden",
  p: "1rem",
  bg: "#000000",
};

const mainContentProps = {
  flex: "1",
  h: "100vh",
  w: "100vh",
  overflowY: "auto",
  bg: "#000000",
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

export default App;

/* 
@font-face {
  font-family: "Cooper Hewitt";
  src: url("../assets/fonts/CooperHewitt-Light.woff") format("woff"),
    url("../assets/fonts/CooperHewitt-Thin.woff") format("woff");
}

Background
  --bg-100:#000000;
  --bg-200:#161616;
  --bg-300:#2c2c2c;
  
Primary
  --primary-100:#e03f27; (principal)
  --primary-200:#ffcd33; (secundario)
  --primary-300:#ffdab0; (tercero a cambiar)

Accent
  --accent-100:#ed981a; (principal)
  --accent-200:#803e00;

Text
  --text-100:#FFFFFF; (principal)
  --text-200:#bebebe;
*/
