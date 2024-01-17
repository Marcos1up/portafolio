//importaciones externas
import { Suspense, lazy } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Route } from "wouter";

//importar components
import NavBar from "./components/NavBar/NavBar";

//componentes lazyload
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <Box className="appContainer" {...appContainerBg}>
      <Flex className="navBarApp" {...navBarContainerBg}>
        <NavBar />
      </Flex>

      <Suspense className="routesContainer" fallback={<div>Cargando...</div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Suspense>
    </Box>
  );
}

//estilos componente app
const appContainerBg = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: "radial-gradient(at center, #080808, #010101)",
  overflowX: "hidden",
  p: "16px",
  pt: "32px",
};

const navBarContainerBg = {
  zIndex: "1",
  top: "0",
  position: "fixed",
  width: "100%",
  justify: "center",
  pt: "16px",
  pb: "16px",
  pr: "2rem",
  bg: "rgba(0, 0, 0, 0.1)",
};

export default App;

/* 
background: "radial-gradient(at center, #080808, #010101)",

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
  --text-200:#737373;
*/
