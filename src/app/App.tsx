import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FeaturedEvents } from "./components/FeaturedEvents";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { supabase } from "../lib/supabase";

console.log(import.meta.env.VITE_SUPABASE_URL);

export default function App() {
  return (
    <div className="font-sans antialiased text-[#2B2B2B] bg-[#F8F9FA] overflow-x-hidden selection:bg-[#00B4B4] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedEvents />
        {/*<Testimonials />*/}
      </main>
      <Footer />
    </div>
  );
}
