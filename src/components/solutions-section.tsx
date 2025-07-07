"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CreditCard, 
  Lock,
  CheckCircle,
  ArrowRight 
} from "lucide-react"

const solutions = [
  {
    icon: Shield,
    title: "High-Risk Payment Gateway",
    description: "Our high risk payment gateway makes high risk credit card processing safer and more secure with integrated fraud solutions to prevent chargebacks.",
    features: [
      "Advanced fraud prevention tools",
      "Customized gateway solutions",
      "Industry-specific configurations",
      "Real-time transaction monitoring"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: CreditCard,
    title: "Credit Card Chargebacks",
    description: "If you experience high levels of chargebacks or if your payment processor has dropped your account, you may need a high risk merchant account.",
    features: [
      "Advanced chargeback prevention",
      "Real-time fraud detection",
      "Automated dispute resolution",
      "Risk monitoring dashboard"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Lock,
    title: "High-Risk Merchant Account Provider",
    description: "Find the best high risk merchant account and payment gateway provider by knowing what to look for.",
    features: [
      "Custom solutions for CBD businesses",
      "Adult content payment processing",
      "Credit repair merchant accounts",
      "Tailored ecommerce solutions"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  }
]

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Comprehensive Payment Solutions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Secure, Reliable, and Tailored Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure, reliable, and tailored payment processing solutions for your high-risk business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl ${solution.bgColor} flex items-center justify-center mb-4`}>
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
                <Button className="w-full group-hover:bg-primary/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 