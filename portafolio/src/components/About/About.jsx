import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Flex,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";

//exportaciones de componentes
import Skills from "../Skills/Skills";

import image from "../../assets/images/logo-MS.png";

function About() {
  return (
    <Box id="sobreMi" className="aboutContainer" {...aboutContainerStyle}>
      <Heading as="h1" className="aboutTitle" {...titleStyle}>
        <Flex alignItems="center">
          <FaUserCheck />
          <Text ml="2">Sobre mí</Text>
        </Flex>
      </Heading>

      <HStack className="aboutContent" {...contentContainerStyles}>
        <VStack className="sobreMíContainer">
          <Box className="avatar" {...imageStyle}>
            <Avatar src={image} size="2xl" />
            <Text {...nameStyles}>Marcos Soria</Text>
          </Box>

          <VStack {...textCointainerStyles}>
            <Text {...storyStyles}>
              Profesor de Música y recibido del bootcamp de Henry, estudiante
              autodidacta de Desarrollo Web enfocado en Back-end.
              <Spacer />
              Aspiro a conseguir una emocionante oportunidad en el campo del
              Desarrollo Web, donde pueda aplicar mi pasión por la tecnología,
              aprender continuamente y enriquecer mi trayectoria profesional.
              <Spacer />
              <Spacer />
              Soy una persona empática y entusiasta, con competencias enfocadas
              en el trabajo en equipo, comunicación asertiva, resolución de
              problemas, responsable y proactivo. Me gusta aprender de los demás
              y superarme continuamente.
            </Text>
          </VStack>
        </VStack>

        <Divider orientation="vertical" pt="1rem" minH="30rem" />

        <VStack className="experienceContainer">
          <Skills />
        </VStack>
      </HStack>
    </Box>
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

const contentContainerStyles = { gap: "4rem" };

const imageStyle = {};

const textCointainerStyles = {};

const nameStyles = {
  color: "#737373",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".5rem",
  fontSize: "1rem",
  justifyContent: "center",
  align: "center",
  width: "full",
  textAlign: "center",
  mt: "1.5rem",
};

const storyStyles = {
  color: "#FFFFFF",
  bg: "#161616",
  fontFamily: "Roboto, Helvetica Neue, sans-serif",
  letterSpacing: ".2rem",
  textAlign: "center",
  fontSize: "12px",
  align: "center",
  borderRadius: "0.5rem",
  w: "30rem",
  p: "24px",
};

export default About;
