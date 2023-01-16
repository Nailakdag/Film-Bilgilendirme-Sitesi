import { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) {
  const [film, setFilm] = useState("");
  const [movies, setMovies] = useState(false);

  const maindata = {
    film,
    setFilm,
    movies,
    setMovies,
  };
  return (
    <MainContext.Provider value={maindata}>{children}</MainContext.Provider>
  );
}
