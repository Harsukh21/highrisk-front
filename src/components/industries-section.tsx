"use client"

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
  ArrowRight 
} from "lucide-react"

const industries = [
  {
    icon: Leaf,
    title: "CBD & Hemp",
    description: "Compliant solutions for CBD businesses",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Heart,
    title: "Adult Content",
    description: "Secure processing for adult content and services",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  {
    icon: Target,
    title: "Dating Sites",
    description: "Reliable processing for dating platforms",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "Secure solutions for collection agencies",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: Shield,
    title: "Firearms",
    description: "Compliant processing for firearms dealers",
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950"
  },
  {
    icon: Pill,
    title: "Nutraceuticals",
    description: "Solutions for supplement businesses",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: Store,
    title: "Pawn Shops",
    description: "Reliable processing for pawn shops",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Secure solutions for travel businesses",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    icon: Cloud,
    title: "Vape & E-Cigarettes",
    description: "Compliant processing for vape shops",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    icon: Code,
    title: "Web Design",
    description: "Solutions for digital service providers",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950"
  }
]

export function IndustriesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            High-Risk Industries We Accept
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Specialized Services for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized services ensure secure transactions and effective risk management, allowing your business to thrive in high-risk markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${industry.bgColor} flex items-center justify-center mb-3`}>
                  <industry.icon className={`h-6 w-6 ${industry.color}`} />
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {industry.description}
                </p>
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
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  )
} 