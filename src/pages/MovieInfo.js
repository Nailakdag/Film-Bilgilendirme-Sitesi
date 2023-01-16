import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  Button,
  Image,
  Grid,
  Box,
  GridItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function MovieInfo() {
  const [movie, setMovie] = useState([]);
  const { title } = useParams();
  const router = useNavigate();

  const handleBack = () => {
    router("/");
  };
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?t=${title}&apikey=ee6da209`)
      .then((res) => setMovie(res.data));
  }, [title]);

  return (
    <>
      <Flex
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        p="10px"
        justifyContent="center"
      >
        <Box w="full" flex="1">
          <Button
            bgColor="black"
            p="0px 30px"
            color="white"
            borderRadius="12px"
            size={{ base: "sm" }}
            mb="10px"
            onClick={handleBack}
          >
            <IoArrowBackOutline size="20px" />
          </Button>
        </Box>
        <Grid placeItems="center" width="100%">
          <GridItem>
            <Image
              src={movie.Poster}
              minHeight={{ base: "350px", sm: "400px", "2xl": "600px" }}
              minWidth={{ base: "280px", sm: "400px", "2xl": "600px" }}
              maxHeight={{ base: "350px", sm: "400px", "2xl": "600px" }}
              maxWidth={{ base: "280px", sm: "400px", "2xl": "600px" }}
              objectFit="contain"
              borderRadius="15px"
              mb={{ base: "3", sm: "0" }}
              mt={{
                base: "2",
                md: "-40px",
                lg: "10px",
                xl: "50px",
              }}
              ml={{ base: "0", md: "-60px", lg: "-100px" }}
              mr={{ base: "0", md: "-20px", xl: "150px", "2xl": "400px" }}
            ></Image>
          </GridItem>
        </Grid>
        <Box
          mt={{ base: "0", md: "12" }}
          mr={{ base: "0", lg: "100px" }}
          ml={{ base: "0", xl: "-250px", "2xl": "-500px" }}
        >
          <Text
            as="p"
            fontSize={{ base: "14px", lg: "18px", xl: "20px" }}
            mb="2"
            textAlign="center"
          >
            {movie.Title}
          </Text>
          <Text as="p" fontSize="14px" mb="2" textAlign="center">
            ( {movie.Year} )
          </Text>
          <Box fontSize={{ base: "14px", xl: "16px" }}>
            <Text as="p">{movie.Plot}</Text>
            <Text
              as="p"
              fontSize="13px"
              fontWeight="bold"
              display="flex"
              justifyContent="flex-end"
            >
              Imbd Rating: {movie.imdbRating}
            </Text>
            <Text
              as="p"
              fontSize="12px"
              fontWeight="bold"
              display="flex"
              justifyContent="flex-end"
            >
              ({movie.Type})
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Actors:
            </Text>
            <Text as="p" fontSize="14px">
              {movie.Actors}
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Genre:
            </Text>
            <Text as="p" fontSize="14px">
              {movie.Genre}
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Awards:
            </Text>
            <Text as="p" fontSize="14px">
              {movie.Awards}
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Country:
            </Text>
            <Text as="p" fontSize="14px">
              {movie.Country}- ({movie.Language})
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Director:
            </Text>
            <Text as="p" fontSize="14px">
              {movie.Director}
            </Text>
            <Text as="h2" fontSize="16px" fontWeight="bold">
              Writer:
            </Text>
            <Text as="p" fontSize="14px" mb="3">
              {movie.Writer}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default MovieInfo;
