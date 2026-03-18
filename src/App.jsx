import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ResultPage from "./components/ResultPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [authed, setAuthed] = useState(false);

  const safePage = (p) => {
    if (p === "result" && !authed) {
      setPage("login");
      return;
    }
    setPage(p);
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar page={page} setPage={safePage} />
      {page === "home" && <HomePage setPage={safePage} />}
      {page === "login" && <LoginPage setPage={safePage} setAuthed={setAuthed} />}
      {page === "result" && authed && <ResultPage setPage={safePage} />}
    </div>
  );
}
