import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import NoPage from "./nopage";
import LoginPage from "./auth/Login";
import Shop from "./shop";
import "antd/dist/antd.css";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Shop />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
