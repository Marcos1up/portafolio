// Importaciones externas
import { VStack, Heading, Text, Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "wouter";
import { IoMail, IoCloudDownload } from "react-icons/io5";

function Hero() {
  const cvDownload = import.meta.env.VITE_CVDOWNLOAD;

  return (
    <VStack className="homeContainer" {...mainContentProps}>
      <VStack id="home" {...homeContainerProps}>
        <Box>
          <Heading {...headingProps}>Marcos Soria</Heading>
          <Text {...textProps}>Desarrollador Web</Text>

          <HStack {...iconsContainerProps}>
            <a href={cvDownload} target="_blank" rel="noopener noreferrer">
              <Button {...buttonStyleProps} leftIcon={<IoCloudDownload />}>
                CV
              </Button>
            </a>

            <Button {...buttonStyleProps} leftIcon={<IoMail />}>
              <Link to="/contact">Contacto</Link>
            </Button>
          </HStack>
        </Box>

        <Box className="shape-circle" {...shapeCircle}></Box>

        <Box className="shape-triangle" {...shapeTriangle}>
          <Box {...shapeTriangleChild}></Box>
        </Box>

        <Box className="shape-square" {...shapeSquare}></Box>

        <Box className="shape-triangle-2" {...shapeTriangle2}>
          <Box {...shapeTriangleChild2}></Box>
        </Box>
      </VStack>
    </VStack>
  );
}

//estilos
const mainContentProps = {
  flex: "1",
  overflowY: "auto",
  align: "stretch",
  boxShadow: "md",
};

const homeContainerProps = {
  flex: "1",
  minHeight: { base: "90vh", md: "90vh", lg: "90vh" }, //responsive
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  align: "center",
};

const headingProps = {
  as: "h1",
  color: "#ffffff",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  fontSize: { base: "4.5rem", md: "6rem", lg: "6rem" }, // Ajusta el tamaño del texto para diferentes tamaños de pantalla
  textAlign: "center",
  lineHeight: "1",
};

const textProps = {
  color: "#737373",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".2rem",
  fontSize: { base: "sm", md: "md" }, // Ajuste de tamaño de texto
  textAlign: "center",
  mt: "1.5rem",
};

const iconsContainerProps = {
  display: "flex",
  zIndex: "10",
  gap: { base: "2", md: "4" }, // Ajustar el gap
  justifyContent: "center",
  width: "full",
  mt: ".6rem",
};

const buttonStyleProps = {
  zIndex: "10",
  variant: "link",
  textDecoration: "none",
  colorScheme: "whiteAlpha",
  color: "#737373",
  _hover: { bg: "blackAlpha.300", color: "#ed981a" },
  _focus: {
    boxShadow: "none",
  },
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: { base: "50%", sm: "60%", md: "60%" },
  left: { base: "10%", sm: "20%", md: "25%" },
  zIndex: "0",

  width: "10rem",
  height: "10rem",
  opacity: ".25",
  borderRadius: "50%",
  background:
    "linear-gradient(277deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeSquare = {
  position: "absolute",
  top: "30%",
  right: { base: "4%", sm: "24%", md: "24%" },
  zIndex: "0",
  transform: "translate(-50%, -50%) rotate(45deg)", //centrado y rotación

  width: "6rem",
  height: "6rem",
  opacity: ".25",
  borderRadius: "0.5rem",
  background:
    "linear-gradient(223deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeTriangle = {
  top: "11%",
  left: "15%",
  zIndex: "0",

  position: "absolute",
  display: "inline-block",
  overflow: "hidden",
  width: "128px",
  height: "88px",
};

const shapeTriangleChild = {
  top: "50%",
  left: "15%",
  zIndex: "0",
  transform:
    "translate(0%, 0%) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",

  position: "absolute",
  width: "5.5rem",
  height: "5.5rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

const shapeTriangle2 = {
  right: "25%",
  top: { base: "70%", sm: "73%", md: "73%", lg: "73%", xl: "73%" },
  zIndex: "0",
  transform: " rotate(15deg)",

  overflow: "hidden",
  display: "inline-block",
  position: "absolute",
  width: "64px",
  height: "44px",
};

const shapeTriangleChild2 = {
  top: "50%",
  left: "15%",
  zIndex: "0",
  transform:
    "translate(0%, 0%) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",

  position: "absolute",
  width: "2.75rem",
  height: "2.75rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

export default Hero;
