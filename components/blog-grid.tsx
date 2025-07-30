"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const blogPosts = [
    {
      title: "Global Telephony Trends",
      excerpt: "Explore the latest trends in global telephony and how they impact modern business communications.",
      date: "2025-01-15",
      category: "Technology",
      link: "https://salescentri.com/blog/global-telephony-trends?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Scaling Remote Teams with Cloud Telephony",
      excerpt: "Learn how cloud telephony solutions can help scale your remote teams effectively.",
      date: "2025-01-12",
      category: "Remote Work",
      link: "https://salescentri.com/blog/scaling-remote-teams-with-cloud-telephony?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "B2B Call Automation Case Study",
      excerpt: "A comprehensive case study on implementing B2B call automation for improved sales performance.",
      date: "2025-01-10",
      category: "Case Study",
      link: "https://salescentri.com/blog/b2b-call-automation-case-study?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Reduce Costs with VoIP",
      excerpt: "Discover how VoIP technology can significantly reduce your business communication costs.",
      date: "2025-01-08",
      category: "Cost Optimization",
      link: "https://salescentri.com/blog/reduce-costs-with-voip?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Integration Benefits of iGCT",
      excerpt: "Understanding the integration benefits of intelligent Global Communication Technology.",
      date: "2025-01-05",
      category: "Integration",
      link: "https://salescentri.com/blog/integration-benefits-igct?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Enterprise Sales Calling Best Practices",
      excerpt: "Best practices for enterprise sales calling that drive better conversion rates.",
      date: "2025-01-03",
      category: "Sales",
      link: "https://salescentri.com/blog/enterprise-sales-calling-best-practices?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI in Cloud Telephony",
      excerpt: "How artificial intelligence is revolutionizing cloud telephony solutions.",
      date: "2025-01-01",
      category: "AI Technology",
      link: "https://salescentri.com/blog/ai-in-cloud-telephony?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "5 Metrics to Track in Cloud Calls",
      excerpt: "Essential metrics every business should track in their cloud calling systems.",
      date: "2024-12-28",
      category: "Analytics",
      link: "https://salescentri.com/blog/5-metrics-to-track-in-cloud-calls?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Secure Telephony for Global Business",
      excerpt: "Security considerations for global business telephony implementations.",
      date: "2024-12-25",
      category: "Security",
      link: "https://salescentri.com/blog/secure-telephony-for-global-business?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Best CRMs for Cloud Call Integration",
      excerpt: "Top CRM systems that offer seamless cloud call integration capabilities.",
      date: "2024-12-22",
      category: "CRM Integration",
      link: "https://salescentri.com/blog/best-crms-for-cloud-call-integration?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "CRM Syncing Best Practices",
      excerpt: "Best practices for maintaining synchronized data across CRM systems.",
      date: "2024-12-20",
      category: "CRM Management",
      link: "https://salescentri.com/blog/crm-syncing-best-practices?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Telephony Fraud Prevention Guide",
      excerpt: "Comprehensive guide to preventing telephony fraud in business communications.",
      date: "2024-12-18",
      category: "Security",
      link: "https://salescentri.com/blog/telephony-fraud-prevention-guide?utm_source=asteriaoutreach.com&utm_medium=blog&utm_campaign=crm_redirect",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div ref={ref} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

              <Button variant="outline" size="sm" asChild>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
