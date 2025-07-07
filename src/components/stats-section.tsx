"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, DollarSign } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    value: "99%",
    label: "Approval Rate",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: Users,
    value: "10k+",
    label: "Merchants",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: DollarSign,
    value: "1D",
    label: "Fast Funding",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose HighRisk Payments
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Industry-Leading Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses who trust HighRisk Payments for their high-risk payment processing needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-semibold">Industry-leading approval rates</h3>
              <p className="text-sm text-muted-foreground">Get approved when others decline</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Competitive processing rates</h3>
              <p className="text-sm text-muted-foreground">Best rates in the industry</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Advanced fraud protection</h3>
              <p className="text-sm text-muted-foreground">Keep your business secure</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Next-day funding available</h3>
              <p className="text-sm text-muted-foreground">Get your money faster</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">No hidden fees</h3>
              <p className="text-sm text-muted-foreground">Transparent pricing</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">24/7 customer support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 