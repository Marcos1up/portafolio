// Importaciones externas
import { VStack, Heading, Text, Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "wouter";
import { IoMail, IoCloudDownload } from "react-icons/io5";
import PropTypes from "prop-types";

// Función para los enlaces sociales
const SocialLink = ({ href, icon, children }) => (
  <Link to={href} isExternal>
    <Button leftIcon={icon}>{children}</Button>
  </Link>
);

// Definición de propTypes para SocialLink
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

function Home() {
  return (
    <VStack as="main">
      <VStack {...mainContentProps}>
        <VStack id="home" {...homeContainerProps}>
          <Box>
            <Heading {...headingProps}>Marcos Soria</Heading>
            <Text {...textProps}>Desarrollador Web</Text>
            <HStack {...socialIconsProps}>
              <SocialLink
                href="https://drive.google.com/file/d/1RdOlvvayYmuS_1u7HAmnnpAmnu2ybtvu/view?usp=drive_link"
                icon={<IoCloudDownload />}
              >
                CV
              </SocialLink>
              <SocialLink href="/contact" icon={<IoMail />}>
                Contacto
              </SocialLink>
            </HStack>
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
}

//estilos de la App
const mainContentProps = {
  flex: "1",
  h: "100vh",
  p: "1.5rem",
  overflowY: "auto",
  align: "stretch",
  bg: "#000000",
  boxShadow: "md",
};

const homeContainerProps = {
  height: { base: "100vh", md: "600px" }, //responsive
  width: "100%",
  justifyContent: "center",
  align: "center",
  p: "3rem",
  bg: "#000000",
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

/* 
Background
  --bg-100:#000000;(principal)
  --bg-200:#161616;
  --bg-300:#2c2c2c;
  
Primary
  --primary-100:#e03f27; (principal)
  --primary-200:#ffcd33; (secundario)
  --primary-300:#ffdab0; (tercero a cambiar)

Accent
  --accent-100:#ed981a; (principal)
  --accent-200:#803e00;

Text
  --text-100:#FFFFFF; (principal)
  --text-200:#bebebe;
*/
