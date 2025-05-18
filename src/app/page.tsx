import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ToolsSection from "@/components/tools-section"
import TeachersSection from "@/components/teachers-section"
import StatsSection from "@/components/status-section"
import TestimonialsSection from "@/components/testimonials-section"
import FeaturesSection from "@/components/features-section"
import JoinSection from "@/components/join-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <ToolsSection />
      <TeachersSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
