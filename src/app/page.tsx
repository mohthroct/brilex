import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Distribution from "@/components/Distribution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1729]">
      <Header />
      <Hero />
      <Products />
      <BeforeAfter />
      <About />
      <Distribution />
      <Contact />
      <Footer />
    </main>
  );
}
