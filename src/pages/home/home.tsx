import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Features from "../../components/features/features";
import Inspirations from "../../components/inspirations/inspirations";
import Events from "../../components/events/events";
import Location from "../../components/location/location";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar active="Inspirations" />
        <main className="flex-grow-1">
          <Hero />
          <Features />
          <Inspirations />
          <Events />
          <Location />
        </main>
        <Footer />
      </div>
    </USALProvider>
  );
}

export default Home;
