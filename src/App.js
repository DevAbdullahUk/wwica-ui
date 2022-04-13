import './App.css'

import Header from './components/header'
import MainPage from './pages/mainPage'


import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

      <div className="header">
        <Header></Header>
      </div>

      <div className="main">
        <MainPage>

        </MainPage>
      </div>

      <div className="footer">
        This is the footer
      </div>

    </div>
  );
}

export default App;
