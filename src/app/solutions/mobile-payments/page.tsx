import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Wifi, Shield } from "lucide-react"

export default function MobilePaymentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Mobile Payments</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Mobile Payment Processing</h1>
            <p className="text-xl text-muted-foreground mb-8">Accept payments anywhere with our mobile payment solutions for smartphones and tablets.</p>
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
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Turn your smartphone or tablet into a payment terminal with our mobile app.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Offline Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Process payments even without internet connection and sync when online.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Secure & Encrypted</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bank-level encryption and security for all mobile transactions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Download our mobile app and start accepting payments on the go today.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 