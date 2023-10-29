import { Logo } from "@/modules";
import { Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import AccountDropdown from "./AccountDropdown";
import NavigateItem from "./NavigateItem";
import { routeState } from "@/states/route.state";
import { SwitchThemeMode } from "./SwitchThemeMode";

export default function Header() {
  const { insideNavigation } = routeState();
  return (
    <Flex
      w="full"
      flexDirection="row"
      h="70px"
      alignItems="center"
      px={6}
      boxShadow="base"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Logo w="74px" mr={7} />
      <HStack justifyContent="center">
        {insideNavigation.map((menu) => (
          <NavigateItem key={menu.id} {...menu} />
        ))}
      </HStack>
      <HStack ml="auto">
        <SwitchThemeMode />
        <AccountDropdown />
      </HStack>
    </Flex>
  );
}
