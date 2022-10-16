import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const element = document.getElementById("app");
const root = createRoot(element);

function FrontPage() {
  return (
    <div>
      <h1> Back to the Movies </h1>
      <div>
        <div>
          <Link to={"/login"}> Login </Link>
        </div>
        <div>
          <Link to={"/register"}> New user </Link>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return <h1> Welcome to login </h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Application />);
