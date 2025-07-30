"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Zap, Shield, Globe, Users, BarChart3, Settings, Headphones } from "lucide-react"

export function CapabilitiesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const capabilities = [
    {
      icon: Database,
      title: "Data Migration",
      description: "Seamless transfer of your existing customer data with zero data loss and minimal downtime.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Intelligent automation of repetitive tasks to boost productivity and reduce manual errors.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures ensuring your data meets all compliance requirements.",
    },
    {
      icon: Globe,
      title: "Third-party Integrations",
      description: "Connect with 500+ business tools including email, accounting, and marketing platforms.",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Advanced user roles and permissions to control access and maintain data security.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to track performance and identify opportunities.",
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Tailored CRM setup that matches your unique business processes and requirements.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your CRM runs smoothly at all times.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete CRM
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {" "}
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive CRM implementation covers every aspect of your sales process, from initial setup to
            ongoing optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
