import { useContext, useEffect } from "react";
import axios from "axios";
import { MainContext } from "../context/MainContext";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardBody,
  Image,
  CardHeader,
  Text,
  GridItem,
  CardFooter,
} from "@chakra-ui/react";

function SearchPrev() {
  const { movies, film, setMovies } = useContext(MainContext);
  useEffect(() => {
    if (film.length >= 3) {
      axios
        .get(
          `https://www.omdbapi.com/?s=${film
            .toLowerCase()
            .replaceAll(" ", "+")}&apikey=ee6da209`
        )
        .then((res) => setMovies(res.data.Search));
    } else {
      setMovies(false);
    }
  }, [film, setMovies]);

  return (
    <>
      {movies && (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3,1fr)",
          }}
          bgColor="transparent"
          placeItems="center"
        >
          {movies.map((data) => {
            return (
              <GridItem key={data.imdbID}>
                <Link to={`/${data.Title.toLowerCase().replaceAll(" ", "+")}`}>
                  <Card
                    mt="4"
                    border="2px"
                    borderStyle="solid"
                    borderRadius="40px"
                    width={{ base: "250px", sm: "330px" }}
                    bgColor="transparent"
                    height={{ base: "300px", sm: "425px" }}
                  >
                    <CardHeader
                      height="50px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p="3px"
                      borderBottom="1px solid"
                    >
                      <Text
                        as="h2"
                        size="md"
                        textAlign="center"
                        fontWeight="500"
                      >
                        {data.Title}
                      </Text>
                    </CardHeader>
                    <CardBody
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderBottom="1px solid"
                      h="full"
                    >
                      <Image
                        src={data.Poster}
                        borderRadius="lg"
                        maxWidth={{ base: "200px", md: "300px" }}
                        maxHeight={{ base: "200px", md: "300px" }}
                        objectFit="contain"
                        mb="1"
                      />
                    </CardBody>

                    <CardFooter
                      display="flex"
                      justify="center"
                      flexDirection="column"
                      alignItems="center"
                      height="60px"
                    >
                      <Text fontWeight="500">{data.Year}</Text>
                      <Text>{data.Type}</Text>
                    </CardFooter>
                  </Card>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default SearchPrev;
