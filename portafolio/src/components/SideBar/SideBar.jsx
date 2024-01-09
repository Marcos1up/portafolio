// Importaciones externas
import {
  Box,
  VStack,
  Text,
  Divider,
  Link,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaBook } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import PropTypes from "prop-types";

//importar components
import SocialFooter from "../SocialFooter/SocialFooter";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";

//importar assets
import perfilImg from "../../assets/images/logo-MS.png";

//funcion SidebarLink
const SidebarLink = ({ icon, children, href }) => {
  return (
    <Link {...navItemStyleProps} href={href} scroll={true}>
      <Stack direction="row" align="center">
        <Box as={icon} mr={3} />
        <Text pl={3}>{children}</Text>
      </Stack>
    </Link>
  );
};

SidebarLink.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

// Componente Sidebar
const Sidebar = () => {
  return (
    <VStack bg="#000000" p={5} w="250px" h="100vh" spacing={4} align="stretch">
      <Avatar
        name="Soria Marcos"
        src={perfilImg}
        size="2xl"
        alignSelf="center"
      />

      <VStack>
        <UserProfileHeader />
      </VStack>

      <Divider borderColor="#2c2c2c" my={4} />

      <VStack>
        <SidebarLink icon={FaHome} href="#home">
          Inicio
        </SidebarLink>
        <SidebarLink icon={FaUser} href="#sobreMi">
          Sobre mi
        </SidebarLink>
        <SidebarLink icon={FaBook} href="#habilidades">
          Habilidades
        </SidebarLink>
        <SidebarLink icon={MdOutlineWork} href="#proyectos">
          Proyectos
        </SidebarLink>
        <SidebarLink icon={FaEnvelope} href="#contacto">
          Contacto
        </SidebarLink>
      </VStack>

      <SocialFooter />
    </VStack>
  );
};

// Estilos comunes para los enlaces de navegación
const navItemStyleProps = {
  w: "100%",
  py: 2,
  px: 4,
  textAlign: "left",
  fontSize: "lg",
  color: "#bebebe",
  _hover: { bg: "#e03f27", color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

export default Sidebar;
