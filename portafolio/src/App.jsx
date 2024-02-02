//importaciones externas
import { Suspense, lazy } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Route } from "wouter";

//importar components
import NavBar from "./components/NavBar";

//componentes lazyload
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Box
      className="appContainer"
      {...appContainerBg}
      sx={{
        "&::-webkit-scrollbar": {
          width: "13px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, .1)`, // Color de fondo del scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "8px",
          backgroundColor: `#803e00`, // Color del thumb del scrollbar
          border: "4px solid #161616", // Color del borde del thumb, mismo que el fondo para efecto "invisible"
        },
      }}
    >
      <Flex className="navBarApp" {...navBarContainerBg}>
        <NavBar />
      </Flex>

      <Suspense className="routesContainer" fallback={<div>Cargando...</div>}>
        <Route exact path="/" component={Hero} />
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
  overflowX: "hidden",
  padding: "32px 16px 16px 16px",
  background: "radial-gradient(at center, #080808, #010101)",
};

const navBarContainerBg = {
  zIndex: "1",
  top: "0",
  position: "fixed",
  width: "100%",
  justify: "center",
  padding: "16px 2rem 0 1rem",
};

export default App;

/* 
Background
  --bg-100:#000000; rgb(0, 0, 0) (principal)
  --bg-200:#161616; rgb(22, 22, 22)
  --bg-300:#2c2c2c; rgb(44, 44, 44)
  
Primary
  --primary-100:#e03f27; rgb(224, 63, 39) (principal)
  --primary-200:#ffcd33; rgb(255, 205, 51) (secundario)
  --primary-300:#ffdab0; rgb(255, 218, 176) (tercero a cambiar)

Accent
  --accent-100:#ed981a; rgb(237, 152, 26) (principal)
  --accent-200:#803e00; rgb(128, 62, 0)

Text
  --text-100:#FFFFFF; rgb(255, 255, 255) (principal)
  --text-200:#737373; rgb(115, 115, 115)
*/
