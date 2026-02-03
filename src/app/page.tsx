"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Distribution from "@/components/Distribution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Products />
        <BeforeAfter />
        <About />
        <Distribution />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
