"use client"

import Link from "next/link"
import { Shield, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">HighRisk Payments</span>
            </div>
            <p className="text-muted-foreground">
              Leading high-risk merchant account provider offering secure payment processing for businesses in challenging industries.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>877-546-0331</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@highriskpayments.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>433 Central Ave, St. Petersburg, FL 33701</span>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/cbd" className="text-muted-foreground hover:text-primary transition-colors">CBD & Hemp</Link></li>
              <li><Link href="/industries/adult" className="text-muted-foreground hover:text-primary transition-colors">Adult Content</Link></li>
              <li><Link href="/industries/dating" className="text-muted-foreground hover:text-primary transition-colors">Dating Sites</Link></li>
              <li><Link href="/industries/collection" className="text-muted-foreground hover:text-primary transition-colors">Debt Collection</Link></li>
              <li><Link href="/industries/firearms" className="text-muted-foreground hover:text-primary transition-colors">Firearms</Link></li>
              <li><Link href="/industries/gaming" className="text-muted-foreground hover:text-primary transition-colors">Online Gaming</Link></li>
              <li><Link href="/industries/vape" className="text-muted-foreground hover:text-primary transition-colors">Vape & E-Cigarettes</Link></li>
              <li><Link href="/industries/web-design" className="text-muted-foreground hover:text-primary transition-colors">Web Design</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/merchant-accounts" className="text-muted-foreground hover:text-primary transition-colors">High-Risk Merchant Account</Link></li>
              <li><Link href="/solutions/payment-gateway" className="text-muted-foreground hover:text-primary transition-colors">Payment Gateway</Link></li>
              <li><Link href="/solutions/chargeback-protection" className="text-muted-foreground hover:text-primary transition-colors">Chargeback Protection</Link></li>
              <li><Link href="/solutions/fraud-prevention" className="text-muted-foreground hover:text-primary transition-colors">Fraud Prevention</Link></li>
              <li><Link href="/solutions/ach" className="text-muted-foreground hover:text-primary transition-colors">ACH Processing</Link></li>
              <li><Link href="/solutions/virtual-terminal" className="text-muted-foreground hover:text-primary transition-colors">Virtual Terminal</Link></li>
              <li><Link href="/solutions/mobile-payments" className="text-muted-foreground hover:text-primary transition-colors">Mobile Payments</Link></li>
              <li><Link href="/solutions/recurring-payments" className="text-muted-foreground hover:text-primary transition-colors">Recurring Payments</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ready To Get Started?</h3>
            <p className="text-muted-foreground">
              Low or high, your risk level won&apos;t stop you from getting a fast and easy approval. We accept and provide for a number of industries.
            </p>
            <Button className="w-full">
              Open Your Merchant Account
            </Button>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Trusted by 10,000+ Merchants</p>
              <p className="text-muted-foreground">99% approval rate</p>
              <p className="text-muted-foreground">24-hour processing</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 HighRisk Payments. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 