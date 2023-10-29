import { Flex, Spinner } from "@chakra-ui/react";

export default function FallbackDefault(props: { children?: React.ReactNode }) {
  return (
    <Flex w="full" h="full" justifyContent="center" alignItems="center" flexDirection="column">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      {props.children}
    </Flex>
  );
}
