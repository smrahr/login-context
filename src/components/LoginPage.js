import React, { useEffect, useState } from "react";
import { useAuth } from "./auth/useAuth";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const { user, login } = useAuth();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const signInHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (user) {
    return <Navigate to="/welcome" replace />;
  }

  return (
    <div className="login">
      <form onSubmit={(e) => signInHandler(e)}>
        <input
          type="email"
          value={email}
          placeholder="ENTER USER NAME"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="ENTER USER PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
