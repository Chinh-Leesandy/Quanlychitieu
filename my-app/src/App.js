import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Trans from './Components/Trans';
import Category from './Components/Category';
import { Login } from './Components/Login';
import { Wallet } from './Components/Wallet';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path = "/home" element = {<Body/>}/>
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/transactions" element={<Trans />} />
        <Route path="/category" element={<Category />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
