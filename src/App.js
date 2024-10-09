import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'normalize.css';
import './css/main.scss';
import './css/Header.scss';
import './components/homepage/First-page.scss';
import './css/Footer.scss';
import './components/traincard/Train-card.scss';
import './css/seats.css';
import './css/passengers-page.css';
import './css/verification.css';
import './css/success.css';
import './css/stage-bar.css';
import "./css/tickets-page.css";
import "./css/tickettrain.css";

import Header from './components/homepage/Header';
import Footer from './components/homepage/Footer';
import HomePage from './components/homepage/HomePage';
import Passengers from './components/Passengers';
import SecondPage from './components/SecondPage';
import SuccessPage from './components/SuccessPage';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Routes>
               <Route path="/fe_2_diplom" element={<HomePage />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/tickets/*" element={<SecondPage />} />
               <Route path="/passengers/*" element={<Passengers />} />
               <Route path="/success/" element={<SuccessPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;