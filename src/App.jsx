import React from 'react';
// import PortfolioGrid from './components/PortfolioGrid/page';
import PortfolioHero from './components/PortfolioHero/Page';
import BioGraphy from './components/BioGraphy/page';
import WorkPortfoilio from './components/WorkPortfoilio/page';
import ContactUs from './components/ContactUs/page';
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <BioGraphy />
      {/* <PortfolioGrid /> */}
      <WorkPortfoilio />
      <ContactUs />
    </div>
  )
}

export default App