"use client"

export function OfficeLocation() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Albany Office</h2>

      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <p className="text-gray-600">Interactive Map</p>
          <p className="text-sm text-gray-500">123 Business Ave, Albany, NY</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>Located in the heart of Albany's business district</p>
        <p>Easy access to major highways and public transportation</p>
        <p>Free parking available for client meetings</p>
      </div>
    </div>
  )
}
