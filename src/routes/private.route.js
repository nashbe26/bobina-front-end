import { useSelector } from "react-redux";
import { Outlet, Navigate, BrowserRouter, Routes } from "react-router-dom";
import { store } from "../redux/store";

const state = store.getState();
const PrivateRoutes = ({ children }) => {
 
  const token = localStorage.getItem('token')

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
};

export default PrivateRoutes;
