import "./style.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { LoadingContextProvider } from "./contexts/LoadingContext";
import Main from "./pages/Main";
import User from "./pages/User";

function App() {
  return (
    <LoadingContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </BrowserRouter>
    </LoadingContextProvider>
  );
}

export default App;
