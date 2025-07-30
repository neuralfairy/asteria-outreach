"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: "500+", label: "CRM Implementations", suffix: "" },
    { number: "98", label: "Client Satisfaction", suffix: "%" },
    { number: "45", label: "Average ROI Increase", suffix: "%" },
    { number: "24/7", label: "Support Available", suffix: "" },
  ]

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
