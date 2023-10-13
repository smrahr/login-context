import React, { useEffect } from "react";
import { useAuth } from "./auth/useAuth";
import { Navigate } from "react-router-dom";

export const Authenticated = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <div>{children}</div>;
};
