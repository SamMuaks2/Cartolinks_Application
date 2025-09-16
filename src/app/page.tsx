"use client"

import { useTheme } from "next-themes";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import GenerateGrid from "../components/GenerateGrid";
import Gallery from "../components/Gallery";


export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-8">
      <Header />

      <section className="mt-8">
        <HeroCarousel />
      </section>

      <section className="mt-16">
        <GenerateGrid />
      </section>

      <section className="mt-12">
        <Gallery />
      </section>
    </main>
  )
}