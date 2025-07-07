import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, CheckCircle, Shield } from "lucide-react"

export default function Level23ProcessingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Level 2 & 3 Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Enhanced Data with Level 2 & 3 Processing</h1>
            <p className="text-xl text-muted-foreground mb-8">Optimize B2B transactions with enhanced data capture, detailed reporting, and cost savings.</p>
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
                  <Monitor className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle>Enhanced Data Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Collect more transaction details for better reporting and lower rates.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>B2B Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Optimize business-to-business payments and save on processing costs.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Detailed Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access detailed transaction reports for better business insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Get approved for Level 2 & 3 Processing and start optimizing your B2B payments today.</p>
            <Button size="lg" className="text-lg px-8 py-6">Apply Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 