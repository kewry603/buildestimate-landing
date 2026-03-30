import './App.css'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="page" id="top">
      <div className="page__texture" aria-hidden />
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
