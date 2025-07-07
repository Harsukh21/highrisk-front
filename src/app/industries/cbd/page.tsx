import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, DollarSign, Clock } from "lucide-react"

export default function CBDPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              CBD & Hemp Payment Processing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Secure CBD Payment Processing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate the complex world of CBD payment processing with our specialized solutions designed specifically for CBD and hemp businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get CBD Merchant Account
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Compliant Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our CBD payment processing solutions are designed to meet the unique compliance requirements of the CBD industry, ensuring your business operates within legal boundaries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get competitive processing rates specifically tailored for CBD businesses, helping you maximize your profits while maintaining secure payment processing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Quick Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get approved for your CBD merchant account in as little as 24 hours with our streamlined application process designed for CBD businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose HighRisk Payments for CBD?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges facing CBD businesses and provide solutions that help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team has years of experience working with CBD businesses and understands the regulatory landscape.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Compliance Support</h3>
                  <p className="text-muted-foreground">
                    We help ensure your payment processing meets all relevant regulations and compliance requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Chargeback Protection</h3>
                  <p className="text-muted-foreground">
                    Advanced fraud detection and chargeback management to protect your business from losses.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Multiple Payment Methods</h3>
                  <p className="text-muted-foreground">
                    Accept credit cards, debit cards, ACH payments, and digital wallets from your customers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is available around the clock to help with any questions or issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Easy Integration</h3>
                  <p className="text-muted-foreground">
                    Simple integration with popular e-commerce platforms and shopping carts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Processing CBD Payments?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get approved for your CBD merchant account today and start accepting payments securely.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 