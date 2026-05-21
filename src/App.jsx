import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sighin from "./pages/Signin";
import Sighup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
