//importaciones externas
import {
  VStack,
  Heading,
  Text,
  Box,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
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

function Home() {
  return (
    <VStack id="home" {...homeContainerProps}>
      <Box>
        <Heading {...headingProps}>Marcos Soria</Heading>
        <Text {...textProps}>Desarrollador Back-end</Text>
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
      </Box>
    </VStack>
  );
}

//estilos para Chakra UI
const homeContainerProps = {
  height: { base: "100vh", md: "600px" }, //responsive
  width: "100%",
  justifyContent: "center",
  align: "center",
  p: "3rem",
};

const headingProps = {
  as: "h1",
  size: "3xl",
  textAlign: "center",
};

const textProps = {
  fontSize: "xl",
  align: "center",
  textAlign: "center",
};

const socialIconsProps = {
  spacing: "4",
  mt: "15px",
  justify: "center",
  color: "#bebebe",
  _hover: { bg: "#803e00", color: "#FFFFFF" },
  _focus: {
    boxShadow: "none",
  },
};

export default Home;
