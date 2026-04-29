import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingContactButton } from "@/components/floating-contact-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Expertise Section */}
      <ExpertiseSection />
      
      {/* Core Philosophy */}
      <PhilosophySection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </main>
  )
}
