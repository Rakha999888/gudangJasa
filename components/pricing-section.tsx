"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Pemula",
    price: "250K",
    description: "Cocok untuk bisnis kecil atau personal yang baru memulai",
    features: [
      "Free domain .my.id",
      "3x revisi",
      "SEO Basic",
      "1 page",
      "Desain responsif",
      "Garansi selamanya",
      "Statis",
    ],
    cta: "Pilih Pemula",
    highlighted: false,
  },
  {
    name: "Menengah",
    price: "550K",
    description: "Ideal untuk bisnis menengah yang ingin tampil profesional",
    features: [
      "Free domain .com",
      "Revisi sepuasnya",
      "SEO Standar",
      "Multi page",
      "Desain responsif",
      "Garansi selamanya",
      "Statis/Dinamis",
    ],
    cta: "Pilih Menengah",
    highlighted: true,
  },
  {
    name: "Profesional",
    price: "999K",
    description: "Sempurna untuk perusahaan besar yang membutuhkan fitur lengkap",
    features: [
      "Custom domain",
      "Revisi sepuasnya",
      "SEO Premium",
      "Multi page",
      "Desain responsif",
      "Garansi selamanya",
      "Statis/Dinamis",
    ],
    cta: "Pilih Profesional",
    highlighted: false,
  },
]

const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: sectionRef.current as HTMLElement,
          start: "top center",
        },
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 0.6,
        delay: index * 0.12,
        ease: "power3.out",
      })
    })

    return () => {
      try {
        ScrollTrigger.getAll().forEach((st) => st.kill())
        gsap.killTweensOf(cards)
      } catch (err) {
        // ignore
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="harga" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket <span className="text-blue-600">Harga</span>
          </h2>
          <p className="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const isActive = activeIndex === index
            const isHighlighted = !!plan.highlighted

            // kelas khusus untuk kartu Menengah (angkat ke atas)
            const liftClass = isHighlighted ? " -translate-y-6 md:-translate-y-8 md:scale-105" : ""

            return (
              <div
                key={plan.name}
                ref={(el: HTMLDivElement | null) => {
                  // <- PENTING: gunakan block sehingga fungsi tidak mengembalikan nilai (void)
                  cardsRef.current[index] = el
                }}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)} // toggle aktif
                className={`relative p-8 rounded-2xl transition-all duration-300 transform cursor-pointer ${
                  isHighlighted
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl"
                    : "bg-white border border-gray-200 text-gray-900"
                } ${
                  isActive
                    ? "scale-105 shadow-2xl ring-4 ring-blue-400"
                    : "hover:shadow-xl hover:-translate-y-1"
                } ${liftClass}`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                    Paling Populer
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>

                <p className={`mb-6 ${isHighlighted ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>

                <div className="mb-8">
                  <span className={`text-5xl font-extrabold ${isHighlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                    isHighlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check
                        size={20}
                        className={isHighlighted ? "text-blue-100 mt-[3px]" : "text-blue-600 mt-[3px]"}
                        aria-hidden
                      />
                      <span className={isHighlighted ? "text-blue-50" : "text-gray-700"}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
