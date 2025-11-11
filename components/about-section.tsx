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
        start: "top 80%",
        end: "bottom center",
        scrub: false,
      },
    })

    tl.from([textRef.current, imageRef.current], {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0,
    })
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

            {/* Responsive Points */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start sm:items-center justify-start sm:justify-start space-x-3 sm:space-x-4 max-w-xs sm:max-w-sm mx-auto md:mx-0">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-blue-600 rounded-full mt-1 sm:mt-0 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                  Telah berhasil menyelesaikan beberapa proyek website
                </p>
              </div>

              <div className="flex items-start sm:items-center justify-start sm:justify-start space-x-3 sm:space-x-4 max-w-xs sm:max-w-sm mx-auto md:mx-0">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-blue-600 rounded-full mt-1 sm:mt-0 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                  Menjaga kepercayaan dan kepuasan klien
                </p>
              </div>

              <div className="flex items-start sm:items-center justify-start sm:justify-start space-x-3 sm:space-x-4 max-w-xs sm:max-w-sm mx-auto md:mx-0">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-blue-600 rounded-full mt-1 sm:mt-0 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
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
              alt="Tentang GudangJasa"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
