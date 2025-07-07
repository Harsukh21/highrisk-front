import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Leaf, 
  Heart, 
  Shield, 
  DollarSign, 
  Target, 
  Pill, 
  Store, 
  Plane, 
  Cloud, 
  Code,
  Gamepad2,
  Trophy,
  Gift,
  ArrowRight 
} from "lucide-react"

const industries = [
  {
    icon: Leaf,
    title: "CBD & Hemp",
    description: "Compliant solutions for CBD businesses",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
    features: ["Compliant processing", "Industry expertise", "Regulatory support"]
  },
  {
    icon: Heart,
    title: "Adult Content",
    description: "Secure processing for adult content and services",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950",
    features: ["Secure processing", "Privacy protection", "Compliance support"]
  },
  {
    icon: Target,
    title: "Dating Sites",
    description: "Reliable processing for dating platforms",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    features: ["Subscription billing", "Recurring payments", "Fraud protection"]
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "Secure solutions for collection agencies",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    features: ["Compliance tools", "Payment tracking", "Reporting systems"]
  },
  {
    icon: Shield,
    title: "Firearms",
    description: "Compliant processing for firearms dealers",
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950",
    features: ["Regulatory compliance", "Background checks", "Secure processing"]
  },
  {
    icon: Pill,
    title: "Nutraceuticals",
    description: "Solutions for supplement businesses",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    features: ["FDA compliance", "Product verification", "Subscription billing"]
  },
  {
    icon: Store,
    title: "Pawn Shops",
    description: "Reliable processing for pawn shops",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    features: ["Point of sale", "Inventory management", "Payment processing"]
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Secure solutions for travel businesses",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    features: ["Booking systems", "International payments", "Refund handling"]
  },
  {
    icon: Cloud,
    title: "Vape & E-Cigarettes",
    description: "Compliant processing for vape shops",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    features: ["Age verification", "Compliance tools", "Secure processing"]
  },
  {
    icon: Code,
    title: "Web Design",
    description: "Solutions for digital service providers",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    features: ["Project billing", "Recurring payments", "Client management"]
  },
  {
    icon: Gamepad2,
    title: "Online Gaming",
    description: "Secure processing for gaming platforms",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    features: ["Virtual currency", "Tournament payments", "Fraud protection"]
  },
  {
    icon: Trophy,
    title: "Skill Based Gaming",
    description: "Solutions for skill-based gaming platforms",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950",
    features: ["Tournament systems", "Prize distribution", "Compliance tools"]
  },
  {
    icon: Gift,
    title: "Sweepstakes",
    description: "Processing for sweepstakes and contests",
    color: "text-rose-600",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    features: ["Prize management", "Entry tracking", "Compliance support"]
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              High-Risk Industries
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our specialized services ensure secure transactions and effective risk management, allowing your business to thrive in high-risk markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Call 877-546-0331
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${industry.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`h-8 w-8 ${industry.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary w-full justify-start">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Low or high, your risk level won&apos;t stop you from getting a fast and easy approval. We accept and provide for a number of industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Open Your Merchant Account
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 