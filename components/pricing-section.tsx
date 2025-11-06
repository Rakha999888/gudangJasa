"use client"

import React, { useEffect, useRef } from "react"
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
    cta: "Pilih menengah",
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
  },
]

const whatsappNumber = "6282169833829"

const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter((c): c is HTMLDivElement => c !== null)

    cards.forEach((card, index) => {
      const isHighlighted = !!plans[index].highlighted

      if (isHighlighted) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.95, y: 40 },
          {
            opacity: 1,
            scale: 1.05,
            y: -20, // efek naik di desktop
            duration: 0.6,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current as HTMLElement,
              start: "top center",
            },
          }
        )
      } else {
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
      }
    })

    return () => {
      try {
        const all = ScrollTrigger.getAll ? ScrollTrigger.getAll() : []
        all.forEach((st) => st.kill())
        gsap.killTweensOf(cards)
      } catch {
        // ignore cleanup error
      }
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, planName: string) => {
    e.stopPropagation()
    const message = `Halo, saya tertarik dengan paket ${planName} dari GudangJasa. Mohon informasi lebih lanjut.`
    const encoded = encodeURIComponent(message)
    const wa = `https://wa.me/${whatsappNumber}?text=${encoded}`
    window.open(wa, "_blank")
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: "-=10", duration: 0.25, ease: "power2.out" })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: "+=10", duration: 0.25, ease: "power2.inOut" })
  }

  return (
    <section
      ref={sectionRef}
      id="harga"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket <span className="text-blue-600">Harga</span>
          </h2>
          <p className="text-xl text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 
            gap-10 items-start relative
          "
        >
          {plans.map((plan, index) => {
            const isHighlighted = !!plan.highlighted
            const zClass = isHighlighted ? "z-20" : "z-10"
            const translateClass = isHighlighted ? "md:-translate-y-5" : "md:translate-y-0"
            const mobileSpacing = isHighlighted ? "mt-8 sm:mt-0" : ""

            return (
              <div
                key={plan.name}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative p-8 rounded-2xl transform transition-all duration-300 ${zClass} ${translateClass} ${mobileSpacing}
                  ${isHighlighted
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-200/60"
                    : "bg-white border border-gray-200 text-gray-900 shadow-xl shadow-gray-300/50"
                  }
                hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3
                `}
                style={{
                  boxShadow: isHighlighted
                    ? "0 20px 40px rgba(37, 99, 235, 0.25)"
                    : "0 15px 30px rgba(0, 0, 0, 0.08)",
                }}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md z-30">
                    Paling Populer
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-gray-900"
                    }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mb-6 ${isHighlighted ? "text-blue-100" : "text-gray-600"
                    }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-extrabold ${isHighlighted ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {plan.price}
                  </span>
                </div>

                <button
                  onClick={(e) => handleClick(e, plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${isHighlighted
                      ? "bg-white text-blue-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check
                        size={20}
                        className={
                          isHighlighted
                            ? "text-blue-100 mt-[3px]"
                            : "text-blue-600 mt-[3px]"
                        }
                      />
                      <span
                        className={
                          isHighlighted ? "text-blue-50" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
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
