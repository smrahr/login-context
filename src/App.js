import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { LogoutPage } from "./components/LogoutPage";
import { Authenticated } from "./components/Authenticated";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />

      <Route
        path=""
        element={
          <Authenticated>
            <Outlet />
          </Authenticated>
        }
      >
        <Route path="logout" element={<LogoutPage />} />
        <Route path="welcome" element={<Welcome />} />
      </Route>
    </Routes>
  );
}

export default App;
