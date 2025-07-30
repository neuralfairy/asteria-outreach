"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CRM Implementation
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Insights</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay updated with the latest trends, best practices, and insights in CRM implementation and sales process
            optimization.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
