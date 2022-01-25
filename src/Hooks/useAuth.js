import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

const useAuth = () => {
  return useContext(AuthProvider);
};
export default useAuth;
