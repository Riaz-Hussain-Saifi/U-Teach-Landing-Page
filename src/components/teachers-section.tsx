"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function TeachersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesGridRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const teachers = [
    { id: 1, image: "/Teacher.png" },
    { id: 2, image: "/Teacher1.png" },
    { id: 3, image: "/Teacher2.png" },
    { id: 4, image: "/Teacher3.png" },
    { id: 5, image: "/Teacher4.png" },
    { id: 6, image: "/Teacher5.png" },
    { id: 7, image: "/Teacher6.png" },
    { id: 8, image: "/Teacher7.png" },
    { id: 9, image: "/Teacher8.png" },
    // Removed the 10th teacher since we only have 9 positions defined
  ]

  // Custom positions and sizes for the grid layout
  const imagePositions = [
    { top: "0%", left: "20%", width: "180px", height: "240px", zIndex: 1 },
    { top: "0%", left: "45%", width: "160px", height: "220px", zIndex: 3 },
    { top: "5%", left: "70%", width: "140px", height: "180px", zIndex: 2 },
    { top: "30%", left: "0%", width: "200px", height: "260px", zIndex: 4 },
    { top: "26%", left: "35%", width: "170px", height: "230px", zIndex: 5 },
    { top: "32%", left: "65%", width: "150px", height: "200px", zIndex: 1 },
    { top: "58%", left: "15%", width: "160px", height: "210px", zIndex: 2 },
    { top: "60%", left: "42%", width: "180px", height: "230px", zIndex: 3 },
    { top: "55%", left: "70%", width: "170px", height: "220px", zIndex: 4 },
    // Add a position for the 10th teacher if needed
    { top: "15%", left: "85%", width: "160px", height: "200px", zIndex: 2 },
  ]

  useEffect(() => {
    // Observer for section entry animation
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observer for images staggered animation
    const imagesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = Array.from(entry.target.children)
            images.forEach((image, i) => {
              setTimeout(() => {
                image.classList.add("opacity-100", "translate-y-0", "scale-100")
                image.classList.remove("opacity-0", "translate-y-4", "scale-95")
              }, i * 100)
            })
            imagesObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observer for content fade-in animation
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0")
            entry.target.classList.remove("opacity-0", "translate-x-8")
            contentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      sectionRef.current.classList.add("transition-opacity", "duration-700", "ease-out", "opacity-0")
      sectionObserver.observe(sectionRef.current)
    }

    if (imagesGridRef.current) {
      imagesObserver.observe(imagesGridRef.current)
    }

    if (contentRef.current) {
      contentRef.current.classList.add("transition-all", "duration-700", "delay-300", "ease-out", "opacity-0", "translate-x-8")
      contentObserver.observe(contentRef.current)
    }

    const currentSectionRef = sectionRef.current;
    const currentImagesGridRef = imagesGridRef.current;
    const currentContentRef = contentRef.current;

    return () => {
      if (currentSectionRef) sectionObserver.unobserve(currentSectionRef)
      if (currentImagesGridRef) imagesObserver.unobserve(currentImagesGridRef)
      if (currentContentRef) contentObserver.unobserve(currentContentRef)
    }
  }, [])


  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Images Grid - Mobile Version (3 columns) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="overflow-hidden rounded-lg shadow-md aspect-[3/4] relative transition-all duration-500 opacity-0 translate-y-4 scale-95"
              >
                <Image
                  src={teacher.image}
                  alt={`Teacher ${teacher.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid - Desktop Version (Scattered layout) */}
        <div ref={imagesGridRef} className="hidden md:block relative h-[600px]">
          {teachers.map((teacher, index) => {
            // Check if position exists for this index
            if (index < imagePositions.length) {
              return (
                <div
                  key={teacher.id}
                  className="absolute overflow-hidden rounded-lg shadow-md transition-all duration-500 opacity-0 translate-y-4 scale-95"
                  style={{
                    top: imagePositions[index].top,
                    left: imagePositions[index].left,
                    width: imagePositions[index].width,
                    height: imagePositions[index].height,
                    zIndex: imagePositions[index].zIndex,
                  }}
                >
                  <Image
                    src={teacher.image}
                    alt={`Teacher ${teacher.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              );
            }
            return null; // Skip teachers without a position
          })}
        </div>

        <div ref={contentRef} className="space-y-6">
          <div className="relative inline-block">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-10 -right-10 text-yellow-400 animate-pulse"
            >
              <path
                d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet international students & teachers
            </h2>
          </div>
          <p className="text-gray-700 max-w-lg">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget
            commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
            aenean lorem faucibus integer.
          </p>
          <Link 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-2 group transition-colors duration-300"
          >
            Explore teachers and students
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}