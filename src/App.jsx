import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import FeatureShowcase from './sections/FeatureShowcase.jsx'
import Benefits from './sections/Benefits.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Pricing from './sections/Pricing.jsx'
import SalesCta from './sections/SalesCta.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="page" id="top">
      <div className="page__texture" aria-hidden />
      <Header />
      <main className="main">
        <Hero />
        <FeatureShowcase />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <SalesCta />
      </main>
      <Footer />
    </div>
  )
}
