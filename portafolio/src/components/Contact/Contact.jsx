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

function Contact() {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(refForm.current);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const apiKey = import.meta.env.VITE_API_KEY;

    const templateID = import.meta.env.VITE_TEMPLATE_ID;

    emailjs
      .sendForm(serviceID, templateID, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <Box id="contacto" margin="5rem" h="500px">
      <Heading as="h1" mb="5">
        Contacto
      </Heading>

      <VStack
        className="form-container"
        spacing="4"
        bg="#A78976"
        p="5"
        borderRadius="20px"
        boxShadow="md"
      >
        <Text>
          Completa el siguiente formulario y me pondré en contacto contigo lo
          antes posible.
        </Text>

        <form
          className="form"
          ref={refForm}
          onSubmit={handleSubmit}
          id="form"
          name="contacto-portafolio"
        >
          <VStack w="700px">
            <FormControl id="nombre" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" name="NOMBRE" placeholder="Nombre | Name" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="EMAIL" placeholder="E-mail" />
            </FormControl>

            <FormControl id="asunto" isRequired>
              <FormLabel>Asunto</FormLabel>
              <Input type="text" name="ASUNTO" placeholder="Asunto | Subject" />
            </FormControl>

            <FormControl id="mensaje" isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea
                name="MENSAJE"
                rows="4"
                placeholder="Mensaje | Message"
              />
            </FormControl>

            <Button mt="4" colorScheme="blue" type="submit" id="btn-enviar">
              Enviar
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}

export default Contact;
