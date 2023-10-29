import useRoute from "@/hooks/useRoute";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsHouseDoor } from "react-icons/bs";

export default function STBreadcrumb() {
  const { currentRoute, navigate } = useRoute();
  const breadcrumbs = currentRoute
    ? currentRoute.breadcrumb.concat([currentRoute])
    : [];
  return (
    <Breadcrumb>
      {breadcrumbs.length &&
        breadcrumbs.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === breadcrumbs.length - 1;
          if (isFirst) {
            return (
              <BreadcrumbItem
                key={item.id}
                isCurrentPage={breadcrumbs.length === 1}
              >
                <BreadcrumbLink
                  display="flex"
                  gap={1}
                  alignItems="baseline"
                  onClick={() => navigate(item.path)}
                >
                  <BsHouseDoor />
                  <Text>{item.title}</Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          }
          return (
            <BreadcrumbItem
              key={item.id}
              isCurrentPage={isLast || !!item.isDisabled}
            >
              <BreadcrumbLink
                onClick={() => !item.isDisabled && navigate(item.path)}
              >
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
    </Breadcrumb>
  );
}
