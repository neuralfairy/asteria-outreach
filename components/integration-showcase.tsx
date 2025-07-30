"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function IntegrationShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const integrations = [
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Pipedrive", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Zoho", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft Dynamics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
    { name: "QuickBooks", logo: "/placeholder.svg?height=60&width=120" },
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
            Seamless
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {" "}
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with all major CRM platforms and business tools to ensure your systems work together perfectly.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
