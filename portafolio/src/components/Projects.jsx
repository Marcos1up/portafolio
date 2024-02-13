//importaciones externas
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Link,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { HiCodeBracket } from "react-icons/hi2";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//importar components
import getPortafolio from "../services/getPortafolio";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  const portafolio = getPortafolio();

  return (
    <Flex id="proyectos" className="projectsContainer" {...proyectsContainer}>
      <Heading as="h1" className="proyectsTitle" {...titleStyle}>
        <Flex alignItems="center">
          <HiCodeBracket />
          <Text ml="2">Proyectos</Text>
        </Flex>
      </Heading>

      {/* mapeo de proyectos */}
      <HStack className="projectsRender" {...proyectsRender}>
        {portafolio.proyectos.map((e, index) => (
          <VStack key={index} className="proyectsMap" {...proyectsMap}>
            <Box className="proyectImages">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                swipeable
                emulateTouch
              >
                {e.imagenes.map((imagen, index) => (
                  <Flex key={index} {...proyectImages}>
                    {isLoading && (
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="#e03f27"
                        size="xl"
                      />
                    )}
                    <Image
                      src={imagen}
                      alt={`Proyecto: ${e.titulo}`}
                      onLoad={() => setIsLoading(false)}
                      style={{ display: isLoading ? "none" : "block" }}
                    />
                  </Flex>
                ))}
              </Carousel>
            </Box>

            {/* info de proyecto */}
            <VStack className="proyectInfo">
              <Heading
                color="#FFFFFF"
                fontFamily="Roboto"
                align="center"
                textAlign="center"
                justify="center"
                alignSelf="center"
              >
                {e.titulo}
              </Heading>
              <Text color="#737373" mb="10px">
                {e.descripcion}
              </Text>
            </VStack>

            {/* links de proyecto */}
            <HStack className="proyectLink" {...proyectLink}>
              <Link href={e.url} isExternal>
                <Button
                  leftIcon={<FiExternalLink />}
                  colorScheme="blackAlpha"
                  {...buttonStyle}
                >
                  Preview
                </Button>
              </Link>

              <Link href={e.github} isExternal>
                <Button
                  leftIcon={<BsGithub />}
                  colorScheme="blackAlpha"
                  {...buttonStyle}
                >
                  Code
                </Button>
              </Link>
            </HStack>
          </VStack>
        ))}
      </HStack>

      <Box className="shape-circle" {...shapeCircle}></Box>

      <Box className="shape-triangle" {...shapeTriangle}>
        <Box {...shapeTriangleChild}></Box>
      </Box>

      <Box className="shape-square" {...shapeSquare}></Box>
    </Flex>
  );
}

//estilos del compónente

const proyectsContainer = {
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

const proyectsRender = {
  maxWidth: "90%",
  maxHeight: "90%",
};

const proyectsMap = {
  display: "flex",
  zIndex: "2",
  flexDirection: "column",
  justifyContent: "space-between",
  bg: "rgba(22, 22, 22, .50)",
  color: "#FFFFFF",
  fontSize: "15px",
  borderRadius: "0.5rem",
  maxHeight: "570px",
  maxWidth: "80%",
  h: { base: "525px", md: "570px" },
  w: "35rem",
  p: "24px",
  m: "0 1rem 0 1rem",
};

const proyectImages = {
  objectFit: "cover",
  maxWidth: "500px",
  height: "247px",
  minHeight: "247px",
  borderRadius: "0.5rem 0.5rem 0 0",
  overflow: "hidden",
};

const proyectLink = {
  display: "flex",
  justifyContent: "center",
  align: "center",
  width: "full",
  mt: "1rem",
  gap: "1rem",
};

const buttonStyle = {
  color: "#FFFFFF",
  w: "113px",
  _hover: {
    bg: "#ed981a",
  },
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "20%",
  left: "2%",

  width: "18rem",
  height: "18rem",
  opacity: ".25",
  borderRadius: "50%",
  background:
    "linear-gradient(277deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeSquare = {
  position: "absolute",
  top: "30%",
  right: "1%",
  transform: "translate(-50%, -50%) rotate(45deg)", //centrado y rotación

  width: "8rem",
  height: "8rem",
  opacity: ".25",
  borderRadius: "0.5rem",
  background:
    "linear-gradient(223deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeTriangle = {
  top: "75%",
  left: "60%",
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

export default Projects;
