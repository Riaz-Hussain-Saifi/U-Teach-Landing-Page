import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      author: "Hellen Jummy",
      role: "Financial Counselor",
      avatar: "/User-Thumb.png",
    },
    {
      content:
        "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultrices neque, hac ultrices dolor.",
      author: "Ralph Edwards",
      role: "Math Teacher",
      avatar: "/User-Thumb1.png",
    },
    {
      content:
        "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
      author: "Hellena John",
      role: "Psychology Student",
      avatar: "/User-Thumb2.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What everyone says</h2>
        <div className="flex gap-4">
          <Button className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-700 mb-6"> {testimonial.content}</p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar || "/User-Thumb3.png"}
                alt={testimonial.author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
