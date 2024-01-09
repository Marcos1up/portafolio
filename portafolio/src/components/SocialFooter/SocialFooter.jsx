import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link, Icon, Text, Flex, HStack } from "@chakra-ui/react";

function SocialFooter() {
  const linkedInUrl = "https://www.linkedin.com/in/marcos-soria-fullstack/";
  const githubUrl = "https://github.com/Marcos1up";
  const instagramUrl = "https://www.instagram.com/marcos.1up/";

  return (
    <Flex as="footer" direction="column" align="center" p={4}>
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

      <Text fontSize="sm" color="whiteAlpha.700" align="center">
        Coded with ✨ by Marcos Soria
      </Text>
    </Flex>
  );
}
const itemStyleProps = {
  boxSize: "4",
  color: "whiteAlpha.700",
  _hover: { bg: "blackAlpha.300", color: "white" },
  _focus: {
    boxShadow: "none",
  },
};

export default SocialFooter;
