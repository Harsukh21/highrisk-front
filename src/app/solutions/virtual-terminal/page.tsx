import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, CreditCard, Shield, Zap } from "lucide-react"

export default function VirtualTerminalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Virtual Terminal</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Secure Virtual Terminal Processing</h1>
            <p className="text-xl text-muted-foreground mb-8">Process payments over the phone, by mail, or in-person with our secure virtual terminal solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">Get Started</Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Web-Based Terminal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access your virtual terminal from any device with an internet connection.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Multiple Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Accept credit cards, debit cards, and ACH payments through one platform.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>PCI Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bank-level security with PCI DSS compliance and fraud protection.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Set up your virtual terminal and start processing payments securely today.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 