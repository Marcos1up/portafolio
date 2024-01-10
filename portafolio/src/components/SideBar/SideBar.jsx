// Importaciones externas
import { Link, Avatar, HStack, Flex } from "@chakra-ui/react";

//importar assets
import perfilImg from "../../assets/images/logo-Ms-transparente.png";

const Sidebar = () => {
  return (
    <Flex {...navBarContainer}>
      <Flex align="center">
        <Link>
          <Avatar src={perfilImg} {...logoItemStile}></Avatar>
        </Link>
      </Flex>

      <HStack display="flex" alignItems="center" gap="4">
        <Link href="#sobremi" {...navItemStyles}>
          Sobre mí
        </Link>
        <Link href="#proyectos" {...navItemStyles}>
          Proyectos
        </Link>
        <Link href="#contacto" {...navItemStyles}>
          Contacto
        </Link>
      </HStack>
    </Flex>
  );
};

// Estilos comunes para los enlaces de navegación
const navBarContainer = {
  as: "nav",
  align: "center",
  justify: "space-between",
  wrap: "wrap",
  gap: "487.292px",
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
  w: "100%",
  textAlign: "center",
  fontSize: "lg",
  rounded: "md",
  color: "#bebebe",

  _hover: { color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

export default Sidebar;
