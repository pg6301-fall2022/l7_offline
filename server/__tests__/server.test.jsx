import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import {loginPath} from "../login.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/login", loginPath);

describe("server test suite", () => {

    it("server does something", async () =>{
        const agent = request.agent(app);
        const response = await agent
            .get("/api/login");
        expect(response.status).toEqual(200);
    }) ;
});