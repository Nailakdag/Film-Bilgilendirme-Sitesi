import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Input, Box } from "@chakra-ui/react";

function Search() {
  const { film, setFilm } = useContext(MainContext);

  return (
    <Box w={{ base: "50%", sm: "60%", md: "600px" }}>
      <Input
        type="text"
        value={film}
        onChange={(e) => setFilm(e.target.value)}
        placeholder="Search..."
        variant="unstyled"
        w="100%"
        textAlign="center"
        borderRadius="15px"
      />
    </Box>
  );
}

export default Search;
