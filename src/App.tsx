import { Navbar } from "./components/Navbar"
import { Banner } from "./components/Banner"
import { Hero } from "./components/Hero"
import { InfoCards } from "./components/InfoCards"
import { Offer } from "./components/Offer"
import { Mission } from "./components/Mission"
import { Footer } from "./components/Footer"
import { Testimonial } from "./components/Testimonial"
import { Trending } from "./components/Trending"

export const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* top contacts */}
      <Banner />
      <Navbar />
      <Hero />
      <InfoCards />
      <Offer />
      <Trending />
      <Mission />
      <Testimonial/>
      <Footer />
    </div>
  )
}
