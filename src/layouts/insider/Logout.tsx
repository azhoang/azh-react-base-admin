import { _PATH_ } from "@/configs/const";
import { globalState } from "@/states/global.state";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { isOpenLogoutDialog, toggleLogoutDialog } = globalState();
  const navigate = useNavigate();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const onSignOut = () => {
    toggleLogoutDialog();
    navigate(_PATH_.auth.path);
  };
  return (
    <AlertDialog
      isOpen={isOpenLogoutDialog}
      leastDestructiveRef={cancelRef}
      onClose={toggleLogoutDialog}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Logout
          </AlertDialogHeader>

          <AlertDialogBody>Are you sure?</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              colorScheme="secondary"
              ref={cancelRef}
              onClick={toggleLogoutDialog}
              variant="ghost"
            >
              Cancel
            </Button>
            <Button onClick={onSignOut} ml={3}>
              Logout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
