import { Container, VStack, Heading, Text, Button, Image, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Image src="https://images.unsplash.com/photo-1470165473874-023613603389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b2xmJTIwbG9nb3xlbnwwfHx8fDE3MTc2MjUzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Logo" boxSize="150px" />
        <Heading as="h1" size="2xl">
          Welcome to GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center">
          GoWolf is your ultimate solution for seamless project management and team collaboration. Join us and take your productivity to the next level.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
