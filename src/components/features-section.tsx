"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Observer for section entry animation
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observer for cards staggered animation
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.children)
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0")
                card.classList.remove("opacity-0", "translate-y-8")
              }, i * 150)
            })
            cardsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      sectionRef.current.classList.add("transition-all", "duration-700", "ease-out", "opacity-0", "translate-y-8")
      sectionObserver.observe(sectionRef.current)
    }

    if (headingRef.current) {
      headingRef.current.classList.add("transition-all", "duration-700", "delay-300", "ease-out")
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current)
    }

    const currentSectionRef = sectionRef.current;
    const currentCardsRef = cardsRef.current;

    return () => {
      if (currentSectionRef) sectionObserver.unobserve(currentSectionRef)
      if (currentCardsRef) cardsObserver.unobserve(currentCardsRef)
    }
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-gray-800">
            All the cool{" "}
            <span className="relative">
              features
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
          <p className="text-gray-700 max-w-lg">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla.
            Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra
            a, neque orci.
          </p>
          <Link 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-2 group transition-colors duration-300"
          >
            View all the features
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-8">
                <div className="p-3 bg-blue-100 text-xs font-medium">Popular</div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Design for how people think</h3>
                  <p className="text-sm text-gray-600">
                    Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
                  </p>
                  <button 
                    className="mt-4 text-blue-600 border border-blue-600 rounded-lg px-4 py-2 text-sm font-medium
                    hover:bg-blue-50 transition-colors duration-300"
                  >
                    Take Lesson
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-8">
                <div className="relative h-48 sm:h-40 md:h-48">
                  <Image 
                    src="/Blob.png" 
                    alt="Feature" 
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-0 sm:pt-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-8 relative">
                <div className="relative h-48 sm:h-40 md:h-48">
                  <Image 
                    src="/Content-Box.png" 
                    alt="Feature" 
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <Image 
                    src="/futures-image1.png" 
                    alt="User" 
                    width={60} 
                    height={60} 
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-8">
                <div className="relative h-48 sm:h-40 md:h-48">
                  <Image 
                    src="/futures-image2.png" 
                    alt="Feature" 
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}