import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="inline-block">Teach students</span>
            <br />
            <span className="relative">
              worldwide
              <span className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 300 12" className="w-full h-auto text-orange-500">
                  <path
                    fill="currentColor"
                    d="M1 5.5C32 2.5 62.5 8 93.5 11C124.5 14 155 10.5 186 5.5C217 0.5 247.5 3 278.5 8.5C294 11 299.5 12 300 12H1C0.5 12 -6 6.5 1 5.5Z"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc
            ipsum est pellentesque turpis ultricies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg h-auto font-medium">
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="border-none flex items-center gap-2 text-blue-600 hover:text-blue-700 px-0"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                <Play className="h-4 w-4 fill-current text-blue-600" />
              </div>
              <span>View Demo</span>
            </Button>
          </div>

          <div className="pt-8">
            <div className="text-sm text-gray-500 mb-4">Trusted by leading companies</div>
            <div className="flex flex-wrap gap-6 items-center">
              <Image src="/Black-and-White-Collection-1.png" alt="Company" width={24} height={24} className="h-6 w-auto" />
              <Image src="/Black-and-White-Collection-2.png" alt="Company" width={24} height={24} className="h-6 w-auto" />
              <Image src="/Black-and-White-Collection-3.png" alt="Company" width={24} height={24} className="h-6 w-auto" />
              <Image src="/Black-and-White-Collection-20.png" alt="Company" width={24} height={24} className="h-6 w-auto" />
              <Image src="/Black-and-White-Collection-11.png" alt="Company" width={24} height={24} className="h-6 w-auto" />
            </div>
          </div>
        </div>

        {/* Right column - Images and callouts */}
        <div className="relative h-[500px] md:h-[450px] lg:h-[550px]">
          {/* Background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[500px] md:h-[500px] bg-yellow-400 rounded-full opacity-50 blur-3xl -z-10"></div>

          {/* Teacher image - left side */}
          <div className="absolute left-0 top-16 md:top-32 z-20">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-yellow-400 overflow-hidden">
              <Image
                src="/hero-teacher.png"
                alt="Teacher"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Student image - right side */}
          <div className="absolute right-0 top-48 md:top-16 z-10">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-yellow-400 overflow-hidden">
              <Image
                src="/hero-student.png"
                alt="Student"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text callouts */}
          <div className="absolute top-4 left-4 lg:top-16 lg:left-0 bg-white p-3 rounded-lg shadow-md text-sm z-30">
            Nunc, at libero neque
          </div>
          <div className="absolute top-24 left-20 lg:top-32 lg:left-48 bg-white p-3 rounded-lg shadow-md text-sm z-30">
            Viverra sed
          </div>
          <div className="absolute bottom-48 md:bottom-32 left-0 bg-gray-800 p-3 rounded-lg shadow-md text-white text-sm z-30">
            Turpis platea nunc mattis
          </div>
          <div className="absolute bottom-24 md:bottom-16 left-20 lg:left-32 bg-gray-800 p-3 rounded-lg shadow-md text-white text-sm z-30">
            Vitae viverra ut non
          </div>
        </div>
      </div>
    </section>
  )
}