import React from 'react';

import { Layout } from 'antd';
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Homepage,
  Footer,
} from './components/index';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout className='background'>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
