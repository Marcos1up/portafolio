//importaciones externas
import { VStack, HStack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";
import PropTypes from "prop-types";

//funcion para los enlaces sociales
const SocialLink = ({ href, icon, children }) => (
  <Link href={href} isExternal>
    <Button leftIcon={icon}>{children}</Button>
  </Link>
);

//definición de propTypes para SocialLink, y evitar un error
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

function UserProfileHeader() {
  return (
    <VStack>
      <VStack align="center">
        <Heading as="h1" fontSize="xl" color="white">
          Marcos Soria
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.700">
          Desarrollador web
        </Text>
      </VStack>

      <HStack {...socialIconsProps}>
        <SocialLink
          href="https://drive.google.com/file/d/1RdOlvvayYmuS_1u7HAmnnpAmnu2ybtvu/view?usp=drive_link"
          icon={<IoMail />}
        >
          CV
        </SocialLink>
        <SocialLink href="#contacto" icon={<IoMail />}>
          <Link href="#contacto">Contacto</Link>
        </SocialLink>
      </HStack>
    </VStack>
  );
}

//estilos para Chakra UI
const socialIconsProps = {
  spacing: "4",
  mt: "30px",
  justify: "center",
  color: "#bebebe",
  _hover: { bg: "#803e00", color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

export default UserProfileHeader;
