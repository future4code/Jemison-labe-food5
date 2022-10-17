import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../Routes/coordinator";

const useProtectPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        goToLoginPage(navigate);
      }
    }, [navigate]);
  };
  
  export default useProtectPage;