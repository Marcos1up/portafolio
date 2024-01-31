import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  VStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { MdOutgoingMail } from "react-icons/md";

//importar components
import SocialFooter from "../SocialFooter/SocialFooter";

//variables de entorno a constantes fuera del componente
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const apiKey = import.meta.env.VITE_API_KEY;

function Contact() {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, refForm.current, apiKey)
      .then((result) => {
        alert("Mensaje enviado con éxito!");
        console.log(result.text);
      })
      .catch((error) => {
        alert("Ocurrió un error al enviar el mensaje.");
        console.error(error);
      });
  };

  return (
    <Box id="contacto" className="contactContainer" {...contactContainer}>
      <Heading as="h1" className="contactTitle" {...contactTitle}>
        <Flex alignItems="center">
          <MdOutgoingMail />
          <Text ml="2">Contacto</Text>
        </Flex>
      </Heading>

      <VStack className="formContainer" {...formContainerStyle}>
        <Text className="formTextContainer" {...formTextContainer}>
          Completa el siguiente formulario y me pondré en contacto contigo lo
          antes posible.
        </Text>

        <form
          ref={refForm}
          onSubmit={handleSubmit}
          id="form"
          name="contacto-portafolio"
          style={{ width: "100%" }}
        >
          <VStack className="formImputsContainer" {...formImputsContainer}>
            <FormControl id="nombre" isRequired>
              <FormLabel {...labelTextStyle}>Nombre</FormLabel>
              <Input
                type="text"
                name="NOMBRE"
                placeholder="Nombre | Name"
                {...imputFormStyle}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel {...labelTextStyle}>Email</FormLabel>
              <Input
                type="email"
                name="EMAIL"
                placeholder="E-mail"
                {...imputFormStyle}
              />
            </FormControl>

            <FormControl id="asunto" isRequired>
              <FormLabel {...labelTextStyle}>Asunto</FormLabel>
              <Input
                type="text"
                name="ASUNTO"
                placeholder="Asunto | Subject"
                {...imputFormStyle}
              />
            </FormControl>

            <FormControl id="mensaje" isRequired>
              <FormLabel {...labelTextStyle}>Mensaje</FormLabel>
              <Textarea
                name="MENSAJE"
                rows="4"
                placeholder="Mensaje | Message"
                {...imputFormStyle}
                height="84px"
              />
            </FormControl>

            <Button
              className="buttonSubmit"
              {...buttonSubmit}
              colorScheme="blue"
              type="submit"
              id="btn-enviar"
            >
              Enviar
            </Button>
          </VStack>
        </form>
      </VStack>

      <Box className="shape-circle" {...shapeCircle}></Box>

      <Box className="shape-triangle" {...shapeTriangle2}>
        <Box {...shapeTriangleChild2}></Box>
      </Box>

      <Divider pt="1rem" minw="70rem" />

      <SocialFooter {...SocialFooterStyle} />
    </Box>
  );
}

//estilos para el contenedor del formulario
const contactContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  mt: "2.5rem",
};

const contactTitle = {
  mb: "15px",
  color: "#FFFFFF",
  textAlign: "center",
};

const formContainerStyle = {
  color: "#FFFFFF",
  bg: "#161616",
  fontFamily: "Roboto, Helvetica Neue, sans-serif",
  letterSpacing: ".2rem",
  textAlign: "center",
  fontSize: "12px",
  align: "center",
  borderRadius: "0.5rem",
  w: "55%",
  p: "24px",
};

const formTextContainer = {
  color: "#FFFFFF",
  fontFamily: ["Roboto", "Helvetica Neue", "sans-serif"],
  letterSpacing: ".1rem",
  fontSize: "1rem",
  justifyContent: "center",
  align: "center",
  width: "full",
  textAlign: "center",
  mb: "10px",
};

const formImputsContainer = {
  width: "full",
  maxWidth: "90%",
  margin: "0 auto",
};

const imputFormStyle = {
  _focus: {
    borderColor: "#e03f27",
    boxShadow: `0 0 0 1px #e03f27`,
  },
  _placeholder: {
    color: "#737373",
  },
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
};

const labelTextStyle = {
  color: "#737373",
  fontFamily: "Roboto, Helvetica Neue, sans-serif",
  letterSpacing: ".1rem",
  fontSize: ".875rem",
  justifyContent: "center",
  align: "center",
};

const buttonSubmit = {
  mt: "4",
  bg: "#e03f27",
  color: "#FFFFFF",
  _hover: {
    bg: "#ed981a",
  },
};

const SocialFooterStyle = {
  padding: "0.5rem",
  margin: "0.5rem",
  width: "full",
  minHeight: "50px",
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "60%",
  left: "80%",

  width: "10rem",
  height: "10rem",
  opacity: ".25",
  borderRadius: "50%",
  background:
    "linear-gradient(277deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeTriangle2 = {
  left: "11%",
  top: "15%",

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

export default Contact;
