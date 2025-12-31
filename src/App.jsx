import ContactUs from './components/ContactUs/page';
// import PortfolioGrid from './components/PortfolioGrid/page';
import PortfolioHero from './components/PortfolioHero/Page';
import SoftwareEngineerCard from './components/SoftwareEngineerCard/page';
import WorkPortfoilio from './components/WorkPortfoilio/page';
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <SoftwareEngineerCard />
      {/* <PortfolioGrid /> */}
      <WorkPortfoilio />
      <ContactUs />
    </div>
  )
}

export default App