"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    })

    tl.from(textRef.current, {
      opacity: 1,
      x: -50,
      duration: 0.8,
    }).from(
      imageRef.current,
      {
        opacity: 1,
        x: 50,
        duration: 0.8,
      },
      "-=0.8",
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div ref={textRef} className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tentang <span className="text-blue-600">GudangJasa</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              GudangJasa adalah penyedia jasa pembuatan website profesional yang
              berfokus pada desain modern, performa optimal, dan keamanan tinggi.
              Kami membantu bisnis, UMKM, dan personal brand membangun kehadiran
              digital yang menarik dan terpercaya.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Dengan tim berpengalaman dan dukungan teknologi terbaru, kami siap
              menciptakan website yang cepat, responsif, dan mudah dikelola.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700 text-sm sm:text-base">
                  Telah berhasil menyelesaikan beberapa proyek website
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700 text-sm sm:text-base">
                  Menjaga kepercayaan dan kepuasan klien
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700 text-sm sm:text-base">
                  Melayani klien dari berbagai wilayah Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50"
          >
            <img
              src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1762302902/Frame_1_dodhfv.png"
              className="w-full h-full object-contain md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
