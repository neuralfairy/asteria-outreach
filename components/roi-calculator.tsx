"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp } from "lucide-react"

export function ROICalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [inputs, setInputs] = useState({
    monthlyRevenue: "",
    salesTeamSize: "",
    avgDealSize: "",
    conversionRate: "",
  })

  const [results, setResults] = useState<{
    currentAnnualRevenue: number
    projectedIncrease: number
    roiPercentage: number
    paybackPeriod: number
  } | null>(null)

  const calculateROI = () => {
    const monthlyRevenue = Number.parseFloat(inputs.monthlyRevenue) || 0
    const salesTeamSize = Number.parseFloat(inputs.salesTeamSize) || 0
    const avgDealSize = Number.parseFloat(inputs.avgDealSize) || 0
    const conversionRate = Number.parseFloat(inputs.conversionRate) || 0

    if (monthlyRevenue > 0 && salesTeamSize > 0) {
      const currentAnnualRevenue = monthlyRevenue * 12
      const improvementFactor = 1.25 // 25% average improvement
      const projectedIncrease = currentAnnualRevenue * (improvementFactor - 1)
      const implementationCost = 7200 // Average annual cost
      const roiPercentage = ((projectedIncrease - implementationCost) / implementationCost) * 100
      const paybackPeriod = implementationCost / (projectedIncrease / 12)

      setResults({
        currentAnnualRevenue,
        projectedIncrease,
        roiPercentage,
        paybackPeriod,
      })
    }
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
            Calculate Your
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much revenue growth you can expect with our CRM implementation services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">ROI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthlyRevenue">Monthly Revenue ($)</Label>
                  <Input
                    id="monthlyRevenue"
                    type="number"
                    placeholder="50000"
                    value={inputs.monthlyRevenue}
                    onChange={(e) => setInputs({ ...inputs, monthlyRevenue: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="salesTeamSize">Sales Team Size</Label>
                  <Input
                    id="salesTeamSize"
                    type="number"
                    placeholder="5"
                    value={inputs.salesTeamSize}
                    onChange={(e) => setInputs({ ...inputs, salesTeamSize: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="avgDealSize">Average Deal Size ($)</Label>
                  <Input
                    id="avgDealSize"
                    type="number"
                    placeholder="5000"
                    value={inputs.avgDealSize}
                    onChange={(e) => setInputs({ ...inputs, avgDealSize: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="conversionRate">Current Conversion Rate (%)</Label>
                  <Input
                    id="conversionRate"
                    type="number"
                    placeholder="15"
                    value={inputs.conversionRate}
                    onChange={(e) => setInputs({ ...inputs, conversionRate: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Calculate ROI
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Your Results</h3>
              </div>

              {results ? (
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <div className="text-sm text-gray-600 mb-1">Current Annual Revenue</div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${results.currentAnnualRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700 mb-1">Projected Revenue Increase</div>
                    <div className="text-2xl font-bold text-green-800">
                      ${results.projectedIncrease.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-700 mb-1">ROI Percentage</div>
                    <div className="text-2xl font-bold text-blue-800">{results.roiPercentage.toFixed(0)}%</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-sm text-purple-700 mb-1">Payback Period</div>
                    <div className="text-2xl font-bold text-purple-800">{results.paybackPeriod.toFixed(1)} months</div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Based on industry averages, our CRM implementation typically delivers 25% revenue growth within
                      the first year.
                    </p>
                    <Button className="w-full" asChild>
                      <a
                        href="https://salescentri.com/contact/sales-inquiry/request-quote"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Your Custom Quote
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Enter your business details to see your potential ROI</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
