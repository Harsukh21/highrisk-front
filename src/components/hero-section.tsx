"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Clock, DollarSign } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Trusted by 10,000+ Merchants
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                They Decline,
                <span className="text-primary block">We Approve</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Navigating high-risk industries is challenging, but HighRisk Payments makes it easier with our specialized high-risk merchant account services. Our expert team is dedicated to providing secure and efficient payment processing solutions tailored to your business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Call 877-546-0331
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div>
                  <p className="font-semibold">99% Approval Rate</p>
                  <p className="text-sm text-muted-foreground">Industry-leading acceptance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-green-500" />
                <div>
                  <p className="font-semibold">No Setup Fee</p>
                  <p className="text-sm text-muted-foreground">Start processing instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-green-500" />
                <div>
                  <p className="font-semibold">24 Hour Approval</p>
                  <p className="text-sm text-muted-foreground">Quick application process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Start Processing Today</h3>
                    <p className="text-muted-foreground">Get your high-risk merchant account approved in 24 hours</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Enter your business name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                    <Button className="w-full py-3 text-lg">
                      Start Processing Today
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Already filled out a form? <a href="#" className="text-primary hover:underline">Login</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 