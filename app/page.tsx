import { HeroSection } from "@/components/hero-section"
import { FeaturesPreview } from "@/components/features-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
