import * as React from "react";
import * as ReactDOM from "react-dom";

import {createRoot} from "react-dom/client";
import {act, Simulate} from "react-dom/test-utils";
import {Login} from "../index";


describe("client test suite", () => {
    it("there exists a front page", () => {
        const element = document.createElement("div");

        const root = createRoot(element);
        act( () => root.render(
            < Login />
        ));

        expect(element.querySelector("h1")?.innerHTML).toEqual(" Welcome to login ");
        expect(element.innerHTML).toMatchSnapshot();
    });
});