import logo from "./logo.svg";
import "./App.css";
import blackboard from "./blackboard.jpg";
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import BoardForm from "./components/BoardForm";
import Message1 from "./components/Message1";
import Message2 from "./components/Message2";
import RankingForm from "./components/RankingForm";
import { Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/heart/:userId" element={<BoardForm />} />
        <Route path="/ranking" element={<RankingForm />} />
        {/* <Route path="/message1" element={<Message1 />} />
        <Route path="/message2" element={<Message2 />} /> */}
      </Routes>
    </>
  );
}

export default App;
