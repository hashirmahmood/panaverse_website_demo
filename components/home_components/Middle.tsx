import { Flex, VStack, Heading, Text, Button } from "@chakra-ui/react";
const Middle = () => {
  return (
    <Flex p="10" flexDirection="column" alignItems="center" mt="10">
      <Heading>About Panaverse</Heading>
      {/* BOX1 */}
      <VStack
        width="100%"
        borderColor="gray.500"
        pt="8"
        marginTop="10"
        borderRadius="2xl"
        boxShadow="1px 1px 8px 1px"
        _hover={{
          transitionTimingFunction: "ease-in-out",
          transform: "translateY(-12px)",
          transitionDuration: "0.4s",
        }}
      >
        <Heading
          color="white"
          bgColor="red.500"
          w="100%"
          textAlign="center"
          py="1"
        >
          Web 3.0
        </Heading>
        <Text p="4" fontWeight="600">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </Text>
      </VStack>
      {/* BOX 2 */}
      <VStack
        width="100%"
        boxShadow="1px 1px 8px 1px"
        pt="8"
        borderRadius="2xl"
        marginTop="20"
        _hover={{
          transitionTimingFunction: "ease-in-out",
          transform: "translateY(-12px)",
          transitionDuration: "0.4s",
        }}
      >
        <Heading
          color="white"
          bgColor="red.500"
          w="100%"
          textAlign="center"
          py="1"
        >
          The Program in a Nutshell: Earn While You Learn
        </Heading>
        <Text p="4" fontWeight="600">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Text>
      </VStack>
      {/* Box 3 */}
      <VStack
        width="100%"
        boxShadow="1px 1px 8px 1px"
        pt="8"
        borderRadius="2xl"
        marginTop="20"
        _hover={{
          transitionTimingFunction: "ease-in-out",
          transform: "translateY(-12px)",
          transitionDuration: "0.4s",
        }}
      >
        <Heading color="white" bgColor="red.500" w="100%" textAlign="center">
          Program of Studies
        </Heading>
        <Text p="4" fontWeight="600">
          Program of Studies This curriculum is intended for beginners who want
          to learn software development from the ground up. The first two
          quarters are shared by all specialties and are dedicated to studying
          Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
          development. It is going to be a fifteen-month-long hybrid program
          that includes both onsite and online classes and is divided into five
          quarters of 13 weeks each. The emphasis will be on hands-on learning
          by educating students to produce projects. To accommodate everyone,
          courses will be held primarily on weekends or after 6:00 p.m.
          (Pakistan Time) on weekdays. It employs a hybrid teaching format, with
          core onsite classes complemented by online Zoom laboratories and
          recorded videos.
        </Text>
      </VStack>
    </Flex>
  );
};
export default Middle;
