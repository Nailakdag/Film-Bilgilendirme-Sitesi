import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      variant="outline"
      onClick={toggleColorMode}
      border="1px solid"
      p="3px"
      borderRadius="15px"
    />
  );
};

export default SwitchThemeButton;
