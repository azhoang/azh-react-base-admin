import { Text, Box, Card, CardBody, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import { Outlet } from "react-router-dom";
import useRoute from "@/hooks/useRoute";
import React from "react";
import { Logout } from "./Logout";

const InsiderLayout = () => {
  const { currentRoute } = useRoute();
  const gridTemplateRows = React.useMemo(() => {
    const rs: string[] = [];
    if (!currentRoute?.withoutBreadcrumb) rs.push("auto");
    if (!currentRoute?.withoutPageName) rs.push("auto");
    if (!currentRoute?.withoutWarpCard) rs.push("1fr");
    if (!rs.includes("1fr")) rs.push("1fr");
    return rs.join(" ");
  }, [currentRoute]);
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.800")}
      gap={6}
      display="grid"
      h="100vh"
      gridTemplateRows="auto 1fr"
    >
      <Header />
      <Box
        gap={4}
        p={8}
        pt={0}
        alignItems="normal"
        display="grid"
        gridTemplateRows={gridTemplateRows}
      >
        {!currentRoute?.withoutBreadcrumb && <Breadcrumb />}
        {currentRoute && !currentRoute?.withoutPageName && (
          <Text fontSize="2xl" fontWeight="bold" color="second.900">
            {currentRoute.title}
          </Text>
        )}
        {!currentRoute?.withoutWarpCard ? (
          <Card h="max-content">
            <CardBody>
              <Outlet />
            </CardBody>
          </Card>
        ) : (
          <Outlet />
        )}
      </Box>
      <Logout />
    </Box>
  );
};

export default InsiderLayout;
