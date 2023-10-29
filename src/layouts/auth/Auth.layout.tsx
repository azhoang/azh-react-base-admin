import { Box, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LogoFull } from "@/modules";
import authImage from "@/assets/images/auth-image.jpg";

const AuthLayout = () => {
  return (
    <Box p={0} display="grid" h="100vh" gridTemplateColumns="1fr 1fr">
      <Box
        backgroundImage={authImage}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        hideBelow="sm"
      />
      <VStack
        justifyContent="center"
        alignItems="center"
        overflowY="auto"
        gap={5}
      >
        <LogoFull />
        <Outlet />
      </VStack>
    </Box>
  );
};
export default AuthLayout;
