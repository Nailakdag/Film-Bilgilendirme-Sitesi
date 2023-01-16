import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/kayıt-ol", children }) => {
  const { user: isUserExists } = user;
  if (!isUserExists) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
