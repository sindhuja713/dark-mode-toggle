import logo from './logo.svg';
import './App.css';
import Header from './components/footer/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/footer/hero/Hero';
import useLocalStorage from "use-local-storage";

function App() {
  
  return (
    <div  className='main'>
      <Header />
      <Footer/>
      <Hero />
    </div>
  );
}

export default App;
