"use client"

import { useEffect } from "react"

export default function BlogPage() {
  useEffect(() => {
    // Redirect to salescentri.com blog
    window.location.href = "https://salescentri.com/blog"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Redirecting to Blog...</h2>
        <p className="text-gray-600">You'll be redirected to our blog in a moment.</p>
      </div>
    </div>
  )
}
