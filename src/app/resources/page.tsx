import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  FileText, 
  Video, 
  MessageCircle, 
  HelpCircle,
  ArrowRight,
  Download,
  Play,
  Phone,
  Mail,
  Clock
} from "lucide-react"

const resources = [
  {
    icon: BookOpen,
    title: "Payment Processing Guide",
    description: "Complete guide to understanding high-risk payment processing and merchant accounts.",
    type: "Guide",
    duration: "15 min read",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: FileText,
    title: "Chargeback Prevention",
    description: "Learn how to prevent chargebacks and protect your business from fraudulent disputes.",
    type: "Article",
    duration: "8 min read",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Video,
    title: "Integration Tutorials",
    description: "Step-by-step video tutorials for integrating our payment solutions with your platform.",
    type: "Video",
    duration: "5 videos",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: FileText,
    title: "Compliance Checklist",
    description: "Essential compliance requirements for high-risk businesses in different industries.",
    type: "Checklist",
    duration: "10 min read",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    icon: BookOpen,
    title: "Fraud Prevention Best Practices",
    description: "Industry best practices for preventing fraud and protecting your payment processing.",
    type: "Guide",
    duration: "12 min read",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  {
    icon: FileText,
    title: "API Documentation",
    description: "Complete API documentation for developers integrating with our payment gateway.",
    type: "Documentation",
    duration: "Technical",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  }
]

const supportOptions = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call our expert team for immediate assistance",
    contact: "877-546-0331",
    availability: "24/7",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and get a response within 2 hours",
    contact: "support@highriskpayments.com",
    availability: "Business Hours",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available on website",
    availability: "24/7",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: HelpCircle,
    title: "Knowledge Base",
    description: "Browse our comprehensive knowledge base",
    contact: "Self-service",
    availability: "24/7",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  }
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Resources & Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to succeed with high-risk payment processing. From guides and tutorials to expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Educational Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn everything you need to know about high-risk payment processing with our comprehensive resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${resource.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className={`h-8 w-8 ${resource.color}`} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {resource.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {resource.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary w-full justify-start">
                    {resource.type === "Video" ? (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Read More
                      </>
                    )}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Support When You Need It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert support team is available 24/7 to help you with any questions or issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${option.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <option.icon className={`h-8 w-8 ${option.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{option.contact}</p>
                    <p className="text-xs text-muted-foreground">{option.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our services and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I get started with HighRisk Payments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Getting started is easy! Simply fill out our online application form or call us at 877-546-0331. Our team will guide you through the process and get you approved in as little as 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What documentation do I need to apply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You&apos;ll need your business license, bank statements, processing history (if applicable), and basic business information. Our team will provide a complete checklist during the application process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does the approval process take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most applications are approved within 24-48 hours. We pride ourselves on our fast approval process and 99% approval rate for qualified businesses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What industries do you support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We support a wide range of high-risk industries including CBD, adult content, firearms, travel, gaming, and many more. Contact us to discuss your specific industry needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert team is here to help you succeed with high-risk payment processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Browse Knowledge Base
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 