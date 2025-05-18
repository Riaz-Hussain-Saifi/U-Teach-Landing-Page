import Image from "next/image"

export default function PartnerLogos() {
  const partners = [
    { name: "Partner 1", logo: "/Group-7.png" },
    { name: "Partner 2", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Partner 3", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Partner 4", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Partner 5", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Partner 6", logo: "/placeholder.svg?height=40&width=100" },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">All the tools that you need</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={100}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
