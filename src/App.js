import "./App.css";

import Header from "./components/header";
import MainPage from "./pages/mainPage";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>

      <div className="main">
        <MainPage></MainPage>


        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
