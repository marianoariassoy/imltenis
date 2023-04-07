import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sections from "./Sections";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Sections />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
