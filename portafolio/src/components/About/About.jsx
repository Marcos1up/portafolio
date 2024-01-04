import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";

import image from "../../assets/images/logo-MS.png";

function About() {
  return (
    <Box id="sobreMi" p="5" height="600px" width="full" justifyContent="center">
      <Heading as="h1" mb="5">
        Sobre mí
      </Heading>

      <HStack spacing="8" align="start">
        <Box>
          <Image src={image} alt="Ilustración yo y café" />
        </Box>

        <VStack spacing="4" align="start">
          <Text fontSize="xl" fontWeight="bold">
            Marcos Soria
          </Text>

          <Text>
            Profesor de Música y recibido del bootcamp de Henry, estudiante
            autodidacta de Desarrollo Web enfocado en Back-end.
            <Spacer />
            Aspiro a conseguir una emocionante oportunidad en el campo del
            Desarrollo Web, donde pueda aplicar mi pasión por la tecnología,
            aprender continuamente y enriquecer mi trayectoria profesional.
            <Spacer />
            <Spacer />
            Soy una persona empática y entusiasta, con competencias enfocadas en
            el trabajo en equipo, comunicación asertiva, resolución de
            problemas, responsable y proactivo. Me gusta aprender de los demás y
            superarme continuamente.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default About;
