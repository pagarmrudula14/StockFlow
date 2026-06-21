import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from './landing_page/Notfound';

import OnlineAccountOpening from "./landing_page/support/articles/OnlineAccountOpening";
import LoginCredentials from "./landing_page/support/articles/LoginCredentials";
import TradingFAQs from "./landing_page/support/articles/TradingFAQs";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<Notfound />} />


   <Route
  path="/support/online-account-opening"
  element={<OnlineAccountOpening />}
/>

<Route
  path="/support/login-credentials"
  element={<LoginCredentials />}
/>

<Route
  path="/support/trading-faqs"
  element={<TradingFAQs />}
/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

