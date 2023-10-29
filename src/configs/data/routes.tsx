import { RouteObject } from "react-router-dom";
import { _PATH_ } from "../const/path";
import { HomePage, SignIn } from "@/pages";
import AuthLayout from "@/layouts/auth/Auth.layout";
import InsiderLayout from "@/layouts/insider/Insider.layout";
import { Box, Text } from "@chakra-ui/react";

export const defaultRoutes: RouteObject[] = [
  {
    path: _PATH_.home.path,
    element: <HomePage />,
  },
  {
    path: _PATH_.auth.path,
    element: <AuthLayout />,
    children: [
      {
        // path: _PATH_.signin.path,
        element: <SignIn />,
        index: true,
      },
      {
        path: _PATH_.signup.path,
        element: (
          <Box>
            <Text>SignUp</Text>
          </Box>
        ),
      },
    ],
  },
  {
    path: _PATH_.insider.path,
    element: <InsiderLayout />,
    children: [
      /**
       * admin
       */
      {
        element: (
          <Box>
            <Text>Dashboard</Text>
          </Box>
        ),
        index: true,
      },
      {
        path: _PATH_.parentPath.path,
        children: [
          {
            path: _PATH_.subPath1.path,
            element: (
              <Box>
                <Text>Sub path 1</Text>
              </Box>
            ),
          },
          {
            path: _PATH_.subPath2.path,
            element: (
              <Box>
                <Text>Sub path 2</Text>
              </Box>
            ),
          },
          {
            path: _PATH_.subPath3.path,
            element: (
              <Box>
                <Text>Sub path 3</Text>
              </Box>
            ),
          },
          {
            path: _PATH_.subPath4.path,
            element: (
              <Box>
                <Text>Sub path 4</Text>
              </Box>
            ),
          },
          {
            path: _PATH_.subPath5.path,
            element: (
              <Box>
                <Text>Sub path 5</Text>
              </Box>
            ),
          },
        ],
      },
    ],
  },
];
