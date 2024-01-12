//importaciones externas
import { VStack, HStack, Divider, Box } from "@chakra-ui/react";
//import { Route } from "wouter";

//importar components
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

//importar assets
//import bgImg from "./assets/images/bg-desktop.jpeg";

//funcion de renderizado
function renderSection(Component) {
  return (
    <>
      <Box>
        <Component />
        {/* <Divider w="full" /> */}
      </Box>
    </>
  );
}

function App() {
  return (
    <Box className="background" {...backgroundProps}>
      <VStack as="main" className="content" {...mainContentProps}>
        <NavBar />
        {renderSection(Home)}
        {renderSection(About)}
        {renderSection(Skills)}
        {renderSection(Projects)}
        {renderSection(Contact)}
      </VStack>
    </Box>
  );
}

//estilos de la App
const backgroundProps = {
  direction: "column",
  align: "center",
  justify: "center",
  overflow: "hidden",
  p: "2rem",
  bg: "#000000",
};

const mainContentProps = {
  flex: "1",
  h: "100vh",
  overflowY: "auto",
  align: "stretch",
  bg: "#000000",
  boxShadow: "md",
};

export default App;

/* 
Background
  --bg-100:#000000;(principal)
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
