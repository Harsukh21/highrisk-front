import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, CheckCircle, Shield } from "lucide-react"

export default function WebDesignIndustryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Web Design Payment Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Payment Solutions for Web Design & Digital Services</h1>
            <p className="text-xl text-muted-foreground mb-8">Get secure, flexible, and efficient payment solutions for web design and digital service providers. Manage projects and recurring payments with ease.</p>
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
                <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle>Project Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Flexible billing options for one-time projects and ongoing services.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Recurring Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automate recurring payments for maintenance and subscription services.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Client Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Easily manage client accounts, invoices, and payment history.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Get approved for your web design merchant account and start processing payments securely.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 