//import { useEffect, useState } from "react";
import { Button, VStack, Link } from "@chakra-ui/react";

import { FaBook, FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoHomeSharp, IoMail } from "react-icons/io5";

function Navbar() {
  return (
    <VStack as="nav">
      <Link href="#home">
        <Button
          colorScheme="blackAlpha"
          variant="ghost"
          color="#292929"
          borderRadius="full"
        >
          <IoHomeSharp />
        </Button>
      </Link>

      <Link href="#sobreMi">
        <Button
          colorScheme="blackAlpha"
          variant="ghost"
          color="#292929"
          borderRadius="full"
        >
          <FaUserAlt />
        </Button>
      </Link>

      <Link href="#habilidades">
        <Button
          colorScheme="blackAlpha"
          variant="ghost"
          color="#292929"
          borderRadius="full"
        >
          <FaBook />
        </Button>
      </Link>

      <Link href="#proyectos">
        <Button
          colorScheme="blackAlpha"
          variant="ghost"
          color="#292929"
          borderRadius="full"
        >
          <MdOutlineWork />
        </Button>
      </Link>

      <Link href="#contacto">
        <Button
          colorScheme="blackAlpha"
          variant="ghost"
          color="#292929"
          borderRadius="full"
        >
          <IoMail />
        </Button>
      </Link>
    </VStack>
  );
}

export default Navbar;
