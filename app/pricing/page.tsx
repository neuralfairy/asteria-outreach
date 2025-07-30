import { PricingHero } from "@/components/pricing-hero"
import { PricingTiers } from "@/components/pricing-tiers"
import { ROICalculator } from "@/components/roi-calculator"
import { PricingFAQ } from "@/components/pricing-faq"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingTiers />
      <ROICalculator />
      <PricingFAQ />
    </main>
  )
}
