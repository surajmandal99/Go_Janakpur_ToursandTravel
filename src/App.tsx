import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import CarRentalsPage from './pages/CarRentalsPage';
import AttractionsPage from './pages/AttractionsPage';
import DestinationPage from './pages/DestinationPage';
import DealPage from './pages/DealPage';
import CheckoutPage from './pages/CheckoutPage';
import CareersPage from './pages/about/CareersPage';
import PressPage from './pages/about/PressPage';
import HelpCenterPage from './pages/help/HelpCenterPage';
import JanakpurPage from './pages/destinations/JanakpurPage';
import VacationPackagesPage from './pages/packages/VacationPackagesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/car-rentals" element={<CarRentalsPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
            <Route path="/deal/:id" element={<DealPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/destinations/janakpur" element={<JanakpurPage />} />
            <Route path="/packages" element={<VacationPackagesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;