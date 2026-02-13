import "./App.css";
import { Route, Routes } from "react-router";
import Welcome from "./Pages/Onboarding/Welcome";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </div>;
}

export default App;
