import React from "react";
import { createRoot } from "react-dom/client";

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<h1>Greetings everyone!</h1>);