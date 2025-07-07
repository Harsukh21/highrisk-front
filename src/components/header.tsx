"use client"

import Link from "next/link"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">HighRisk Payments</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="space-y-2">
                      <h4 className="font-medium">High-Risk Industries</h4>
                      <div className="grid gap-2">
                        <Link href="/industries/cbd" className="block p-2 hover:bg-accent rounded">
                          CBD & Hemp
                        </Link>
                        <Link href="/industries/adult" className="block p-2 hover:bg-accent rounded">
                          Adult Content
                        </Link>
                        <Link href="/industries/firearms" className="block p-2 hover:bg-accent rounded">
                          Firearms
                        </Link>
                        <Link href="/industries/vape" className="block p-2 hover:bg-accent rounded">
                          Vape & E-Cigarettes
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Other Industries</h4>
                      <div className="grid gap-2">
                        <Link href="/industries/dating" className="block p-2 hover:bg-accent rounded">
                          Dating Sites
                        </Link>
                        <Link href="/industries/gaming" className="block p-2 hover:bg-accent rounded">
                          Online Gaming
                        </Link>
                        <Link href="/industries/travel" className="block p-2 hover:bg-accent rounded">
                          Travel
                        </Link>
                        <Link href="/industries/collection" className="block p-2 hover:bg-accent rounded">
                          Debt Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Payment Solutions</h4>
                      <div className="grid gap-2">
                        <Link href="/solutions/merchant-accounts" className="block p-2 hover:bg-accent rounded">
                          High-Risk Merchant Accounts
                        </Link>
                        <Link href="/solutions/payment-gateway" className="block p-2 hover:bg-accent rounded">
                          Payment Gateway
                        </Link>
                        <Link href="/solutions/chargeback-protection" className="block p-2 hover:bg-accent rounded">
                          Chargeback Protection
                        </Link>
                        <Link href="/solutions/fraud-prevention" className="block p-2 hover:bg-accent rounded">
                          Fraud Prevention
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/resources" className={navigationMenuTriggerStyle()}>
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="hidden md:inline-flex">
            Get Started
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium px-4">Industries</h4>
              <div className="space-y-1">
                <Link href="/industries/cbd" className="block px-4 py-2 hover:bg-accent rounded">
                  CBD & Hemp
                </Link>
                <Link href="/industries/adult" className="block px-4 py-2 hover:bg-accent rounded">
                  Adult Content
                </Link>
                <Link href="/industries/firearms" className="block px-4 py-2 hover:bg-accent rounded">
                  Firearms
                </Link>
                <Link href="/industries/vape" className="block px-4 py-2 hover:bg-accent rounded">
                  Vape & E-Cigarettes
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium px-4">Solutions</h4>
              <div className="space-y-1">
                <Link href="/solutions/merchant-accounts" className="block px-4 py-2 hover:bg-accent rounded">
                  Merchant Accounts
                </Link>
                <Link href="/solutions/payment-gateway" className="block px-4 py-2 hover:bg-accent rounded">
                  Payment Gateway
                </Link>
                <Link href="/solutions/chargeback-protection" className="block px-4 py-2 hover:bg-accent rounded">
                  Chargeback Protection
                </Link>
              </div>
            </div>
            <div className="pt-4 border-t">
              <div className="flex flex-col space-y-2 px-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 