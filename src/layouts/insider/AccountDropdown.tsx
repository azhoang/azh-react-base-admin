import { globalState } from "@/states/global.state";
import {
  Button,
  Avatar,
  AvatarBadge,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
  Divider,
  IconButton,
} from "@chakra-ui/react";

export default function AccountDropdown() {
  const { toggleLogoutDialog } = globalState();
  return (
    <Popover variant="responsive" placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          colorScheme="gray"
          fontWeight="normal"
          variant="ghost"
          icon={
            <Avatar w="30px" h="30px" size="sm" name="username">
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          }
          _hover={{}}
          _active={{}}
          aria-label="avatar"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody px={0}>
          <VStack gap={1} alignItems="start">
            <Button
              variant="ghost"
              colorScheme="gray"
              fontWeight="normal"
              justifyContent="start"
              borderRadius={0}
            >
              My Account
            </Button>
            <Divider />
            <Button
              variant="ghost"
              justifyContent="start"
              w="full"
              alignItems="center"
              borderRadius={0}
              onClick={toggleLogoutDialog}
            >
              Sign Out
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
