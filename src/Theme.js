import { extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  styles: {
    global: {
      "html, body": {},
    },
  },
});

export default theme;
