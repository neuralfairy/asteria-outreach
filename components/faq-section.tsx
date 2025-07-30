"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const faqs = [
    {
      question: "How long does CRM implementation typically take?",
      answer:
        "Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. Simple setups can be done in 2-4 weeks, while enterprise implementations may take 3-6 months.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes, comprehensive training is included in all our packages. We provide both initial training sessions and ongoing support to ensure your team maximizes the CRM's potential.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer:
        "Absolutely. We specialize in integrating CRMs with popular business tools including email platforms, accounting software, marketing automation tools, and custom applications.",
    },
    {
      question: "What CRM platforms do you work with?",
      answer:
        "We work with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and many others. We help you choose the best fit for your business needs.",
    },
    {
      question: "Is ongoing support included?",
      answer:
        "Yes, all our packages include ongoing support. The level of support varies by package, from email support in our Starter plan to 24/7 dedicated support in our Enterprise plan.",
    },
    {
      question: "How do you ensure data security during migration?",
      answer:
        "We follow enterprise-grade security protocols including encrypted data transfer, secure backup procedures, and compliance with industry standards like GDPR and SOC 2.",
    },
    {
      question: "What if we need custom features?",
      answer:
        "We can develop custom features and workflows tailored to your specific business processes. This is especially common in our Professional and Enterprise packages.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all our services. If you're not satisfied with our implementation, we'll refund your investment.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our CRM implementation services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
