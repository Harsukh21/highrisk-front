import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Building2 } from "lucide-react"

export default function B2BPaymentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">B2B Payment Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Secure B2B Payment Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">Streamline your business-to-business transactions with our comprehensive B2B payment processing solutions designed for high-risk industries.</p>
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
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Business Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tailored payment solutions designed specifically for business-to-business transactions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Invoice Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automated invoice processing and payment tracking for efficient B2B operations.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enterprise-grade security and fraud protection for all B2B payment transactions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Get approved for your B2B payment processing and start streamlining your business transactions.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
 