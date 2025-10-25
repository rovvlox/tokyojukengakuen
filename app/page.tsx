import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueColumns } from "@/components/value-columns"
import { BeforeAfter } from "@/components/before-after"
import { SystemDiagram } from "@/components/system-diagram"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValueColumns />
        <BeforeAfter />
        <SystemDiagram />
        <Pricing />
        <FAQ />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  )
}
