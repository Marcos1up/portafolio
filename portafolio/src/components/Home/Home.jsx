import { VStack, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <VStack id="home" height="600px" width="full" justifyContent="center">
      <Heading as="h1" size="3xl">
        Marcos Soria
      </Heading>
      <Text fontSize="xl">Desarrollador Back-end</Text>
    </VStack>
  );
}

export default Home;
