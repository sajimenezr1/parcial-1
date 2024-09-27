import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';



function App() {
  return (
    <div className="container-fluid justify-content-center align-items-center">
        <Header/>
        <Login/>
        <Footer/>
    </div>
  );
}

export default App;
