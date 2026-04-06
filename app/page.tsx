'use client';

import { useState } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#1f2937]">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Hero />
      <Features />
      <About onOpenModal={() => setIsModalOpen(true)} />
      <Stats />
      <Projects />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
       <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}