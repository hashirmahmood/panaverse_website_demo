import { Flex, Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <Flex>
      <Box>
        <Image src="/logo.png" height="120" width="120" alt=""></Image>
      </Box>
      {/* Buttons */}
      <HStack justifyContent="end" w="100%" spacing="12">
        <Box></Box>
        <Button
          px="8"
          size="lg"
          bg=""
          color="white"
          _hover={{
            background: "red.500",
            color: "white",
            transform: "scale(1.1 ,1.1)",
            transitionDuration: "0.3s",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <Link href="/">Home</Link>
        </Button>

        <Button
          size="lg"
          bg=""
          color="white"
          _hover={{
            background: "red.500",
            color: "white",
            transform: "scale(1.1 ,1.1)",
            transitionDuration: "0.3s",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <Link href="/Quarters">Quarters</Link>
        </Button>
      </HStack>
      <Box></Box>
    </Flex>
  );
};
export default Navbar;
