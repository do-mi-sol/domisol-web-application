import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>에러에러</p>
        <p>에러에러2</p>

        <p>안녕하세요 희연이예요</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          도미솔 프로젝트 화이팅
        </a>
      </header>
    </div>
  );
}

export default App;
