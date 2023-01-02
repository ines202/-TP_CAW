
import "./style/APP.css";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import BlogBox from "./components/BlogBox";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="BlogBox" element={<BlogBox/>}/>
      </Routes>
    </div>
  );
}

export default App;