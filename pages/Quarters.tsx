import {
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import style from "../styles/Quarter.module.css";
import Footer from "../components/home_components/Footer";
import Navbar from "../components/Nabar";
const Quarters = () => {
  return (
    <div className={style.background}>
      <Navbar></Navbar>

      <Flex
        justify="center"
        alignItems="center"
        pt="8"
        px="36"
        flexDirection="column"
      >
        <Heading py="10" color="white" w="400px" textAlign="center">
          Core Quarters
        </Heading>
        <Tabs variant="unstyled">
          <TabList
            justifyContent="center"
            flexDirection={["column", "column", "row"]}
          >
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              color="white"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 1
            </Tab>
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              color="white"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 2
            </Tab>
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 3
            </Tab>
          </TabList>
          {/* Internal text */}
          <TabPanels py="16">
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description :</Heading>
              <Text pt="4">
                We will start the program by learning the fundamentals of
                Object-Oriented programming using JavaScript and TypeScript. We
                will also understand the latest Web trends i.e. Web 3.0 and
                Metaverse concepts and try to understand their working from the
                perspective of the users.
              </Text>
              <Heading fontSize="2xl" pt="4">
                Outline :{" "}
              </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>HTML and CSS</li>
                  <li>Web 3.0 and Metaverse Theory</li>
                  <li>
                    Fundamentals of JavaScript (ECMAScript 2022 Language
                    Specification)
                  </li>
                  <li>Object-Oriented Programming with TypeScript</li>
                  <li>TypeScript for React</li>
                </ol>
              </Text>
            </TabPanel>
            {/* panel 2 */}
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description :</Heading>
              <Text pt="4">
                The objective of this course is to teach participants to develop
                customer-facing planet-scale Websites, Full-Stack Apps and
                templates, Dashboards, and Muti-Cloud Serverless APIs. By the
                end of the quarter, the participants will be able to develop and
                deploy web platforms like Facebook, Shopify, etc. The
                technologies covered in this course will include Next.js 13,
                Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
                Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                Technologies, and Cloud Development Kit for Terraform (CDKTF).
              </Text>
              <Heading fontSize="2xl" pt="4">
                Outline :
              </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>Next.js 13 Web Development</li>
                  <li>Next.js 13 using Chakra UI (Remote Zoom Class)</li>
                  <li>
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </li>
                  <li>API Routes with Next.js (Remote Zoom Class)</li>
                  <li>SQL and Prisma</li>
                  <li>AWS Application Composer (Remote Zoom Class)</li>
                  <li>
                    Multi-Cloud GraphQL Serverless API Development with Cloud
                    Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                  </li>
                </ol>
              </Text>
            </TabPanel>
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Earn While You Learn Projects</Heading>
              <Text pt="4" fontWeight="700">
                1. Build Full-Stack Next.js 13 Jamstack Templates
              </Text>
              <Text>
                You will be assigned to build a template which we will sell on
                Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                will receive 25% share on the sale of the template which will be
                used to manage the platform. An additional 15% will be spent on
                marketing the template. 60% of the revenues will be distributed
                to the developer through the Panaverse DAO in the form of
                Panaverse tokens.
              </Text>
              <Text pt="4" fontWeight="700">
                2. Build QraphQL APIs
              </Text>

              <Text>
                You will be assigned to build APIs for which you will sell
                subscriptions on the Panaverse DAO Marketplace. The Panaverse
                DAO will receive 25% share on the sale of the template which
                will be used to manage the platform. An additional 15% will be
                spent on marketing the template. 60% of the revenues will be
                distributed to the developer through the Panaverse DAO in the
                form of Panaverse tokens.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>

      {/* bottom part */}
      <Flex
        justify="center"
        alignItems="center"
        pt="8"
        px="36"
        flexDirection="column"
      >
        <Heading
          py="10"
          color="white"
          w="600px"
          textAlign="center"
          fontSize={["4xl", "4xl", "5xl"]}
        >
          Specialized Tracks:
        </Heading>

        <Heading py="6" color="white" w="400px" textAlign="center">
          Web 3.0 & Metaverse
        </Heading>
        <Tabs variant="unstyled">
          <TabList
            justifyContent="center"
            flexDirection={["column", "column", "row"]}
          >
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 4
            </Tab>
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 5
            </Tab>
          </TabList>

          <TabPanels py="16">
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                In this course you will learn how to develop Web 3.0 DApps,
                create a project, deploy it in production, write smart
                contracts, unit test them, and create user interfaces for them.
                We will also learn to develop ERC-20 and NFT tokens, DAOs,
                Oracles, etc. Please note that in order to develop Web 3
                applications you also need to build on top of Web 2.0
                technologies which we have already covered in the previous
                quarters.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>Blockchain and Metaverse Theory</li>
                  <li>Smart Contract Development in Solidity</li>
                  <li>Dapp Development using Ethers.js and Next.js 13</li>
                  <li>Tokennomics</li>
                  <li>
                    Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                  </li>
                </ol>
              </Text>
            </TabPanel>
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                The Web is the Metaverse. The metaverse requires an
                infrastructure that connects all of the metaverses so that we
                can travel between them. This is only achievable with open
                web-based metaverses. The internet and its browsers are magical.
                Federated but linked experiences connect pages, people,
                technology, businesses, standards, and nations. Its unlike
                anything else. The metaverse should replicate the best qualities
                of the web - it should just be the web. We just have to extend
                online responsive design from mobile to desktop to 3D, Augmented
                Reality, and Virtual Reality. This course will teach you how to
                build the Open Social Spatial Web with WebXR and WebGPU
                technologies.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>Open Metaverse Web Development</li>
                  <li>
                    Blender 3D asset Creation for the Metaverse (Remote Zoom
                    Class)
                  </li>
                </ol>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <Heading py="6" color="white" w="400px" textAlign="center">
          Artificial Intelligence
        </Heading>
        <Tabs variant="unstyled">
          <TabList
            justifyContent="center"
            flexDirection={["column", "column", "row"]}
          >
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 4
            </Tab>
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 5
            </Tab>
          </TabList>

          <TabPanels py="16">
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                Artificial intelligence is the simulation of human intelligence
                processes by machines, especially computer systems. The AI and
                Deep Learning Specialization is a foundational program that will
                aid in your comprehension of deep learnings potential,
                difficulties, and effects as well as equip you to take part in
                the creation of cutting-edge AI technology. We will start this
                course by understanding the fundamentals and use cases for AI
                and move on to building next-gen intelligent apps using OpenAIs
                powerful models and Next.js 13. We all conclude the course by
                learning about basic programming concepts using Python, such as
                lists, dictionaries, classes, functions, and loops, and practice
                writing clean and readable code with exercises for each topic.
                We all also learn how to make your programs interactive and how
                to test your code safely before adding it to a project. It is a
                fast-paced, thorough introduction to programming with Python
                3.10+ that will have you writing programs, solving problems, and
                making things that work in no time. In this quarter we will also
                learn Git, the distributed version control system. We will also
                review Git-based GitHub services.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>
                    Introduction to Machine Learning, Data Science, and AI
                  </li>
                  <li>
                    Building Next-Gen Intelligent Apps with OpenAI’s Powerful
                    Models
                  </li>
                  <li>Python Crash Course for TypeScript Developers</li>
                </ol>
              </Text>
            </TabPanel>
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                This course will help you understand the capabilities,
                challenges, and consequences of deep learning and prepare you to
                participate in the development of leading-edge AI technology. We
                will finish the program by learning how to envision, create, and
                maintain integrated systems that run constantly in production.
                Production systems must manage constantly changing data, in
                stark contrast to typical machine learning modeling. The
                production system must also operate continuously at the lowest
                possible cost while delivering the highest possible performance.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>Deep Learning with Tensorflow</li>
                  <li>
                    Machine Learning Engineering for Production (MLOps) using
                    Terraform for CDK
                  </li>
                </ol>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Heading py="6" color="white" w="400px" textAlign="center">
          Cloud Computing
        </Heading>
        <Tabs variant="unstyled">
          <TabList
            justifyContent="center"
            flexDirection={["column", "column", "row"]}
          >
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 4
            </Tab>
            <Tab
              mx={["16", "24", "4"]}
              my="4"
              bgColor=""
              fontSize="2xl"
              borderRadius="xl"
              color="white"
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{
                background: "red.500",
                color: "white",
                transform: "scale(1.1 ,1.1)",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Quarter 5
            </Tab>
          </TabList>

          <TabPanels py="16">
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                Cloud-native architecture and technologies are an approach to
                designing, constructing, and operating workloads that are built
                in the cloud and take full advantage of the cloud computing
                model. Cloud-native technologies empower organizations to build
                and run scalable applications in modern, dynamic environments
                such as public, private, and hybrid clouds. Containers, service
                meshes, microservices, immutable infrastructure, and declarative
                APIs exemplify this approach. These techniques enable loosely
                coupled systems that are resilient, manageable, and observable.
                Combined with robust automation, they allow engineers to make
                high-impact changes frequently and predictably with minimal
                toil. Kubernetes is an open-source system for automating the
                deployment, scaling, and management of containerized
                applications. In this course, you will learn how to develop
                cloud applications using cloud-native technologies like
                Containers, Kubernetes, and CDK for Kubernetes.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>
                    Kubernetes: Up and Running: Dive into the Future of
                    Infrastructure 3rd Edition
                  </li>
                  <li>Cloud Development Kit for Kubernetes</li>
                </ol>
              </Text>
            </TabPanel>
            <TabPanel
              textColor="white"
              fontSize="xl"
              justifyContent="center"
              w="container.lg"
              boxShadow="1px 1px 8px 1px black"
              width={["300px", "500px", "900px"]}
            >
              <Heading fontSize="2xl">Description : </Heading>
              <Text pt="4">
                Terraform lets you use the same workflow to manage multiple
                providers and handle cross-cloud dependencies. This simplifies
                management and orchestration for large-scale, multi-cloud
                infrastructures. Cloud Development Kit for Terraform (CDKTF)
                allows you to use familiar programming languages to define and
                provision infrastructure. This gives you access to the entire
                Terraform ecosystem without learning HashiCorp Configuration
                Language (HCL) and lets you leverage the power of your existing
                toolchain for testing, dependency management, etc.
              </Text>
              <Heading fontSize="2xl">Outline: </Heading>
              <Text pt="4" pl="6">
                <ol>
                  <li>CDK for Terraform</li>
                </ol>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};
export default Quarters;
