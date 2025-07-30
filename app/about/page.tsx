import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { CompanyMission } from "@/components/company-mission"
import { CertificationsSection } from "@/components/certifications-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <CompanyMission />
      <TeamSection />
      <CertificationsSection />
    </main>
  )
}
