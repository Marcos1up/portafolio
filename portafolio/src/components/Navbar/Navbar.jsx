// Importaciones externas
import { Avatar, HStack, Flex } from "@chakra-ui/react";
import { Link } from "wouter";

//importar assets
import perfilImg from "../../assets/images/logo-Ms-transparente.png";

const NavBar = () => {
  return (
    <HStack {...navBarContainer}>
      <Flex align="center">
        <Link to="/">
          <Avatar src={perfilImg} {...logoItemStile}></Avatar>
        </Link>
      </Flex>

      <HStack display="flex" alignItems="center" gap="4">
        <Link to="/" {...navItemStyles}>
          Home
        </Link>
        <Link to="/about" {...navItemStyles}>
          Sobre mí
        </Link>
        <Link to="/projects" {...navItemStyles}>
          Proyectos
        </Link>
        <Link to="/contact" {...navItemStyles}>
          Contacto
        </Link>
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
  bg: "#161616",
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

const navItemStyles = {
  w: "full",
  textAlign: "center",
  fontSize: "lg",
  rounded: "md",
  color: "#bebebe",

  _hover: { color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

export default NavBar;
