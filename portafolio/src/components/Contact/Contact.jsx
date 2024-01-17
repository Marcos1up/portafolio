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
} from "@chakra-ui/react";

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
        Contacto
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
        >
          <VStack className="formImputsContainer" {...formImputsContainer}>
            <FormControl id="nombre" isRequired>
              <FormLabel {...labelTextStyle}>Nombre</FormLabel>
              <Input type="text" name="NOMBRE" placeholder="Nombre | Name" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel {...labelTextStyle}>Email</FormLabel>
              <Input type="email" name="EMAIL" placeholder="E-mail" />
            </FormControl>

            <FormControl id="asunto" isRequired>
              <FormLabel {...labelTextStyle}>Asunto</FormLabel>
              <Input type="text" name="ASUNTO" placeholder="Asunto | Subject" />
            </FormControl>

            <FormControl id="mensaje" isRequired>
              <FormLabel {...labelTextStyle}>Mensaje</FormLabel>
              <Textarea
                name="MENSAJE"
                rows="4"
                placeholder="Mensaje | Message"
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
    </Box>
  );
}

//estilos para el contenedor del formulario
const contactContainer = {
  margin: "5rem",
  h: "500px",
  bg: "#161616", // Usar variable CSS para el fondo
};

const contactTitle = {
  mb: "5",
  color: "#FFFFFF", // Usar variable CSS para el color del texto
};

const formContainerStyle = {
  color: "#FFFFFF", // Usar variable CSS para el color del texto
  fontFamily: "Roboto, Helvetica Neue, sans-serif",
  letterSpacing: ".2rem",
  fontSize: "12px",
  justifyContent: "center",
  align: "center",
  width: "full",
  textAlign: "center",
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
};

const formImputsContainer = {
  w: "700px",
};

const labelTextStyle = {
  color: "#737373", // Usar variable CSS para el color del texto
  fontFamily: "Roboto, Helvetica Neue, sans-serif",
  letterSpacing: ".1rem",
  fontSize: ".875rem",
  justifyContent: "center",
  align: "center",
  width: "full",
};

const buttonSubmit = {
  mt: "4",
  bg: "#e03f27", // Usar variable CSS para el fondo
  color: "#FFFFFF", // Usar variable CSS para el color del texto,
  _hover: {
    bg: "#ed981a", // Cambiar el color de fondo al pasar el mouse
  },
};

export default Contact;

/* 
background: "radial-gradient(at center, #080808, #010101)",

Background
  --bg-100:#000000;(principal)
  --bg-200:#161616;
  --bg-300:#2c2c2c;
  
Primary
  --primary-100:#e03f27; (principal)
  --primary-200:#ffcd33; (secundario)
  --primary-300:#ffdab0; (tercero a cambiar)

Accent
  --accent-100:#ed981a; (principal)
  --accent-200:#803e00;

Text
  --text-100:#FFFFFF; (principal)
  --text-200:#737373;
*/
