"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingTiers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "Basic CRM setup",
        "Up to 5 users",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "30-day free trial",
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced CRM configuration",
        "Up to 25 users",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team training included",
        "Process automation",
        "Custom workflows",
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full CRM implementation",
        "Unlimited users",
        "24/7 dedicated support",
        "Enterprise integrations",
        "Custom reporting",
        "On-site training",
        "Advanced automation",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      popular: false,
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our expert consultation and implementation
            support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? "border-blue-500 scale-105" : "border-gray-100"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  tier.popular
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                asChild
              >
                <a href={tier.link} target="_blank" rel="noopener noreferrer">
                  {tier.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
          <Button variant="outline" asChild>
            <a href="https://salescentri.com/pricing/enterprise-custom" target="_blank" rel="noopener noreferrer">
              Need a custom solution? Contact us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
