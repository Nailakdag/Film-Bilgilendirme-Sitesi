import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages//Sign/SignIn";
import MovieInfo from "./pages/MovieInfo";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const user = AuthContext();
  return (
    <>
      <Routes>
        <Route path="/kayıt-ol" element={<SignIn />} />
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:title"
          element={
            <ProtectedRoute user={user}>
              <MovieInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
