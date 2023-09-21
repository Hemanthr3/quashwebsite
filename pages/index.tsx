import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Comparision from "@/components/comparision";
import Reporting from "@/components/reporting";
import Resolution from "@/components/resolution";
import Collaboration from "@/components/collaboration";
import Integration from "@/components/integration";
import Callback from "@/components/callback";
import CodeSection from "@/components/code";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Comparision />
        <Reporting />
        <Resolution />
        <Collaboration />
        <Integration />
        <CodeSection />
        <Callback />
      </main>
      <Footer />
    </div>
  );
}
