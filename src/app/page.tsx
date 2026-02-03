import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Factory from "@/components/Factory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Factory />
      <Contact />
      <Footer />
    </main>
  );
}
