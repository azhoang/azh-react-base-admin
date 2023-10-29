import {
  FormControl,
  Button,
  Flex,
  Text,
  VStack,
  FormErrorMessage,
  Alert,
  AlertIcon,
  UnorderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLoginForm from "@/forms/auth/useLogin.form";
import { _PATH_ } from "@/configs/const/path";

export default function SigninModule() {
  const { form, submit, isError, getErrorMessage, service } = useLoginForm();

  const hasErrorList = service.error.message.length;
  return (
    <VStack as="form" gap={5} onSubmit={submit} noValidate>
      {hasErrorList && (
        <Alert status="error">
          <AlertIcon />
          {service.error.message.length > 1 ? (
            <UnorderedList>
              {service.error.message.map((msg: string, index: number) => (
                <ListItem key={index}>{msg}</ListItem>
              ))}
            </UnorderedList>
          ) : (
            service.error.message[0]
          )}
        </Alert>
      )}
      <FormControl isInvalid={isError("email")} isRequired>
        <Input
          {...form.register("email")}
          type="email"
          placeholder="you@email.com"
        />
        <FormErrorMessage>{getErrorMessage("email")}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={isError("password")} isRequired>
        <Input
          {...form.register("password")}
          type="password"
          placeholder="Enter password here"
          autoComplete="new-password"
        />
        <FormErrorMessage>{getErrorMessage("password")}</FormErrorMessage>
      </FormControl>
      <Link to={_PATH_.forgotPassword.path}>
        <Text w="full" textAlign="center">
          Forgot password?
        </Text>
      </Link>
      <Button type="submit" isLoading={service.isLoading} w="full">
        Sign in
      </Button>
      <Flex justifyContent="center" gap={1}>
        Don't have an account yet?
        <Link to={_PATH_.signup.path}>
          <Text>Sign Up</Text>
        </Link>
      </Flex>
    </VStack>
  );
}
