import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Divider,
  Image,
  Badge,
} from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";

//exportaciones de componentes
import CareerProfile from "./CareerProfile";

//importar assets
import imageSrc from "../assets/images/logo-MS.png";

function About() {
  const linkedInUrl = "https://www.linkedin.com/in/marcos-soria-fullstack/";

  return (
    <Flex id="sobreMi" className="aboutContainer" {...aboutContainerStyle}>
      <Heading as="h1" className="aboutTitle" {...titleStyle}>
        <Flex alignItems="center">
          <FaUserCheck />
          <Text ml="2">Sobre mí</Text>
        </Flex>
      </Heading>

      <HStack className="aboutContent" gap="2.6rem">
        <VStack className="sobreMíContainer">
          <Box className="avatar" {...avatarContainerStyle}>
            <Image src={imageSrc} alt="Marcos Soria" {...imageStyle} />
            <Badge {...badgeStyle}>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                Dispinibilidad para trabajar.
              </a>
            </Badge>
            <Text {...nameStyles}>Marcos Soria</Text>
          </Box>

          <VStack {...textCointainerStyles}>
            <Text>
              Me llamo Marcos Soria, un apasionado desarrollador de software con
              inclinación hacia el Back-End y experiencia en
              <Text as="span" {...spanStiles}>
                {" "}
                la gestión de proyectos, enfocándome en el progreso y la
                innovación tecnológica.
              </Text>
            </Text>
            <Text>
              <Text as="span" {...spanStiles}>
                He liderado proyectos destacados como El Paso App y Heladitos
                App
              </Text>
              . Estas experiencias me han permitido dominar mis habilidades como
              la capacidad de trabajo en equipo, perseverancia y resiliencia.
            </Text>

            <Text>
              Aspiro a unirme a retos que prueben mis habilidades y promuevan el
              avance tecnológico contribuyendo a proyectos desafiantes.{" "}
              <Text as="span" {...spanStiles}>
                Estoy listo para llevar mi experiencia a nuevos horizontes y
                crecer profesionalmente.
              </Text>
            </Text>
          </VStack>
        </VStack>

        <Divider orientation="vertical" pt="1rem" minH="30rem" zIndex="2" />

        <HStack className="experienceContainer" zIndex="2">
          <CareerProfile />
        </HStack>

        <Box className="shape-circle" {...shapeCircle}></Box>

        <Box className="shape-triangle" {...shapeTriangle}>
          <Box {...shapeTriangleChild}></Box>
        </Box>

        <Box className="shape-square" {...shapeSquare}></Box>
      </HStack>
    </Flex>
  );
}

//estilos del componente
const aboutContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  mt: "2.5rem",
};

const titleStyle = {
  mb: "15px",
  color: "#FFFFFF",
  textAlign: "center",
};

const avatarContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
};

const imageStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "2xl",
  objectFit: "cover",
  boxShadow: "0px 0px 1px 1px rgba(255, 255, 255, 0.2)",
  transform: "rotate(3deg)",
  padding: "0.5rem",
};

const badgeStyle = {
  colorScheme: "green",
  borderRadius: "15px",
};

const nameStyles = {
  color: "#737373",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".5rem",
  fontSize: "1rem",
  justifyContent: "center",
  align: "center",
  width: "full",
  textAlign: "center",
  mt: "1rem",
};

const textCointainerStyles = {
  zIndex: "2",
  color: "#FFFFFF",
  bg: "rgba(22, 22, 22, .75)",
  textAlign: "start",
  fontSize: "15px",
  align: "start",
  borderRadius: "0.5rem",
  w: "35rem",
  p: "24px",
  m: "0 2rem 0 2rem",
};

const spanStiles = {
  fontWeight: "bold",
  color: "#ffdab0",
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "70%",
  left: "38%",
  zIndex: "0",

  width: "12rem",
  height: "12rem",
  opacity: ".25",
  borderRadius: "50%",
  background:
    "linear-gradient(277deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeSquare = {
  position: "absolute",
  top: "50%",
  right: "8%",
  transform: "translate(-50%, -50%) rotate(45deg)", //centrado y rotación
  zIndex: "1",

  width: "8rem",
  height: "8rem",
  opacity: ".25",
  borderRadius: "0.5rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

const shapeTriangle = {
  top: "11%",
  left: "6%",
  transform: " rotate(15deg)",

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

export default About;
