import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import EncuentraTuBicicleta from "@/components/sections/EncuentraTuBicicleta";
import DetalleBicicleta from "@/components/sections/DetalleBicileta";
import Categoria from "@/components/sections/Categoria";
import NuestrosServicios from "@/components/sections/NuestrosServicios";
import NewsLetter from "@/components/sections/NewsLetter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EncuentraTuBicicleta />
      <DetalleBicicleta />
      <Categoria />
      <NuestrosServicios />
      <NewsLetter />
      <Footer />
    </div>
  );
}
