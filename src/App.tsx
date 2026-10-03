import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/loader";
import Watermark from "./components/watermark/watermark";
const Home = lazy(() => import("./pages/home/home"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Booking = lazy(() => import("./pages/booking/booking"));
const Events = lazy(() => import("./pages/events/events"));
const About = lazy(() => import("./pages/about/about"));
const Inspirations = lazy(() => import("./pages/inspirations/inspirations"));
const Showroom = lazy(() => import("./pages/showroom/showroom"));

function App() {
  return (
    <BrowserRouter>
      <Watermark />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
