import {
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Flex,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
} from "@chakra-ui/react";

//importaciones de componentes
import getPortafolio from "../services/getPortafolio";

function CareerProfile() {
  const portafolio = getPortafolio();
  const habilidadesChunks = chunkArray(portafolio.habilidades, 4);

  //constante para el stepper
  const steps = [
    {
      title: "HeladitosApp - Henry Bootcamp.",
      date: "Oct. 2022 - Nov. 2022",
      description:
        "Lideré el apartado Back-end de un equipo de 8 integrantes en el desarrollo de un e-commerce ",
      description2:
        "responsive para el sector alimenticio, implementando SCRUM con sprints de acuerdo a la fecha ",
      description3:
        "de entrega de 4 semanas y Trello para la asignacion y manejo de tareas.",
    },
    {
      title: "AlPasoApp - Al Paso.",
      date: "Abr. 2023",
      description:
        "Desarrollo Freelancer de una página de catálogo menú para un negocio local de comida rápida.",
      description2:
        "Se planeaba agregar un Back-end completo para transformarlo en un e-commerce con ",
      description3:
        "integracion de usuarios y pasarela de pagos, pero finalmente el proyecto fue cancelado.",
    },

    {
      title: "Actualmente...",
      description:
        "Me encuentro en la busqueda de proyectos donde pueda aportar mi valor.",
    },
  ];

  //useSteps() es un hook de chakraui
  const { activeStep, setActiveStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  return (
    <Flex
      id="habilidades"
      className="habilidadesContainer"
      {...expSkillsContainer}
    >
      <VStack className="skillsContainer" {...skillsContainer}>
        {habilidadesChunks.map((chunk, chunkIndex) => (
          <HStack key={chunkIndex}>
            {chunk.map((habilidad, index) => (
              <VStack key={index}>
                <Image
                  src={habilidad.imagen}
                  alt={`Imagen de ${habilidad.nombre}`}
                  {...skillsImage}
                />
              </VStack>
            ))}
          </HStack>
        ))}
      </VStack>

      <Heading as="h1" className="contactTitle" {...titleStyles}>
        <Flex alignItems="center">
          <Text {...subTitleStyle}>Experiencia</Text>
        </Flex>
      </Heading>

      <HStack p={5}>
        <Stepper index={activeStep} {...stepperContainer}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle color="#FFFFFF">{step.title}</StepTitle>
                <StepDescription fontSize="12px">{step.date}</StepDescription>
                <StepDescription color="#737373">
                  {step.description}
                </StepDescription>
                <StepDescription color="#737373">
                  {step.description2}
                </StepDescription>
                <StepDescription color="#737373" mb="10px">
                  {step.description3}
                </StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </HStack>
    </Flex>
  );
}

//estilos del componente
const expSkillsContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "start",
  overflow: "hidden",
  p: "0 5 0 5",
  width: "full",
};

const titleStyles = {
  color: "#FFFFFF",
  fontSize: "1.5rem",
  align: "start",
  textAlign: "start",
  m: "1rem 0 .2rem 0",
};

const skillsContainer = {
  align: "center",
  overflowX: "hidden",
  borderRadius: "0.5rem",
  w: "80%",
  h: "9.4rem",
  p: "24px",
  m: "0 2rem 0 2rem",
  bg: "rgba(22, 22, 22, .75)",
};

const skillsImage = { align: "start", m: "0 1rem 0 1rem" };

const subTitleStyle = {
  color: "#737373",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".2rem",
  fontSize: "1rem",
  width: "full",
  mt: "1rem",
};

const stepperContainer = {
  size: "lg",
  colorScheme: "yellow",
  orientation: "vertical",
  height: "300px",
  gap: "0",
};

export default CareerProfile;
