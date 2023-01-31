import { HStack, Button, Box, Heading, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Box
      px="8"
      height="94vh"
      // w="100vw"
      zIndex="1"
      position="relative"
      backgroundColor="black"
      _before={{
        backgroundImage: "/background.jpg",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.3,
        content: '""',
        zIndex: -1,
      }}
    >
      {/* NAV BAR */}
      <Flex justifyContent="" pt="">
        <Box>
          <Image src="/logo.png" height="120" width="120" alt=""></Image>
        </Box>
        {/* Buttons */}
        <HStack justifyContent="end" w="100%" spacing="12">
          <Box></Box>
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
            <Link href="/">Courses</Link>
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
            <Link href="/">Quarters</Link>
          </Button>
        </HStack>
        <Box></Box>
      </Flex>
      {/* Middle */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
      >
        {/* Headings */}
        <Stack spacing="6" pt={["24", "24", "36"]}>
          <Heading color="white" size={["xl", "xl", "2xl"]}>
            Become A Certified
          </Heading>
          <Heading color="white" size={["xl", "xl", "2xl"]}>
            Full Stack Developer{" "}
          </Heading>
          <HStack>
            <Heading color="white" size={["xl", "xl", "2xl"]}>
              With
            </Heading>
            <Heading color="red.500" size="2xl">
              {" "}
              Panaverse{" "}
            </Heading>
          </HStack>
          <Button
            colorScheme="red"
            size="lg"
            w="28"
            _hover={{
              transform: "scale(1.1 ,1.1)",

              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {" "}
            <Link href="https://www.piaic.org/">Join now</Link>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
export default Header;
