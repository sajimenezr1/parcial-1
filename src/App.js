import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';
import { Home } from './components/table/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid justify-content-center" id="app-div">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
