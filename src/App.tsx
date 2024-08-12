import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import { Landing } from "./landing";

export function App() {
  return (
    <Router>
      <div>
        <Landing />
        <Footer />
      </div>
    </Router>
  );
}
