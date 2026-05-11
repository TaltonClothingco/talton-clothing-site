
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TaltonClothingSite() {
  return (
    <div className="min-h-screen bg-[#2b1b14] text-[#f5efe6]">
      {/* Header */}
      <header className="bg-[#3a241a] border-b border-[#5a3a2a]">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-serif tracking-wide">Talton Clothing Co.</h1>
          <nav className="space-x-6 text-sm uppercase tracking-widest">
            #ebayeBay Collection</a>
            <a href="#handmade" className="hover:text-[#d4af37]">Handmade Neckties</a>
            <a href="#about" className="hover:text-[#d4af37]">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Classic Menswear. Purpose Reclaimed.
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-[#e6dccf]">
          Handcrafted neckwear and timeless men’s pieces with history, character,
          and masculine elegance.
        </p>
        <div className="mt-10">
          <Button className="bg-[#7a4a2e] hover:bg-[#8b5a3c] text-white">Shop the Collection</Button>
        </div>
      </motion.section>

      {/* eBay Section */}
      <section id="ebay" className="bg-[#241611] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-serif mb-6">eBay Vintage Collection</h3>
          <p className="max-w-3xl mb-10 text-[#d8cfc4]">
            Curated pre-owned and vintage menswear sourced for quality, heritage,
            and enduring style. Updated directly from our eBay storefront.
          </p>
          <Card className="bg-[#3a241a] border-[#5a3a2a]">
            <CardContent className="p-6">
              <p className="italic">Live eBay item feed placeholder</p>
              <p className="text-sm text-[#cbbbaa] mt-2">
                (Embed eBay listings or link directly to your store)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Handmade Section */}
      <section id="handmade" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-serif mb-6">Handmade BDU Neckties</h3>
          <p className="max-w-3xl mb-10 text-[#e6dccf]">
            Authentic military uniforms repurposed into handcrafted neckties,
            pocket squares, and accessories — honoring service through craft.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Neckties", "Pocket Squares", "Accessories"].map((item) => (
              <Card key={item} className="bg-[#3a241a] border-[#5a3a2a]">
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif mb-2">{item}</h4>
                  <p className="text-sm text-[#cbbbaa]">
                    Handmade in small batches. No two pieces alike.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#241611] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif mb-6">Our Story</h3>
          <p className="text-[#d8cfc4]">
            Talton Clothing Co. exists at the intersection of craftsmanship,
            tradition, and purpose — building refined menswear with a story worth telling.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b100c] py-6 text-center text-sm text-[#b6a89a]">
        © {new Date().getFullYear()} Talton Clothing Co. All rights reserved.
      </footer>
    </div>
  );
}
