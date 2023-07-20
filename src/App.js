import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import HomePage from './components/homepage';
import Footer from './components/footer'

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
