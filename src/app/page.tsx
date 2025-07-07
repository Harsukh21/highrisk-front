import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IndustriesSection } from "@/components/industries-section"
import { SolutionsSection } from "@/components/solutions-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IndustriesSection />
      <SolutionsSection />
      <IntegrationsSection />
      <StatsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
