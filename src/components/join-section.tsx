import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function JoinSection() {
  const profiles = Array(13)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      image: `/profile/${i + 1}.png`,
    }))

  return (
    <section className="bg-yellow-400 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-white opacity-10 text-9xl font-bold">B</div>
      <div className="absolute top-20 left-20 w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 0L19.2 12.8L32 16L19.2 19.2L16 32L12.8 19.2L0 16L12.8 12.8L16 0Z"
            fill="white"
            fillOpacity="0.2"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" fill="white" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-40 right-40 w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="white" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Join a world of learning</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi.
        </p>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg h-auto mb-16">
          Sign Up Now
        </Button>

        <div className="relative">
          {profiles.map((profile, index) => {
            // Calculate position in a circle
            const angle = (index / profiles.length) * 2 * Math.PI
            const radius = 40 // % of container
            const x = 50 + radius * Math.cos(angle) // 50% is center
            const y = 50 + radius * Math.sin(angle) // 50% is center

            return (
              <div
                key={profile.id}
                className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={profile.image || "/User-Thumb.png"}
                  alt={`Profile ${profile.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
          })}

          {/* Add some icons scattered around */}
          <div className="absolute top-[20%] left-[30%] w-6 h-6 text-white opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-[70%] left-[20%] w-8 h-8 text-white opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" />
              <path d="M7 12H17M12 7V17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-[30%] right-[20%] w-6 h-6 text-white opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-[20%] right-[30%] w-8 h-8 text-white opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
