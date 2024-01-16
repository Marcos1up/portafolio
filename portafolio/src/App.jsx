//importaciones externas
import { Box, Flex } from "@chakra-ui/react";
import { Route } from "wouter";

//importar components
import NavBar from "./components/NavBar/NavBar";
import Home from "./page/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Box className="App">
      <Flex {...navBarContainerBg}>
        <NavBar />
      </Flex>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Box>
  );
}

const navBarContainerBg = {
  bg: "red",
  w: "100%",
  justify: "center",
  pt: "20px",
  pb: "20px",
  pl: "2rem",
  pr: "2rem",
  position: "fixed",
};

export default App;
