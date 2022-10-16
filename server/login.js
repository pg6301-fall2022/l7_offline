import express from "express";

export const loginPath = new express.Router();

loginPath.get("/", (req, res) => {
  function respond() {
    res.json({
      username: "admin",
      fullname: "Testsson",
    });
  }
  setTimeout(respond, 3000);
});
