import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

import perfilImg from "../../assets/images/logo-MS.png";

function Header() {
  const drive =
    "https://drive.google.com/file/d/1RdOlvvayYmuS_1u7HAmnnpAmnu2ybtvu/view?usp=drive_link";

  const github = "https://github.com/Marcos1up";
  const linkedin = "https://www.linkedin.com/in/marcos-soria-fullstack/";
  const instagram = "https://www.instagram.com/marcos.1up/";

  return (
    <VStack>
      <Image
        className="perfil"
        borderRadius="full"
        boxSize="180px"
        src={perfilImg}
        alt="Perfil de Marcos Soria"
        mt="50px"
      />

      <Box className="presentacion" mt="30px">
        <VStack align="center">
          <Heading as="h1" size="xl">
            Marcos Soria
          </Heading>
          <Text fontSize="lg">Desarrollador Back-end</Text>
        </VStack>

        <HStack className="descargas" spacing="4" mt="30px" justify="center">
          <Link href={drive} isExternal>
            <Button
              colorScheme="blackAlpha"
              color="#a78976"
              borderRadius="30px"
              w="120px"
            >
              CV
            </Button>
          </Link>
          <Link href="#contacto">
            <Button
              leftIcon={<IoMail />}
              colorScheme="blackAlpha"
              borderRadius="30px"
              color="#a78976"
              w="120px"
              href="#contacto"
            >
              Contacto
            </Button>
          </Link>
        </HStack>

        <Divider my="50px" borderColor="gray.500" />

        <HStack className="links" spacing="4" justify="center">
          <Link href={instagram} isExternal>
            <CiInstagram />
          </Link>
          <Link href={linkedin} isExternal>
            <CiLinkedin />
          </Link>
          <Link href={github} isExternal>
            <FaGithub />
          </Link>
        </HStack>
      </Box>
    </VStack>
  );
}

export default Header;

/* <div >
    <p>
        Programador y desarrollador web con inclinación al Back-end. Estoy
        preparado para adentrarme en entornos desafiantes y aprovechar las
        oportunidades que me permitan crecer tanto personal como
        profesionalmente, sin límites ni restricciones. Estoy listo para la
        aventura✨
    </p>
   </div> 
*/
