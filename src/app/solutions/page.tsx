import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CreditCard, 
  Lock,
  Smartphone,
  Monitor,
  Repeat,
  Building2,
  CheckCircle,
  ArrowRight 
} from "lucide-react"

const solutions = [
  {
    icon: Shield,
    title: "High-Risk Merchant Account",
    description: "Specialized merchant accounts designed for high-risk businesses with competitive rates and flexible terms.",
    features: [
      "99% approval rate",
      "Quick application process",
      "Competitive processing rates",
      "No hidden fees"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description: "Secure payment gateway solutions with advanced fraud protection and seamless integration capabilities.",
    features: [
      "Advanced fraud prevention",
      "Real-time processing",
      "Multiple payment methods",
      "Easy integration"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Lock,
    title: "3D Secure",
    description: "Enhanced security with 3D Secure authentication to protect against fraud and reduce chargebacks.",
    features: [
      "Fraud protection",
      "Chargeback reduction",
      "PCI compliance",
      "Customer verification"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: Building2,
    title: "ACH Processing",
    description: "Secure ACH payment processing for businesses that need to process bank transfers and direct debits.",
    features: [
      "Lower processing fees",
      "Recurring payments",
      "Direct deposit",
      "Bank verification"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    icon: Shield,
    title: "Chargeback Management",
    description: "Comprehensive chargeback protection and management services to minimize losses and disputes.",
    features: [
      "Automated dispute resolution",
      "Risk monitoring",
      "Documentation support",
      "Representation services"
    ],
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  {
    icon: Lock,
    title: "Fraud Prevention",
    description: "Advanced fraud detection and prevention tools to protect your business from fraudulent transactions.",
    features: [
      "Real-time monitoring",
      "AI-powered detection",
      "Custom rules engine",
      "Risk scoring"
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    icon: Monitor,
    title: "Level 2 & 3 Processing",
    description: "Enhanced data processing for B2B transactions with detailed transaction information and reporting.",
    features: [
      "Enhanced data capture",
      "B2B optimization",
      "Detailed reporting",
      "Cost savings"
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950"
  },
  {
    icon: Monitor,
    title: "Virtual Terminal",
    description: "Web-based payment processing terminal for manual transaction entry and management.",
    features: [
      "Web-based interface",
      "Manual entry",
      "Transaction history",
      "Reporting tools"
    ],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    icon: Smartphone,
    title: "Mobile Payments",
    description: "Mobile payment solutions for businesses that need to process payments on-the-go.",
    features: [
      "Mobile app",
      "Card reader support",
      "Offline processing",
      "Receipt management"
    ],
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    icon: Monitor,
    title: "Online Payments",
    description: "Complete online payment processing solutions for e-commerce and web-based businesses.",
    features: [
      "Shopping cart integration",
      "Multiple payment methods",
      "Secure checkout",
      "Analytics dashboard"
    ],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    icon: Repeat,
    title: "Recurring Payments",
    description: "Automated recurring payment processing for subscriptions and installment plans.",
    features: [
      "Automated billing",
      "Flexible schedules",
      "Payment retry logic",
      "Customer management"
    ],
    color: "text-rose-600",
    bgColor: "bg-rose-50 dark:bg-rose-950"
  },
  {
    icon: Building2,
    title: "B2B Payments",
    description: "Specialized payment solutions for business-to-business transactions and invoicing.",
    features: [
      "Invoice processing",
      "Payment terms",
      "Account management",
      "Reporting tools"
    ],
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950"
  }
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Payment Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive Payment Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, reliable, and tailored payment processing solutions for your high-risk business needs.
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

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${solution.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <solution.icon className={`h-8 w-8 ${solution.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our payment solutions are designed to help your business succeed with advanced security, competitive rates, and exceptional support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Advanced Security</h3>
              <p className="text-muted-foreground text-sm">
                State-of-the-art fraud protection and security measures
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground text-sm">
                Best-in-class processing rates for high-risk businesses
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground text-sm">
                Simple integration with your existing systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Round-the-clock support from our expert team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get approved for your merchant account today and start processing payments securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Apply Now
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