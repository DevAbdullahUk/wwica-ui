import "./App.css";

import Header from "./components/header";
import MainPage from "./pages/mainPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <meta name="theme-color" content="#FFFF" />
      <div className="header">
        <Header></Header>
      </div>

      <div className="main">
        <MainPage></MainPage>


        <div className="footer">This is the footer</div>
      </div>

    </div>
  );
}

export default App;
