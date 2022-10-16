import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Login } from "./login";

const element = document.getElementById("app");
const root = createRoot(element);

function LoginLinks() {
  return (
    <div>
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

async function fetchJSON(url) {
  const res = await fetch(url);
  return await res.json();
}

function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(async () => {
    setLoading(true);
    try {
      setData(await loadingFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data };
}

function FrontPage() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("/api/login")
  );
  const user = data;

  if (loading) {
    return <div>Still Loading...</div>;
  }
  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

  return (
    <div>
      <h1> Back to the Movies </h1>
      {user ? (
        <div>
          {user.fullname} ({user.username})
        </div>
      ) : (
        <LoginLinks />
      )}
    </div>
  );
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
