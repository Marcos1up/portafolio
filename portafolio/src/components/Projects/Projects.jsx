import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import getPortafolio from "../../services/getPortafolio";

import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
//import image from "../../assets/images/puntos.png";

function Projects() {
  const portafolio = getPortafolio();

  return (
    <Box
      id="proyectos"
      p="5"
      height="600px"
      width="full"
      justifyContent="center"
    >
      <Heading as="h1" mb="5">
        Proyectos
      </Heading>

      {/* mapeo de proyectos */}
      <HStack>
        {portafolio.proyectos.map((e, index) => (
          <VStack key={index}>
            <Box>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={2000}
                swipeable
                emulateTouch
              >
                {e.imagenes.map((imagen, index) => (
                  <Box key={index}>
                    <Image src={imagen} alt={`Proyecto: ${e.titulo}`} />
                  </Box>
                ))}
              </Carousel>
            </Box>

            {/* info de proyecto */}
            <VStack>
              <Heading>{e.titulo}</Heading>
              <Text>{e.descripcion}</Text>
            </VStack>

            {/* links de proyecto */}
            <HStack spacing={4}>
              <Link href={e.url} isExternal>
                <Button leftIcon={<FiExternalLink />} colorScheme="blue">
                  DEMO
                </Button>
              </Link>

              <Link href={e.github} isExternal>
                <Button leftIcon={<BsGithub />} colorScheme="gray">
                  REPO
                </Button>
              </Link>
            </HStack>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}

export default Projects;
