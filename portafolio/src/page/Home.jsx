// Importaciones externas
import { VStack, Heading, Text, Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "wouter";
import { IoMail, IoCloudDownload } from "react-icons/io5";

function Home() {
  const cvDownload =
    "https://drive.google.com/file/d/1RdOlvvayYmuS_1u7HAmnnpAmnu2ybtvu/view?usp=drive_link";

  return (
    <VStack className="homeContainer" {...mainContentProps}>
      <VStack id="home" {...homeContainerProps}>
        <Box>
          <Heading {...headingProps}>Marcos Soria</Heading>
          <Text {...textProps}>Desarrollador Web</Text>

          <HStack {...iconsContainerProps}>
            <a href={cvDownload} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                color="#737373"
                leftIcon={<IoCloudDownload />}
              >
                CV
              </Button>
            </a>

            <Link to="/contact">
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                color="#737373"
                leftIcon={<IoMail />}
              >
                Contacto
              </Button>
            </Link>
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
  p: "1.5rem",
  overflowY: "auto",
  align: "stretch",
  boxShadow: "md",
};

const homeContainerProps = {
  flex: "1",
  minHeight: { base: "100vh", md: "600px" }, //responsive
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  align: "center",
  p: "3rem",
};

const headingProps = {
  as: "h1",
  color: "#ffffff",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  fontSize: "6rem",
  align: "center",
  textAlign: "center",
  lineHeight: "1",
};

const textProps = {
  color: "#737373",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".2rem",
  fontSize: "12px",
  justifyContent: "center",
  align: "center",
  width: "full",
  textAlign: "center",
  mt: "1.5rem",
};

const iconsContainerProps = {
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  align: "center",
  width: "full",
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "60%",
  left: "25%",

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
  right: "28%",
  transform: "translate(-50%, -50%) rotate(45deg)", // Centrado y rotación

  width: "6rem",
  height: "6rem",
  opacity: ".25",
  borderRadius: "0.5rem",
  background:
    "linear-gradient(223deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeTriangle = {
  top: "12%",
  left: "24%",

  position: "absolute",
  display: "inline-block",
  overflow: "hidden",
  width: "128px",
  height: "88px",
};

const shapeTriangleChild = {
  top: "50%",
  left: "15%",
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
  top: "73%",

  overflow: "hidden",
  display: "inline-block",
  position: "absolute",
  width: "64px",
  height: "44px",
};

const shapeTriangleChild2 = {
  top: "50%",
  left: "15%",
  transform:
    "translate(0%, 0%) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",

  position: "absolute",
  width: "2.75rem",
  height: "2.75rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

export default Home;
