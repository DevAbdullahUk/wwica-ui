import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import MainPage from "./pages/mainPage";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer";
import AboutPage from "./pages/aboutPage";


function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route index element={<MainPage></MainPage>} />
            <Route path="about" element={<AboutPage></AboutPage>} />

            <Route
              path="*"
              element={<div> No page, or not implemented yet 🏗️</div>}
            />
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
