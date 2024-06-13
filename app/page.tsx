"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import NavBar from "@/components/navBar";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="h-full bg-[#0B0221]">
      <NavBar />
      <Hero />
      <Logos />
      <Section />
      <Footer />
    </main>
  );
}
