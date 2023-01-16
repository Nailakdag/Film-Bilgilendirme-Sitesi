import React from "react";
import { GoPlay } from "react-icons/go";
import Search from "./Search";
import { Box, Text, Button } from "@chakra-ui/react";
import { logOut } from "../config/Firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SwitchThemeButton from "./SwitchThemeButton";

function Header() {
  const { setUser } = AuthContext();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut();
    await setUser(false);
    await localStorage.setItem("user", false);
    await navigate("/kay─▒t-ol");
  };

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      height="55px"
      bgColor="blackAlpha.600"
    >
      <GoPlay color="white" size="25px" />

      <Search />
      <Box>
        {" "}
        <Button onClick={handleLogOut}>
          <Text
            fontSize={{ base: "14px", sm: "16px" }}
            border="1px solid"
            p="0px 10px 0 10px"
            borderRadius="15px"
            mr="5"
          >
            Logout
          </Text>
        </Button>
        <SwitchThemeButton />
      </Box>
    </Box>
  );
}

export default Header;
