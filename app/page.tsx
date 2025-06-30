"use client";
import SlideshowWithText from "@/src/components/ImageAnimation";
import AboutSection from "@/src/components/AboutSection";
import DepartmentsSection from "@/src/components/DepartmentsSection";
import NewsSection from "@/src/components/NewsSection";
import EventsSection from "@/src/components/EventsSection";
import AdmissionsSection from "@/src/components/AdmissionsSection";
import StudentLifeSection from "@/src/components/StudentLifeSection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import ContactSection from "@/src/components/ContactSection";
import { NavBar } from "@/src/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <SlideshowWithText />
        <AboutSection />
        <DepartmentsSection />
        <NewsSection />
        <EventsSection />
        <AdmissionsSection />
        <StudentLifeSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
