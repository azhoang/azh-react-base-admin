import { globalState } from "@/states/global.state";
import { INavigationItem } from "@/types";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export default function NavigateItem(props: INavigationItem) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const gotoPage = (path: string) => () => {
    navigate(path);
    onToggle();
  };
  const { me } = globalState();
  const activeItem = !!matchPath(location.pathname, props.path);
  if (me && props.roles?.length && !props.roles.includes(me.role)) return <></>;
  if (props.children?.length) {
    const hasChildActive = !!props.children.find(
      (child) => !!matchPath(location.pathname, child.path),
    );
    return (
      <Popover isOpen={isOpen} onClose={onClose} variant="responsive">
        <PopoverTrigger>
          <Button
            variant="ghost"
            colorScheme={hasChildActive ? "primary" : "secondary"}
            onClick={onToggle}
            isActive={hasChildActive}
            rightIcon={<BsChevronDown />}
            aria-selected={activeItem || location.pathname.includes(props.path)}
          >
            {props.title}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody px={0}>
            <Flex
              flexDirection="column"
              w="fit-content"
              justifyContent="flex-start"
            >
              {props.children.map((child) => (
                <NavigateItem
                  key={child.id}
                  btnProps={{
                    fontWeight: "normal",
                    onClick: gotoPage(child.path),
                    borderRadius: 0,
                  }}
                  {...child}
                  parent={props}
                />
              ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <Button
      colorScheme={activeItem ? "primary" : "secondary"}
      variant="ghost"
      justifyContent="start"
      className={clsx({
        "children-active": !!props.parent && activeItem,
      })}
      aria-selected={activeItem}
      isActive={activeItem}
      onClick={gotoPage(props.path)}
      {...props.btnProps}
    >
      {props.title}
    </Button>
  );
}
