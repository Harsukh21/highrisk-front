"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "What is a high risk merchant account?",
    answer: "A high-risk merchant account is a specialized payment processing account designed for businesses that operate in industries with higher chargeback rates, regulatory scrutiny, or perceived financial risk. These accounts typically have different terms, higher processing fees, and additional security measures compared to standard merchant accounts."
  },
  {
    question: "How to open a high risk merchant account?",
    answer: "Opening a high-risk merchant account involves several steps: 1) Choose a specialized high-risk payment processor, 2) Prepare required documentation (business license, bank statements, processing history), 3) Complete the application with detailed business information, 4) Undergo underwriting review, 5) Sign agreements and set up your account. The process typically takes 24-48 hours with HighRisk Payments."
  },
  {
    question: "What is high risk credit card processing?",
    answer: "High-risk credit card processing refers to payment processing services specifically designed for businesses in industries that traditional processors consider risky. This includes CBD, adult content, firearms, travel, and other industries with higher chargeback rates or regulatory challenges. High-risk processors offer specialized solutions with enhanced fraud protection and chargeback management."
  },
  {
    question: "What is the difference between a payment gateway vs a payment processor vs a merchant account?",
    answer: "A merchant account is a bank account that allows businesses to accept and process credit card payments. A payment processor is the company that handles the transaction between the merchant, customer, and banks. A payment gateway is the technology that captures and transfers payment information from the customer to the payment processor. Think of it as: Merchant Account (bank account) → Payment Gateway (technology) → Payment Processor (transaction handler)."
  },
  {
    question: "What Payment Processing Methods Does HighRisk Payments Support?",
    answer: "HighRisk Payments supports all major payment methods including credit cards (Visa, Mastercard, American Express, Discover), debit cards, ACH payments, e-checks, and digital wallets. We also support recurring billing, subscription payments, and international processing for qualifying businesses."
  },
  {
    question: "How does HighRisk Payments keep transactions secure?",
    answer: "We employ multiple layers of security including PCI DSS compliance, 3D Secure authentication, advanced fraud detection algorithms, real-time transaction monitoring, and encryption of all sensitive data. Our systems are continuously updated to protect against the latest security threats."
  },
  {
    question: "What makes HighRisk Payments one of the best high risk payment processors?",
    answer: "Our 99% approval rate, 24-hour application processing, competitive rates, advanced fraud protection, dedicated support team, and extensive industry experience make us a top choice. We understand the unique challenges of high-risk industries and provide tailored solutions that help businesses succeed."
  },
  {
    question: "Does HighRisk Payments have a rolling reserve requirement?",
    answer: "Rolling reserve requirements vary by industry and risk level. We work with each merchant to determine the most appropriate reserve structure. Some accounts may have a rolling reserve, while others may have different risk management solutions. We're transparent about all requirements upfront."
  },
  {
    question: "Does HighRisk Payments have merchant account termination fees?",
    answer: "We believe in transparent pricing with no hidden fees. While some processors charge hefty termination fees, we offer fair terms and clearly outline all costs upfront. We want long-term partnerships with our merchants, not short-term gains from hidden fees."
  }
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about high-risk payment processing and merchant accounts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 