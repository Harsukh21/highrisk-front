import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, CheckCircle, Shield } from "lucide-react"

export default function SweepstakesIndustryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Sweepstakes Payment Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Payment Solutions for Sweepstakes & Contests</h1>
            <p className="text-xl text-muted-foreground mb-8">Get secure, compliant, and efficient payment solutions for sweepstakes and contest businesses. Manage entries and prize payouts with ease.</p>
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
                <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle>Prize Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Easily manage prize distribution and compliance for sweepstakes.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Entry Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Track contest entries and ensure fair play with our platform.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Compliance Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stay compliant with sweepstakes regulations and industry standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Get approved for your sweepstakes merchant account and start processing payments securely.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 