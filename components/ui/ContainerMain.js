import { Container } from "@chakra-ui/react";

const ContainerMain = ({ children }) => {
  return (
    <Container
      as="div"
      flexDirection="column"
      maxW={{ base: "100%", md: "5/12" }}
      zIndex={2}
      position="relative"
      overflowY="scroll"
      height="100vh"
    >
      {children}
    </Container>
  );
};
export default ContainerMain;