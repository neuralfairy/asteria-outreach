"use client"

import { motion } from "framer-motion"

export function BlogCategories() {
  const categories = [
    { name: "Technology", count: 8 },
    { name: "CRM Integration", count: 6 },
    { name: "Sales", count: 5 },
    { name: "Analytics", count: 4 },
    { name: "Security", count: 3 },
    { name: "Case Studies", count: 2 },
  ]

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Categories</h3>
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">{category.name}</span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
