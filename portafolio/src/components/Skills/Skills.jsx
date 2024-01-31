import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Progress,
} from "@chakra-ui/react";

import getPortafolio from "../../services/getPortafolio";
//import image from "../../assets/images/puntos.png";

function Skills() {
  const portafolio = getPortafolio();
  const habilidadesChunks = chunkArray(portafolio.habilidades, 4);

  function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  return (
    <Box
      id="habilidades"
      p="5"
      /* height="600px" */
      width="full"
      justifyContent="center"
    >
      <Heading as="h1" mb="5">
        Habilidades
      </Heading>

      <VStack>
        {habilidadesChunks.map((chunk, chunkIndex) => (
          <HStack key={chunkIndex} spacing={4}>
            {chunk.map((habilidad, index) => (
              <VStack key={index} align="start" spacing={2}>
                <Image
                  src={habilidad.imagen}
                  alt={`Imagen de ${habilidad.nombre}`}
                  w={200}
                />
                <Text fontSize="lg">{habilidad.nombre}</Text>
                <Progress
                  value={habilidad.nivel}
                  size="sm"
                  colorScheme="blue"
                />
              </VStack>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default Skills;
