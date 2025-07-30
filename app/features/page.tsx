import { FeaturesHero } from "@/components/features-hero"
import { InteractiveDemo } from "@/components/interactive-demo"
import { CapabilitiesGrid } from "@/components/capabilities-grid"
import { IntegrationShowcase } from "@/components/integration-showcase"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <FeaturesHero />
      <CapabilitiesGrid />
      <InteractiveDemo />
      <IntegrationShowcase />
    </main>
  )
}
