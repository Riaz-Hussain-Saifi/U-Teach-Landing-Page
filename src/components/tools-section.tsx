import Image from "next/image"

export default function ToolsSection() {
  const tools = [
    { name: "Google Meet", logo: "/Google-Meet.png" },
    { name: "Google Drive", logo: "/Google-Drive.png" },
    { name: "Google", logo: "/Google.png" },
    { name: "Camera", logo: "/Camera.png" },
    { name: "Infinity", logo: "/Infinity.png" },
    { name: "Calendar", logo: "/Calendar.png" },
    { name: "Analytics", logo: "/Analytics.png" },
    { name: "WiFi", logo: "/WiFi.png" },
    { name: "VR", logo: "/VR.png" },
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400 rounded-tr-full opacity-30"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All the tools that{" "}
            <span className="relative">
              you need
              <span className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 200 12" className="w-full h-auto text-orange-500">
                  <path
                    fill="currentColor"
                    d="M1 5.5C22 2.5 42.5 8 63.5 11C84.5 14 105 10.5 126 5.5C147 0.5 167.5 3 188.5 8.5C198 11 199.5 12 200 12H1C0.5 12 -4 6.5 1 5.5Z"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
            imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="h-8 bg-gray-100 flex items-center px-4 border-b">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto bg-white rounded-full px-4 py-1 text-sm text-gray-500">uteach.com</div>
            </div>
            <div className="h-[400px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                <Image
                  src={tool.logo || "/placeholder.svg"}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
