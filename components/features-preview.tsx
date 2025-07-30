"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Settings, Users, BarChart3, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Settings,
      title: "Custom CRM Setup",
      description: "Tailored CRM configuration that matches your unique business processes and requirements.",
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs to ensure your team maximizes CRM adoption and efficiency.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced reporting dashboards that provide actionable insights into your sales performance.",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline repetitive tasks with intelligent automation workflows and triggers.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your valuable customer data.",
    },
    {
      icon: Globe,
      title: "System Integration",
      description: "Seamless integration with your existing tools and business applications.",
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
            Complete CRM Implementation
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial setup to ongoing optimization, we provide end-to-end CRM services that drive real business
            results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            asChild
          >
            <a href="https://salescentri.com/solutions/psa-suite/features" target="_blank" rel="noopener noreferrer">
              Explore All Features
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
