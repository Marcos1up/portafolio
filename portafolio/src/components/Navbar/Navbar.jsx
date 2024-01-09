// Importaciones externas
import { Button, VStack, Link } from "@chakra-ui/react";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoHomeSharp, IoMail } from "react-icons/io5";
import PropTypes from "prop-types";

// Estilos para Chakra UI
const buttonProps = {
  colorScheme: "blackAlpha",
  variant: "ghost",
  color: "#292929",
  borderRadius: "full",
  _focus: {
    boxShadow: "none", // Evita un contorno alrededor del botón cuando está enfocado
  },
};

// Botón de navegación
const NavButton = ({ href, icon }) => (
  <Link href={href} style={{ textDecoration: "none" }}>
    <Button {...buttonProps} iconSpacing={0}>
      {icon}
    </Button>
  </Link>
);

// PropType validations
NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

// Array de items de navegación
const navItems = [
  { href: "#home", icon: <IoHomeSharp /> },
  { href: "#sobreMi", icon: <FaUserAlt /> },
  { href: "#habilidades", icon: <FaBook /> },
  { href: "#proyectos", icon: <MdOutlineWork /> },
  { href: "#contacto", icon: <IoMail /> },
];

function Navbar() {
  return (
    <VStack as="nav" spacing={4}>
      {navItems.map((item, index) => (
        <NavButton key={index} href={item.href} icon={item.icon} />
      ))}
    </VStack>
  );
}

export default Navbar;
