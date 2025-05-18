import Image from "next/image"

export default function StatsSection() {
  const stats = [
    {
      value: "195",
      label: "user countries",
      icon: "/heart-circle-sharp.png",
    },
    {
      value: "1M",
      label: "valued teachers",
      icon: "/diamond.png",
    },
    {
      value: "17M",
      label: "happy students",
      icon: "/school.png",
    },
  ]

  return (
    <section className="bg-[#111827] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full p-8 mb-6">
                <Image src={stat.icon || "/placeholder.svg"} alt={stat.label} width={64} height={64} />
              </div>
              <div className="text-6xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-xl text-yellow-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
