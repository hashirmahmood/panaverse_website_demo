import { Flex, Text, Box } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      justifyContent="center"
      alignItems="center"
      mt="16"
      boxShadow="1px 1px 8px 1px"
    >
      <Box
        _hover={{
          transitionTimingFunction: "ease-in-out",
          transform: "translateY(-12px)",
          transitionDuration: "0.4s",
        }}
      >
        <Link href="https://www.panaverse.co/">
          <Image src="/logo.png" height="150" width="150" alt=""></Image>
        </Link>
      </Box>
      {/* logos */}
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w={["80%", "80%", "30%"]}
        pb="4"
      >
        {/* <Box></Box> */}
        <Box
          _hover={{
            transitionTimingFunction: "ease-in-out",
            transform: "translateY(-12px)",
            transitionDuration: "0.4s",
          }}
        >
          <Box
            mt="4"
            _hover={{
              transitionTimingFunction: "ease-in-out",
              transform: "translateY(-12px)",
              transitionDuration: "0.4s",
            }}
          >
            <Link href="https://github.com/panaverse/">
              <Image src="/github.png" height="60" width="60" alt=""></Image>
            </Link>
          </Box>
        </Box>
        <Box
          _hover={{
            transitionTimingFunction: "ease-in-out",
            transform: "translateY(-12px)",
            transitionDuration: "0.4s",
          }}
        >
          <Box
            mt="2"
            _hover={{
              transitionTimingFunction: "ease-in-out",
              transform: "translateY(-12px)",
              transitionDuration: "0.4s",
            }}
          >
            <Link href="https://www.youtube.com/@panaverse/">
              <Image src="/youtube.jpg" height="60" width="60" alt=""></Image>
            </Link>
          </Box>
        </Box>
        <Box
          mt="4"
          overflow="hidden"
          borderRadius="3xl"
          _hover={{
            transitionTimingFunction: "ease-in-out",
            transform: "translateY(-12px)",
            transitionDuration: "0.4s",
          }}
        >
          <Link href="https://twitter.com/Panaverse_edu/">
            <Image src="/twitter.png" height="50" width="50" alt=""></Image>
          </Link>
        </Box>
        <Box
          mt="4"
          _hover={{
            transitionTimingFunction: "ease-in-out",
            transform: "translateY(-12px)",
            transitionDuration: "0.4s",
          }}
        >
          <Link href="https://www.facebook.com/groups/panaverse/?mibextid=HsNCOg/">
            <Image src="/face.png" height="50" width="50" alt=""></Image>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Footer;
