// Importaciones externas
import { useState } from "react";
import { Avatar, HStack, Flex, Button } from "@chakra-ui/react";
import { Link } from "wouter";

//importar assets
import perfilImg from "../assets/images/logo-MS-transparente.png";

const NavBar = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (route) => {
    setSelected(route);
  };

  return (
    <HStack {...navBarContainer}>
      <Flex
        align="center"
        color={selected === "/" ? "#ffffff" : "#737373"}
        onClick={() => handleSelect("/")}
      >
        <Link to="/">
          <Avatar src={perfilImg} {...logoItemStile}></Avatar>
        </Link>
      </Flex>

      <HStack {...linksContainer}>
        <Button
          {...buttonStyleProps}
          color={selected === "/" ? "#ffffff" : "#737373"}
          onClick={() => handleSelect("/")}
        >
          <Link to="/">Inicio</Link>
        </Button>

        <Button
          {...buttonStyleProps}
          color={selected === "/about" ? "#ffffff" : "#737373"}
          onClick={() => handleSelect("/about")}
        >
          <Link to="/about">Sobre mí</Link>
        </Button>

        <Button
          {...buttonStyleProps}
          color={selected === "/projects" ? "#ffffff" : "#737373"}
          onClick={() => handleSelect("/projects")}
        >
          <Link to="/projects">Proyectos</Link>
        </Button>

        <Button
          {...buttonStyleProps}
          color={selected === "/contact" ? "#ffffff" : "#737373"}
          onClick={() => handleSelect("/contact")}
        >
          <Link to="/contact">Contacto</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

//estilos para los enlaces de navegación
const navBarContainer = {
  bg: "rgba(22, 22, 22, .85)",
  color: "white",
  borderRadius: "30px",
  align: "center",
  justify: { base: "center", md: "space-between" },
  w: "full",
  minW: "365px",
  minH: "48px",
  p: "0.5rem",
  pl: { base: "1rem", md: "2rem" },
  pr: { base: "1rem", md: "2rem" },
  gap: { base: "1rem", lg: "30.456rem" },
};

const logoItemStile = {
  display: { base: "none", md: "flex" },
  href: "#home",
  size: "sm",
  rounded: "md",
  _hover: { bg: "#000000.5", color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

const linksContainer = {
  display: "flex",
  alignItems: "center",
  gap: { base: "2", md: "4" }, // Menor gap en dispositivos pequeños
};

const buttonStyleProps = {
  variant: "link",
  textDecoration: "none",
  colorScheme: "whiteAlpha",
  color: "#737373",
  _hover: { bg: "blackAlpha.300", color: "#ffffff" },
  _focus: {
    boxShadow: "none",
  },
};

export default NavBar;
