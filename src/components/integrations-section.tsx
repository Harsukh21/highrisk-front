"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CreditCard, 
  ShoppingCart, 
  Monitor, 
  Code,
  ArrowRight 
} from "lucide-react"

const integrations = [
  {
    icon: CreditCard,
    title: "Payment Gateways",
    platforms: ["Authorize.net", "NMI", "USAePay"],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: ShoppingCart,
    title: "Shopping Carts",
    platforms: ["WooCommerce", "Shopify", "Magento"],
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Monitor,
    title: "CMS Platforms",
    platforms: ["WordPress", "Drupal", "Joomla"],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: Code,
    title: "API Integration",
    platforms: ["REST API", "SDK", "Custom"],
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  }
]

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            PayKings Integrations
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Effortless Platform Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Effortlessly integrate with a range of platforms to enhance your business operations. Connect with leading payment gateways, shopping carts, and essential tools to streamline your payment processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${integration.bgColor} flex items-center justify-center mb-3`}>
                  <integration.icon className={`h-6 w-6 ${integration.color}`} />
                </div>
                <CardTitle className="text-lg">{integration.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {integration.platforms.map((platform, platformIndex) => (
                    <li key={platformIndex} className="text-sm text-muted-foreground">
                      • {platform}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  )
} 