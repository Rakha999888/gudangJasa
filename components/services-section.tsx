"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, FileText, UserRoundPen, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FileText,
    title: "Company Profile",
    description:
      "Bangun kepercayaan dengan profil perusahaan profesional untuk bisnis Anda.",
  },
  {
    icon: UserRoundPen,
    title: "Portofolio",
    description:
      "Tampilkan karya terbaik Anda dengan desain portofolio yang elegan dan menarik.",
  },
  {
    icon: BookOpen,
    title: "Katalog",
    description:
      "Sajikan produk atau layanan dengan katalog online yang mudah diakses dan informatif.",
  },
  {
    icon: Wrench,
    title: "Custom",
    description:
      "Dapatkan solusi website yang dirancang khusus untuk kebutuhan bisnis kamu.",
  },
]

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    )

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="layanan"
      className="py-20 px-6 sm:px-10 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Layanan <span className="text-blue-600">GudangJasa</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Solusi terbaik untuk kebutuhan website bisnis Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection