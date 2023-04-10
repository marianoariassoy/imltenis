import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sections from "./Sections";
import Welcome from "./pages/Welcome";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const App = () => {
  const analytics = Analytics({
    app: "IML Tenis",
    plugins: [
      googleAnalytics({
        measurementIds: ["G-G1DBH0K86R"],
      }),
    ],
  });

  analytics.page();

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
