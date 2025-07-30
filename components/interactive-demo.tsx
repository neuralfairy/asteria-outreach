"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, BarChart3, Users, Settings } from "lucide-react"

export function InteractiveDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "contacts", label: "Contact Management", icon: Users },
    { id: "automation", label: "Automation", icon: Settings },
  ]

  const demoContent = {
    dashboard: {
      title: "Real-time Analytics Dashboard",
      description: "Get instant insights into your sales performance with customizable dashboards and reports.",
      features: ["Revenue tracking", "Pipeline analysis", "Performance metrics", "Custom reports"],
    },
    contacts: {
      title: "Advanced Contact Management",
      description: "Organize and manage your contacts with powerful segmentation and communication tools.",
      features: ["Contact segmentation", "Communication history", "Lead scoring", "Activity tracking"],
    },
    automation: {
      title: "Intelligent Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce manual work.",
      features: ["Email automation", "Task assignment", "Follow-up reminders", "Custom workflows"],
    },
  }

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
            See It in
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our CRM features with this interactive demo and see how they can transform your business processes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700"
                    : "bg-transparent hover:bg-blue-50"
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </Button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">{demoContent[activeTab].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{demoContent[activeTab].description}</p>

              <ul className="space-y-3">
                {demoContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                asChild
              >
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Full Demo
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-white rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo</h4>
                    <p className="text-gray-600">{demoContent[activeTab].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
