// Importaciones externas
import { Avatar, HStack, Flex, Button } from "@chakra-ui/react";
import { Link } from "wouter";

//importar assets
import perfilImg from "../assets/images/logo-Ms-transparente.png";

const NavBar = () => {
  return (
    <HStack {...navBarContainer}>
      <Flex align="center">
        <Link to="/">
          <Avatar src={perfilImg} {...logoItemStile}></Avatar>
        </Link>
      </Flex>

      <HStack {...linksContainer}>
        <Button {...buttonStyleProps}>
          <Link to="/">Inicio</Link>
        </Button>

        <Button {...buttonStyleProps}>
          <Link to="/about">Sobre mí</Link>
        </Button>

        <Button {...buttonStyleProps}>
          <Link to="/projects">Proyectos</Link>
        </Button>

        <Button {...buttonStyleProps}>
          <Link to="/contact">Contacto</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

// Estilos comunes para los enlaces de navegación
const navBarContainer = {
  align: "center",
  justify: "space-between",
  w: "full",
  gap: "30.456rem",
  p: "0.5rem",
  pl: "2rem",
  pr: "2rem",
  bg: "rgba(22, 22, 22, .85)",
  color: "white",
  borderRadius: "30px",
};

const logoItemStile = {
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
  gap: "4",
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
