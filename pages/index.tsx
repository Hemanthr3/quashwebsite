import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
