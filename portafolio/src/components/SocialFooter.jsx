import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link, Icon, Text, Flex, HStack } from "@chakra-ui/react";

function SocialFooter() {
  const cvDownload = import.meta.env.VITE_CVDOWNLOAD;

  const linkedInUrl = "https://www.linkedin.com/in/marcos-soria-fullstack/";
  const githubUrl = "https://github.com/Marcos1up";
  const instagramUrl = "https://www.instagram.com/marcos.1up/";

  return (
    <Flex as="footer" {...containerProps}>
      <HStack>
        <Link href={linkedInUrl} isExternal>
          <Icon as={AiFillLinkedin} {...itemStyleProps} />
        </Link>
        <Link href={githubUrl} isExternal>
          <Icon as={AiFillGithub} {...itemStyleProps} />
        </Link>
        <Link href={instagramUrl} isExternal>
          <Icon as={AiFillInstagram} {...itemStyleProps} />
        </Link>
      </HStack>

      <Text fontSize="xs" color="whiteAlpha.700" align="center">
        Coded with ✨ by{" "}
        <a
          href={cvDownload}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ed981a" }}
        >
          Marcos Soria
        </a>
      </Text>
    </Flex>
  );
}

//estilos
const containerProps = {
  direction: "column",
  align: "center",
  pt: "1rem",
};

const itemStyleProps = {
  boxSize: "0.9rem",
  color: "whiteAlpha.700",
  _hover: { bg: "blackAlpha.300", color: "white" },
  _focus: {
    boxShadow: "none",
  },
};

export default SocialFooter;
