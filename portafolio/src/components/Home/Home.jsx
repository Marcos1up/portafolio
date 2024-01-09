//importaciones externas
import { VStack, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <VStack {...homeContainerProps}>
      <Heading {...headingProps}>Marcos Soria</Heading>
      <Text {...textProps}>Desarrollador Back-end</Text>
    </VStack>
  );
}

//estilos para Chakra UI
const homeContainerProps = {
  id: "home",
  height: { base: "100%", md: "600px" }, //responsive
  width: "full",
  justifyContent: "center",
  align: "center",
  spacing: 4,
};

const headingProps = {
  as: "h1",
  size: "3xl",
  textAlign: "center",
};

const textProps = {
  fontSize: "xl",
  textAlign: "center",
};

export default Home;
