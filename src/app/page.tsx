import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Factory from "@/components/Factory";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Products />
      <Factory />
      <Contact />
    </main>
  );
}
