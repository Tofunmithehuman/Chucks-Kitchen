import "./App.css";
import { Route, Routes } from "react-router";
import ScrollToTop from "./Components/ScrollToTop";
import Welcome from "./Pages/Onboarding/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<><ScrollToTop /><Welcome /></>} />
      </Routes>
    </div>
  );
}

export default App;